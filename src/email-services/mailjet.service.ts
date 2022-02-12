import { BaseEmailService } from "./base.service";
import * as nodeMailjet from 'node-mailjet';
import { vars } from "../config";


export class MailjetService extends BaseEmailService {

    mailjet: nodeMailjet.Email.Client;
    constructor() {
        super();
        this.mailjet = nodeMailjet.connect(vars.emailServices.mailjet.apiKey, vars.emailServices.mailjet.apiSecret); // initializing mailjet
    }

    /**
     * Mailjet Send email method
     * @param __namedParameters.subject email subject
     * @param __namedParameters.text email body text
     * @param __namedParameters.html email body html
     * @param __namedParameters.recipients array of emails of the recipients
     * 
     * @returns result of sending the email
     */
    public sendEmail({subject = "", text = undefined, html = undefined, recipients}: {subject: string, text?: string, html?: string, recipients: string[]}): Promise<any> {
          const textHtml = {
              ...(html ? {HTMLPart: html} : {TextPart: text || ""})
          }

          return this.mailjet.post('send', { version: 'v3.1' }).request({
              Messages: [
                {
                    From: {
                        "Email": vars.emailServices.fromEmail,
                        "Name": vars.emailServices.fromName,
                    },
                    To: recipients.map((recipient) => {
                        return {
                          "Email": recipient,
                          "Name": recipient
                        }
                    }),
                    Subject: subject,
                    ...textHtml
                }
            ]
          })
    }
}






