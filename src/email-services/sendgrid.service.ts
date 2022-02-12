import { BaseEmailService } from "./base.service";
import sendGrid from '@sendgrid/mail';
import { vars } from "../config";

export class SendGridService extends BaseEmailService {

    constructor() {
        super();
        sendGrid.setApiKey(vars.emailServices.sendGrid.apiKey);
    }
    public sendEmail({subject = "", text = undefined, html = undefined, recipients}: {subject: string, text?: string, html?: string, recipients: string[]}): Promise<any> {
          const textHtml = {
              ...(html ? {html} : {text: text || ""})
          }
          return sendGrid.sendMultiple({
              from: vars.emailServices.fromEmail,
              to: recipients,
              subject,
              ...textHtml
          })
    }
}




