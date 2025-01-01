import CustomeError from "./customError";
class UnAuthenticatedError extends CustomeError {
    constructor(message) {
        super(message);
        this.statusCode = 401;
    }
}
export default UnAuthenticatedError;
