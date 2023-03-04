package br.com.gilmariosoftware.documentor.dica;

import br.com.gilmariosoftware.documentor.generic.GenericResponse;
import br.com.gilmariosoftware.documentor.usuario.UsuarioResponse;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;
import java.time.LocalTime;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author gilmario
 */
@Getter
@Setter
public class DicaResponse extends GenericResponse {

    private String nome;
    private String descricao;
    private String tags;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private LocalDate dataCadastro;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm:ss")
    private LocalTime horaCadastro;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private LocalDate dataAtualizacao;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm:ss")
    private LocalTime horaAtualizacao;
    private UsuarioResponse autor;
}
