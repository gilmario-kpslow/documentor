package br.com.gilmariosoftware.documentor.projeto;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author gilmario
 */
public interface ProjetoRepository extends JpaRepository<Projeto, Long> {

    Page<Projeto> findByNomeLike(String nome, Pageable page);
}
