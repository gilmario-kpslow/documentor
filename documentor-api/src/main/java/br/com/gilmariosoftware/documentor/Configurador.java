package br.com.gilmariosoftware.documentor;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;

import br.com.gilmariosoftware.documentor.usuario.RequestPassword;
import br.com.gilmariosoftware.documentor.usuario.UsuarioRequest;
import br.com.gilmariosoftware.documentor.usuario.UsuarioService;
import io.quarkus.runtime.Startup;

@Startup
@ApplicationScoped
public class Configurador {

    private UsuarioService usuarioService;

    public Configurador(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostConstruct
    public void init() {

        if (usuarioService.findByUsername("admin").isEmpty()) {
            UsuarioRequest admin = new UsuarioRequest();
            admin.setEmail("admin@email.com");
            admin.setUsername("admin");
            admin.setPassword("123456");
            admin.setNome("Administrador");
            usuarioService.salvar(admin);

            usuarioService
                    .createPassword(RequestPassword.builder().id(admin.getId()).password(admin.getPassword()).build());
        }

    }

}
