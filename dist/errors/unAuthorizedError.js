import CustomeError from "./customError";
class UnAuthorizedError extends CustomeError {
    constructor(message) {
        super(message);
        this.statusCode = 403;
    }
}
export default UnAuthorizedError;
