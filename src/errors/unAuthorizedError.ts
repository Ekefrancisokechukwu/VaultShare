import CustomeError from "./customError";

class UnAuthorizedError extends CustomeError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = 403;
  }
}

export default UnAuthorizedError;
