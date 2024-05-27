package br.com.gilmariosoftware.documentor.dica;

import io.quarkus.security.Authenticated;
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
@Path("dica")
// @DenyAll
public class DicaResource {

    @Inject
    protected DicaService service;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    // @Authenticated
    public List<DicaResponse> listarTodos() {
        return service.listarTodos();
    }

    @POST
    @Authenticated
    public Optional<DicaResponse> create(DicaRequest request) {
        return service.salvar(request);
    }
}
