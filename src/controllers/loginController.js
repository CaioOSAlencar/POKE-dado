import LoginService from '../services/loginService.js';
import { CommonResponse} from '../utils/commonResponse.js';
import { LoginSchema } from '../utils/validators/schemas/zod/LoginSchema.js';

/**
  * Validação nesta aplicação segue o segue este artigo:
*/
class LoginController {
  constructor() {
    this.service = new LoginService();
  }

  logar = async (req, res) => {
    console.log('Estou no logar em LoginController, enviando req para loginService');

    // 1º validação estrutural - validar os campos passados por body
    const body = req.body || {};
    
    const validatedBody = LoginSchema.parse(body);

    const data = await this.service.logar(validatedBody);

    return CommonResponse.success(res, data);
  }
}

export default LoginController;
