import { BaseEmailService } from "./base.service";
import * as nodeMailjet from 'node-mailjet';
import { vars } from "../config";


export class MailjetService extends BaseEmailService {

    mailjet: nodeMailjet.Email.Client;
    constructor() {
        super();
        this.mailjet = nodeMailjet.connect(vars.emailServices.mailjet.apiKey, vars.emailServices.mailjet.apiSecret);
    }
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






