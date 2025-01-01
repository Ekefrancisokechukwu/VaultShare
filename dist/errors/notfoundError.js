import CustomeError from "./customError";
class NotfoundError extends CustomeError {
    constructor(message) {
        super(message);
        this.statusCode = 404;
    }
}
export default NotfoundError;
