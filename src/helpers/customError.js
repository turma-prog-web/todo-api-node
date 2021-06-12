const { BAD_REQUEST, INTERNAL_SERVER_ERROR, PRECONDITION_FAILED } =
  require('http-status-codes').StatusCodes;
const error = {};

error.statusCode = {
  generalErr: INTERNAL_SERVER_ERROR,
  invalidParams: BAD_REQUEST,
  serverErr: PRECONDITION_FAILED,
};

error.global = {
  general: {
    statusCode: error.statusCode.generalErr,
    code: 'GLO0001',
    message: 'Ocorreu um erro.',
  },
  validationError: {
    statusCode: error.statusCode.invalidParams,
    code: 'GLO0002',
    message: 'Ocorreu algum problema na validação dos dados',
  },
};

error.task = {
  failedToFetchTasks: {
    statusCode: error.statusCode.serverErr,
    code: 'TSK0001',
    message: 'Ocorreu um erro ao buscar as tarefas, por favor tente novamente.',
  },
  failOnCreateTask: {
    statusCode: error.statusCode.serverErr,
    code: 'TSK0002',
    message: 'Ocorreu um erro ao criar a tarefa',
  },
};

module.exports = error;
