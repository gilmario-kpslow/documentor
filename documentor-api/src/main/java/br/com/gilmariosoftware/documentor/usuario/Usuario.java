package br.com.gilmariosoftware.documentor.usuario;

import br.com.gilmariosoftware.documentor.generic.GenericEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Cacheable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import java.io.Serializable;
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
public class Usuario extends GenericEntity implements Serializable {

    @Column(unique = true, length = 40, nullable = false)
    private String username;
    @Column(length = 255, nullable = true, insertable = false, updatable = false)
    @JsonIgnore
    private String password;
    @Column(length = 100, nullable = true)
    private String nome;
    @Column(length = 100, nullable = false)
    private String email;
    @Column(length = 20, nullable = true)
    @Enumerated(EnumType.STRING)
    private Perfil perfil;

}
