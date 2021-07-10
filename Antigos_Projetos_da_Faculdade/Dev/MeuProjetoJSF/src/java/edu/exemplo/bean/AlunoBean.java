package edu.exemplo.bean;

import edu.exemplo.dao.AlunoDao;
import edu.exemplo.vo.AlunoVO;
import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;

@ManagedBean
@ViewScoped
public class AlunoBean {

  private AlunoVO aluno;
          
  public AlunoBean() {
    this.setAluno(new AlunoVO());
  }

  public AlunoVO getAluno() {
    return aluno;
  }

  public void setAluno(AlunoVO aluno) {
    this.aluno = aluno;
  }

  public List<AlunoVO> getAlunos() {
    AlunoDao alunoDao = new AlunoDao();    
    return alunoDao.obterAlunos();
  }
  
  public void salvarAluno() {
    AlunoDao alunoDao = new AlunoDao();
    alunoDao.salvarAluno(this.getAluno());
    
    this.setAluno(new AlunoVO());
  }
  
  public void editarAluno(AlunoVO aluno) {
    this.setAluno(aluno);
  }
  
  public void excluirAluno(Long alunoId) {
    AlunoDao alunoDao = new AlunoDao();
    alunoDao.excluirAluno(alunoId);
  }
}
