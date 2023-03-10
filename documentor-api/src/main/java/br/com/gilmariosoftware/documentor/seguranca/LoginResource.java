package br.com.gilmariosoftware.documentor.seguranca;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

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
