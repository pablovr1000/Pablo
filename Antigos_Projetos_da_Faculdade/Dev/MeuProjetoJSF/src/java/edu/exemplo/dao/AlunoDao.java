package edu.exemplo.dao;

import edu.exemplo.vo.AlunoVO;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

public class AlunoDao {

  public List<AlunoVO> obterAlunos() {
    EntityManager em = JPAUtil.getEntityManager();
    Query q = em.createQuery("select a from AlunoVO a", AlunoVO.class);

    return q.getResultList();
  }
  
  public void salvarAluno(AlunoVO aluno) {
    EntityManager em = JPAUtil.getEntityManager();
    EntityTransaction tx = em.getTransaction();
    tx.begin();
    em.merge(aluno);
    tx.commit();
    em.close();
  }
  
  public void excluirAluno(long idAluno) {
    EntityManager em = JPAUtil.getEntityManager();
    EntityTransaction tx = em.getTransaction();
    tx.begin();
    AlunoVO aluno = em.getReference(AlunoVO.class, idAluno);
    em.remove(aluno);
    tx.commit();
    em.close();
  }

  public AlunoVO obterAluno(Long idAluno) {
    EntityManager em = JPAUtil.getEntityManager();
    try 
    {
      return em.find(AlunoVO.class, idAluno);
    }
    finally
    {
      em.close();
    }
  }
}

