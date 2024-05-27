package br.com.gilmariosoftware.documentor.projeto;

import br.com.gilmariosoftware.documentor.generic.GenericEntity;
import jakarta.persistence.Cacheable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 *
 * @author gilmario
 */
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Cacheable
@Data
@EqualsAndHashCode(callSuper = true)
public class Projeto extends GenericEntity implements Serializable {

    @Column(length = 30, nullable = false)
    private String nome;
    @Column(length = 10, nullable = false)
    private String slug;
    @Column(length = 255, nullable = true)
    private String descricao;

}
