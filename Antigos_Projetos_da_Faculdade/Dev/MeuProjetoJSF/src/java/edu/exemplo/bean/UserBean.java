package edu.exemplo.bean;

import edu.exemplo.vo.UserVO;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;

@ManagedBean
@SessionScoped
public class UserBean {

  private UserVO user = null;
  
  public UserBean() {
  }

  public UserVO getUser() {
    return user;
  }

  public void setUser(UserVO user) {
    this.user = user;
  }
  
  public void doLogin(LoginBean login)
  {
    this.user = new UserVO();
    user.setName(login.getName());
  }
  
  public String doLogout()
  {
    FacesContext.getCurrentInstance().getExternalContext().invalidateSession();
    return "/index.xhtml?faces-redirect=true";
  }
  
}