/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.gilmariosoftware.documentor.dica;

import java.util.List;
import java.util.Optional;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import io.quarkus.security.Authenticated;

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
