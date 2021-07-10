package edu.exemplo.vo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


/**
 *
 * @author 162150043
 */
@Entity
public class AlunoVO {
    @Id
    @GeneratedValue
  private Long idAluno;
  private String nome, ra;
  private Double nota;

    public Long getIdAluno() {
        return idAluno;
    }

    public void setIdAluno(Long idAluno) {
        this.idAluno = idAluno;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getRa() {
        return ra;
    }

    public void setRa(String ra) {
        this.ra = ra;
    }

    public Double getNota() {
        return nota;
    }
    
    public void setNota(Double nota) {
        this.nota = nota;
    }
}
