import { BaseEmailService } from "./base.service";
import sendGrid from '@sendgrid/mail';
import { vars } from "../config";

export class SendGridService extends BaseEmailService {

    constructor() {
        super();
        sendGrid.setApiKey(vars.emailServices.sendGrid.apiKey); // initialize send grid api key
    }

    /**
     * Sendgrid Send email method
     * @param __namedParameters.subject email subject
     * @param __namedParameters.text email body text
     * @param __namedParameters.html email body html
     * @param __namedParameters.recipients array of emails of the recipients
     * 
     * @returns result of sending the email
     */
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




