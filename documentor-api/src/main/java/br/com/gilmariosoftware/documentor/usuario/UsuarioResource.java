package br.com.gilmariosoftware.documentor.usuario;

import br.com.gilmariosoftware.documentor.generic.GenericResource;
import io.quarkus.security.Authenticated;
import java.util.List;
import java.util.Optional;
import javax.annotation.security.DenyAll;
import javax.annotation.security.RolesAllowed;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

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

    UsuarioService getService() {
        return this.service;
    }
}
