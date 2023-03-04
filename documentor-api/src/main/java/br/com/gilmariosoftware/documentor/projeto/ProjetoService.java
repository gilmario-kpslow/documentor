package br.com.gilmariosoftware.documentor.projeto;

import br.com.gilmariosoftware.documentor.generic.ServiceGeneric;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author gilmario
 */
@RequestScoped
public class ProjetoService extends ServiceGeneric<Projeto, ProjetoResponse> {

    @Inject
    private ProjetoRepository repository;

    @Override
    protected JpaRepository getRepository() {
        return repository;
    }

    @Override
    public Class<Projeto> getClassEntity() {
        return Projeto.class;
    }

    @Override
    public Class<ProjetoResponse> getClassResponse() {
        return ProjetoResponse.class;
    }

}
