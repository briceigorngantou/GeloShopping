import { ErrorHelper } from './error.helper';
export class ResponseHelper {
    constructor(res) {
        this.res = res;
    }

    /**
     * Send a success response
     * @param {Object} data - The response data
     * @param {number} statusCode - The HTTP status code
     */
    success(data, statusCode = 200) {
        this.res.status(statusCode).json({
            status: 'success',
            data,
        });
    }

    /**
     * Send an error response
     * @param {string} message - The error message
     * @param {number} statusCode - The HTTP status code
     */
    error(message, statusCode = 500) {
        return new ErrorHelper(message, statusCode);
    }
}
