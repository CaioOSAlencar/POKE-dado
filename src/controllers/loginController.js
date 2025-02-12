import LoginService from '../service/loginService.js';
import CommonResponse from '../utils/commonResponse.js';
// import { LoginSchema } from '../utils/validators/schemas/zod/LoginSchema.js';

/**
  * Validação nesta aplicação segue o segue este artigo:
*/
class LoginController {
  constructor() {
    this.service = new LoginService();
  }

  logar = async (req, res) => {
    try {
      console.log('Estou no logar em LoginController, enviando req para loginService');

      // 1º validação estrutural - validar os campos passados por body
      const body = req.body || {};
      
      console.log('body', body);
      
      // const validatedBody = LoginSchema.parse(body);

      const data = await this.service.logar(body);

      return CommonResponse.success(res, data);
    } catch (error) {
      return CommonResponse.error(res, error);
    }
  }
}

export default LoginController;
