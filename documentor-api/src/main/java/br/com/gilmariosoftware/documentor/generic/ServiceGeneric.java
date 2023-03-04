package br.com.gilmariosoftware.documentor.generic;

import br.com.gilmariosoftware.documentor.seguranca.SegurancaService;
import br.com.gilmariosoftware.documentor.usuario.Usuario;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import javax.inject.Inject;
import javax.transaction.Transactional;
import lombok.Getter;
import org.modelmapper.ModelMapper;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author gilmario
 * @param <T>
 * @param <P>
 */
@Getter
public abstract class ServiceGeneric<T extends GenericEntity, P extends GenericResponse> {

    @Inject
    SegurancaService segurancaService;
    protected final ModelMapper modelMapper = new ModelMapper();

    protected abstract JpaRepository getRepository();

    protected Optional<Usuario> getUsuarioLogado() {
        return segurancaService.getUsuarioLogado();
    }

    protected <R extends GenericRequest, C extends Class<T>> T toEntity(R request) {

        if (Objects.isNull(request.getId())) {
            return modelMapper.map(request, getClassEntity());
        }
        Optional<T> get = getRepository().findById(request.getId());
        if (get.isPresent()) {
            T t = get.get();
            modelMapper.map(request, t);
            return t;
        }

        return modelMapper.map(request, getClassEntity());
    }

    protected Optional<P> toResponse(T t) {
        return Optional.of(modelMapper.map(t, getClassResponse()));
    }

    @Transactional
    public <R extends GenericRequest> Optional<P> salvar(R request) {
        return toResponse((T) getRepository().save(toEntity(request)));
    }

    public List<P> listarTodos() {
        return getRepository().findAll().stream().map(t -> {
            Optional<P> a = toResponse((T) t);
            return a;
        }).map(aj -> {
            return ((Optional) aj).get();
        }).toList();
    }

    public abstract Class<T> getClassEntity();
//    public Class<T> getClassEntity() {
//        final ParameterizedType superclass = (ParameterizedType) getClass().getGenericSuperclass();
//        return (Class<T>) superclass.getActualTypeArguments()[0];
//    }

    public abstract Class<P> getClassResponse();
//    public final Class<P> getClassResponse() {
//        final ParameterizedType superclass = (ParameterizedType) getClass().getGenericSuperclass();
//        return (Class<P>) superclass.getActualTypeArguments()[1];
//    }

}
