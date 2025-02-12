import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import LoginRepository from '../repositories/LoginRepository.js';

class LoginService {
    constructor() {
        this.repository = new LoginRepository();
    }

    async logar(body) {
        try {
            console.log('Estou no logar em LoginService');

            // Buscar usuário no banco de dados
            const userEncontrado = await this.repository.buscarApelido(body.nome);
            if (!userEncontrado) {
                throw {
                    statusCode: 404,
                    errorType: 'notFound',
                    field: 'Nome',
                    details: [],
                    customMessage: 'Usuário não encontrado'
                };
            }

            // Validar a senha
            const senhaValida = await bcrypt.compare(body.senha, userEncontrado.senha);

            // retornar erro se a senha não for válida
            if (!senhaValida) {
                throw {
                    statusCode: 401,
                    errorType: 'unauthorized',
                    field: 'Senha',
                    details: [],
                    customMessage: 'Senha não autorizada'
                };
            }

            // Gerar tokens
            // const refreshtoken = jwt.sign(
            //     {
            //         id: userEncontrado._id,
            //         nome: userEncontrado.nome,
            //         // Adicione outros campos necessários, mas evite dados sensíveis
            //     },
            //     process.env.JWT_SECRET,
            //     { expiresIn: process.env.JWT_EXPIRATION_REFRESH_TOKEN }
            // );

            // const accesstoken = jwt.sign(
            //     {
            //         id: userEncontrado._id,
            //         email: userEncontrado.email,
            //         // Adicione outros campos necessários, mas evite dados sensíveis
            //     },
            //     process.env.JWT_SECRET,
            //     { expiresIn: process.env.JWT_EXPIRATION_ACESS_TOKEN }
            // );

            // await this.repository.atualizar(userEncontrado._id, { refreshtoken: refreshtoken });
            
            // userEncontrado.senha = undefined;
            // userEncontrado.refreshtoken = undefined;

            // return { refreshtoken, accesstoken, user: userEncontrado };
        } catch (error) {
            console.error('Erro no logar em LoginService:', error);
            throw {
                statusCode: error.statusCode || 500,
                errorType: error.errorType || 'internalServerError',
                field: error.field || 'Service',
                details: [error.message],
                customMessage: error.customMessage || 'Erro ao realizar login'
            };
        }
    }

    async token(token) {
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

        const userEncontrado = await this.repository.buscarPorId(decoded.id);
        console.log(userEncontrado);

        if (userEncontrado.refreshtoken !== token) {
            throw {
                statusCode: 498,
                errorType: 'unauthorized',
                field: 'token',
                details: [],
                customMessage: "O token JWT está incorreto!"
            };
        }

        const refreshtoken = jwt.sign(
            {
                id: userEncontrado._id,
                email: userEncontrado.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION_REFRESH_TOKEN }
        );

        const accesstoken = jwt.sign(
            {
                id: userEncontrado._id,
                email: userEncontrado.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION_ACESS_TOKEN }
        );

        await this.repository.atualizar(userEncontrado._id, { refreshtoken: refreshtoken });

        return { refreshtoken, accesstoken };
    }

    async logout(token) {
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

        if (!decoded) {
            throw {
                statusCode: 498,
                errorType: 'unauthorized',
                field: 'token',
                details: [],
                customMessage: "O token está expirado!"
            };
        }

        const userEncontrado = await this.repository.buscarPorId(decoded.id);

        if (!userEncontrado) {
            throw {
                statusCode: 401,
                errorType: 'unauthorized',
                field: 'token',
                details: [],
                customMessage: "Usuário não encontrado."
            };
        }

        await this.repository.atualizar(userEncontrado._id, { refreshtoken: null });

        return { mensage: "Usuario deslogado." };
    }

    async revoke(id) {
        const userEncontrado = await this.repository.buscarPorId(id);

        if (!userEncontrado) {
            throw {
                statusCode: 401,
                errorType: 'unauthorized',
                field: 'token',
                details: [],
                customMessage: "Usuário não encontrado."
            };
        }

        await this.repository.atualizar(userEncontrado._id, { refreshtoken: null });

        return { mensage: "Usuario deslogado." };
    }
}

export default LoginService;