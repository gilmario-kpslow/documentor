package br.com.gilmariosoftware.documentor.projeto;

import java.util.List;
import java.util.Optional;
import javax.annotation.security.DenyAll;
import javax.annotation.security.RolesAllowed;
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
@Path("projeto")
@DenyAll
public class ProjetoResource {

    @Inject
    protected ProjetoService service;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @RolesAllowed(value = {"ADMIN"})
    public List<ProjetoResponse> listarTodos() {
        return service.listarTodos();
    }

    @POST
    @RolesAllowed(value = {"ADMIN"})
    public Optional<ProjetoResponse> create(ProjetoRequest request) {
        return service.salvar(request);
    }
}
