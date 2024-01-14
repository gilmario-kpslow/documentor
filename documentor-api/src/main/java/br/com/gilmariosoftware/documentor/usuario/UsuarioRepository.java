package br.com.gilmariosoftware.documentor.usuario;

import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author gilmario
 */
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByUsername(String username);

    @Query("UPDATE Usuario set password=:password WHERE id=:id")
    @Modifying
    int createPassword(@Param("id") Long id, @Param("password") String encript);

    Page<Usuario> findByNomeLike(String nome, Pageable page);

}
