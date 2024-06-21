package br.com.gilmariosoftware.documentor.generic;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Version;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 *
 * @author gilmario
 */
@MappedSuperclass
@Data
@EqualsAndHashCode(callSuper = false)
public class GenericEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, updatable = false)
    private LocalDate dataCadastro;
    @Column(nullable = false, updatable = false)
    private LocalTime horaCadastro;
    @Column(nullable = false)
    private LocalDate dataAtualizacao;
    @Column(nullable = false)
    private LocalTime horaAtualizacao;
    @Version
    private Integer version;

    @PrePersist
    protected void setCreateTime() {
        LocalTime hora = LocalTime.now();
        LocalDate data = LocalDate.now();

        setDataCadastro(data);
        setHoraCadastro(hora);

        setDataAtualizacao(data);
        setHoraAtualizacao(hora);
    }

    @PreUpdate
    protected void setUpdateTime() {
        LocalTime hora = LocalTime.now();
        LocalDate data = LocalDate.now();

        setDataAtualizacao(data);
        setHoraAtualizacao(hora);
    }

}
