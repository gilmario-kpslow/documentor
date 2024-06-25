package br.com.gilmariosoftware.documentor.usuario;

import br.com.gilmariosoftware.documentor.generic.GenericRequest;
import br.com.gilmariosoftware.documentor.generic.ServiceGeneric;
import br.com.gilmariosoftware.documentor.seguranca.PasswordManager;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author gilmario
 */
@RequestScoped
public class UsuarioService extends ServiceGeneric<Usuario, UsuarioResponse> {

    @Inject
    UsuarioRepository repository;

    @Inject
    PasswordManager passwordManager;

    public Optional<UsuarioResponse> salvar(UsuarioRequest request) {
        return super.salvar(request);
    }

    @Override
    public <R extends GenericRequest> Optional<UsuarioResponse> salvar(R request) {
        return super.salvar(request);
    }

    public Optional<Usuario> findByUsername(String name) {
        return repository.findByUsername(name);
    }

    @Override
    protected JpaRepository getRepository() {
        return repository;
    }

    @Override
    public Class<Usuario> getClassEntity() {
        return Usuario.class;
    }

    @Override
    public Class<UsuarioResponse> getClassResponse() {
        return UsuarioResponse.class;
    }

    @Override
    protected Optional<UsuarioResponse> toResponse(Usuario t) {
        return super.toResponse(t);
    }

    public void createPassword(RequestPassword request) {
        repository.createPassword(request.getId(), passwordManager.encript(request.getPassword()));
    }

    public Optional<UsuarioResponse> getDadosUsuarioLogado() {
        return toResponse(getUsuarioLogado().get());
    }

    public Page<UsuarioResponse> consultar(ConsultaUsuarioRequest page) {
        return toResponse(repository.findByNomeLike(page.getNome() + "%", getPageRequest(page)), getPageRequest(page));
    }

}
