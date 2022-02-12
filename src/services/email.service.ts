import { errorManager } from "../config/errorManager";
import { emailServicesList } from "../email-services";
import { CustomError, Logger, LogTypes } from "../utils";


export class EmailService {
    
    static async sendEmail({subject = "", text = undefined, html = undefined, recipients}: {subject: string, text?: string, html?: string, recipients: string[]}) {
        for (let emailService of emailServicesList) {
            try {
                const result = await emailService.sendEmail({subject, text, html, recipients});
                Logger.logEmailSent({subject, text, html, recipients});
                return {result};
            }
            catch(error: any) {
                Logger.logEvent(error.message || error, LogTypes.error);
                continue;
            }
        }
        throw new CustomError({ ...errorManager.INTERNAL_SERVER_ERROR });
    }

}




