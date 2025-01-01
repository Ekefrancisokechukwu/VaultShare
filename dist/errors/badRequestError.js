import CustomeError from "./customError";
class BadRequestError extends CustomeError {
    constructor(message) {
        super(message);
        this.statusCode = 400;
    }
}
export default BadRequestError;
