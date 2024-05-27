/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.gilmariosoftware.documentor.core;

import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author gilmario
 */
@Provider
public class ExceptionHadler implements ExceptionMapper<RuntimeException> {

    private static final Logger LOG = Logger.getLogger(ExceptionHadler.class.getName());

    @Override
//    @Produces(value = MediaType.TEXT_PLAIN)
    public Response toResponse(RuntimeException e) {
        LOG.log(Level.SEVERE, "ERROR", e);
        return Response.status(Response.Status.BAD_REQUEST).
                entity(new ErrorMessage(e.getMessage())).build();
    }

}
