package br.com.gilmariosoftware.documentor.projeto;

import jakarta.annotation.security.DenyAll;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;
import java.util.Optional;

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
