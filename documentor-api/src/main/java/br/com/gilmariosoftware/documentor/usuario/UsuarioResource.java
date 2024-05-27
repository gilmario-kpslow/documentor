package br.com.gilmariosoftware.documentor.usuario;

import br.com.gilmariosoftware.documentor.generic.GenericResource;
import io.quarkus.security.Authenticated;
import jakarta.annotation.security.DenyAll;
import jakarta.annotation.security.RolesAllowed;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;

/**
 *
 * @author gilmario
 */
@Path("usuario")
@DenyAll
@RequestScoped
public class UsuarioResource extends GenericResource<Usuario, UsuarioResponse> {

    @Inject
    UsuarioService service;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @RolesAllowed(value = {"ADMIN"})
    public List<UsuarioResponse> listarTodos() {
        return service.listarTodos();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Authenticated
    @Path("auth/logado")
    public Optional<UsuarioResponse> getUsuarioLogado() {
        return service.getDadosUsuarioLogado();
    }

    @POST
    @RolesAllowed(value = {"ADMIN"})
    public Optional<UsuarioResponse> create(UsuarioRequest request) {
        return service.salvar(request);
    }

    @POST
    @RolesAllowed(value = {"ADMIN"})
    @Path("create-password")
    public void create(RequestPassword request) {
        service.createPassword(request);
    }

    @POST
    @RolesAllowed(value = {"ADMIN"})
    @Path("consulta")
    public Page<UsuarioResponse> consulta(ConsultaUsuarioRequest request) {
        return service.consultar(request);
    }

    UsuarioService getService() {
        return this.service;
    }
}
