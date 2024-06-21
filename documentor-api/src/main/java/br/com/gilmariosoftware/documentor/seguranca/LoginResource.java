package br.com.gilmariosoftware.documentor.seguranca;

import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

/**
 *
 * @author gilmario
 */
@Path("auth")
public class LoginResource {

    @Inject
    protected SegurancaService segurancaService;

    @POST
    @Path("login")
    @Produces(value = MediaType.APPLICATION_JSON)
    @Consumes(value = MediaType.APPLICATION_JSON)
    public UsuarioLogado getToken(LoginRequest request) {
        return segurancaService.login(request.getUsername(), request.getPassword()).get();
    }
}
