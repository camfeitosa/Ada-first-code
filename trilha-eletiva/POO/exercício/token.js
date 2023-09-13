class Usuario {
    usuarios = ["mario@luigi.com", "peach@apple.com"];
  
    constructor(email) {
      this.email = email;
    }
  
    esqueciSenha(email) {
      if (this.usuarios.includes(email)) {
        return EsqueciSenhaUtils.gerarToken(email);
      } else {
        return "E-mail não encontrado";
      }
    }
  
    validarToken(email, token) {
      return EsqueciSenhaUtils.validarToken(email, token);
    }
  }

  class Usuario {
    usuarios = ["mario@luigi.com", "peach@apple.com"];
  
    constructor(email) {
      this.email = email;
    }
  
    esqueciSenha(email) {
      if (this.usuarios.includes(email)) {
        return EsqueciSenhaUtils.gerarToken(email);
      } else {
        return "E-mail não encontrado";
      }
    }
  
    validarToken(email, token) {
      return EsqueciSenhaUtils.validarToken(email, token);
    }
  }

const usuario = new Usuario('camila@abj.com')
usuario.validarToken()

// class EsqueciSenhaUtils{
//     constructor(token){
//         this.token = token;
//     }

//     gerarToken{

//     }

//     validarToken{

//     }
// }