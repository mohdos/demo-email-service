
import moment = require('moment');

export enum LogTypes {
    error = "ERROR", info = "INFO"
}

export class Logger {
    static logEvent(message: string, type: LogTypes) {
        console.log(`[${moment().format('DD-MM-YYYY HH:mm')}] [${type}] ${message}`);
    }

    static logEmailSent({subject = "", text = undefined, html = undefined, recipients}: {subject: string, text?: string, html?: string, recipients: string[]}) {
        Logger.logEvent(`[EMAIL SENT] | Recipients ${recipients} | SUBJECT ${subject} | BODY ${text || html || ''}`, LogTypes.info);
    }
}


