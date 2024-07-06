package br.com.gilmariosoftware.documentor.projeto;

import jakarta.annotation.security.DenyAll;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;

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

    @POST
    @RolesAllowed(value = {"ADMIN"})
    @Path("consulta")
    public Page<ProjetoResponse> consulta(ConsultaProjetoRequest request) {
        return service.consultar(request);
    }

    @DELETE
    @RolesAllowed(value = {"ADMIN"})
    @Path("{id}")
    public void delete(@PathParam("id") Long id) {
        service.delete(id);
    }

    @GET
    @RolesAllowed(value = {"ADMIN"})
    @Path("{id}")
    public Optional<ProjetoResponse> editar(@PathParam("id") Long id) {
        return service.edicao(id);
    }
}
