package br.com.gilmariosoftware.documentor.dica;

import br.com.gilmariosoftware.documentor.generic.ServiceGeneric;
import jakarta.enterprise.context.Dependent;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

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
