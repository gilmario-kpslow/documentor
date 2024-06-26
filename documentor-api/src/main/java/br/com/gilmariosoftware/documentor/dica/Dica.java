package br.com.gilmariosoftware.documentor.dica;

import br.com.gilmariosoftware.documentor.generic.GenericEntity;
import br.com.gilmariosoftware.documentor.usuario.Usuario;
import jakarta.persistence.Cacheable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 *
 * @author gilmario
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Cacheable
public class Dica extends GenericEntity {

    @Column(length = 100, nullable = false)
    private String nome;
    @Column(length = 2000, nullable = false)
    private String descricao;
    @Column(length = 255)
    private String tags;
    @JoinColumn(nullable = false)
    @ManyToOne
    private Usuario autor;

}
