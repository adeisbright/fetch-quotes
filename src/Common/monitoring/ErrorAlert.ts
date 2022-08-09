import events from "events";

const { EventEmitter } = events;

export default class ErrorAlert extends EventEmitter {
    message: string;
    errorType: string;
    constructor(msg: string, type: string) {
        super();
        this.message = msg;
        this.errorType = type;
    }

    notify() {
        this.addListener("error", this.sendError);
        this.emit("error");
    }

    sendError() {
        if (process.env.NODE_ENV !== "production") {
            console.log(`A new ${this.errorType} : ${this.message}`);
        }
    }
}
