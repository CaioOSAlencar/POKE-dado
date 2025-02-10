export { default as messages } from '../utils/messages.js';

export const commonResponse = {
    itemCreated: (item) => ({
      statusCode: 201,
      message: 'Item criado com sucesso',
      item,
    }),
    itemDeleted: (item) => ({
      statusCode: 200,
      message: 'Item deletado com sucesso',
      item,
    }),
  };

class CustomError extends Error {
  constructor({ statusCode, errorType, field = null, details = [], customMessage = null  }) {
    super(customMessage || 'An error occurred'); // Passar customMessage para definir a mensagem
    this.name = 'CustomError'; // Adicione esta linha
    this.statusCode = statusCode;
    this.errorType = errorType;
    this.field = field;
    this.details = details;
    this.customMessage = customMessage;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}
;

const CommonResponse2 = {
  success: (res, data) => {
    res.status(200).json({ success: true, data });
  },
  error: (res, message) => {
    res.status(500).json({ success: false, message });
  }
};

export default commonResponse;

export { CustomError, CommonResponse2 };