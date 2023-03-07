package br.com.gilmariosoftware.documentor.dica;

import java.util.Optional;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.gilmariosoftware.documentor.generic.ServiceGeneric;

/**
 *
 * @author gilmario
 */
@Dependent
public class DicaService extends ServiceGeneric<Dica, DicaResponse> {

    @Inject
    private DicaRepository repository;

    @Transactional
    public Optional<DicaResponse> salvar(DicaRequest request) {
        Dica entity = toEntity(request);
        entity.setAutor(getUsuarioLogado().get());
        return toResponse(repository.save(entity));
    }

    @Override
    protected JpaRepository getRepository() {
        return repository;
    }

    @Override
    public Class<Dica> getClassEntity() {
        return Dica.class;
    }

    @Override
    public Class<DicaResponse> getClassResponse() {
        return DicaResponse.class;
    }

}
