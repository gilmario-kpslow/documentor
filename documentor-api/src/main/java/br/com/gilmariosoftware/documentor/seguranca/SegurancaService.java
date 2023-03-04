package br.com.gilmariosoftware.documentor.seguranca;

import br.com.gilmariosoftware.documentor.usuario.Usuario;
import br.com.gilmariosoftware.documentor.usuario.UsuarioResponse;
import br.com.gilmariosoftware.documentor.usuario.UsuarioService;
import io.smallrye.jwt.build.Jwt;
import java.time.Duration;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Optional;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.SecurityContext;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.eclipse.microprofile.jwt.Claims;
import org.eclipse.microprofile.jwt.JsonWebToken;
import org.modelmapper.ModelMapper;

/**
 *
 * @author gilmario
 */
@RequestScoped
public class SegurancaService {

    @ConfigProperty(name = "mp.jwt.verify.issuer", defaultValue = "http://localhost")
    protected String ISSUER;

    @Inject
    protected UsuarioService usuarioService;

    @Inject
    PasswordManager passwordManager;

    @Context
    SecurityContext ctx;

    @Inject
    JsonWebToken jwt;

    public Optional<Usuario> getUsuarioLogado() {
        return usuarioService.findByUsername(jwt.getName());
    }

    public Optional<UsuarioLogado> login(String username, String password) {

        Optional<Usuario> usuario = usuarioService.findByUsername(username);
        if (usuario.isEmpty()) {
            throw new RuntimeException("Usuario ou senha incorretos!");
        }

        if (!passwordManager.match(password, usuario.get().getPassword())) {
            throw new RuntimeException("Usuario ou senha incorretos!");
        }

        String token = Jwt.issuer(ISSUER)
                .upn(usuario.get().getUsername())
                .groups(new HashSet<>(Arrays.asList(usuario.get().getPerfil().name())))
                .claim(Claims.full_name.name(), usuario.get().getNome())
                .expiresIn(Duration.ofDays(1))
                .sign();

        return Optional.of(new UsuarioLogado(new ModelMapper().map(usuario.get(), UsuarioResponse.class), token));

    }

}
