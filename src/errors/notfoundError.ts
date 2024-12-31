import CustomeError from "./customError";

class NotfoundError extends CustomeError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = 404;
  }
}

export default NotfoundError;
