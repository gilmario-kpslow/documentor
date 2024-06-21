package br.com.gilmariosoftware.documentor;

import br.com.gilmariosoftware.documentor.usuario.RequestPassword;
import br.com.gilmariosoftware.documentor.usuario.Usuario;
import br.com.gilmariosoftware.documentor.usuario.UsuarioRequest;
import br.com.gilmariosoftware.documentor.usuario.UsuarioService;
import io.quarkus.runtime.Startup;
import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.ApplicationScoped;
import java.util.Objects;
import java.util.Optional;

@Startup
@ApplicationScoped
public class Configurador {

    private UsuarioService usuarioService;

    public Configurador(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostConstruct
    public void init() {

        Optional<Usuario> op = usuarioService.findByUsername("admin");

        if (op.isEmpty()) {
            UsuarioRequest admin = new UsuarioRequest();
            admin.setEmail("admin@email.com");
            admin.setUsername("admin");
            admin.setPassword("admin");
            admin.setNome("Administrador");
            usuarioService.salvar(admin);

            usuarioService
                    .createPassword(RequestPassword.builder().id(admin.getId()).password("admin").build());
        } else {
            Usuario u = op.get();
            if (Objects.isNull(u.getPassword())) {
                usuarioService
                        .createPassword(RequestPassword.builder().id(u.getId()).password("admin").build());
            }

        }

    }

}
