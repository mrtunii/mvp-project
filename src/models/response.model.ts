export class Response {
    public message: string;
    public payload: any;
    public statusCode: number;

    constructor(message?: string, payload?:any, statusCode:number = 200) {
        this.message = message;
        this.payload = payload;
        this.statusCode = statusCode;
    }
}