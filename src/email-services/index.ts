import { BaseEmailService } from "./base.service";
import { MailjetService } from "./mailjet.service";
import { SendGridService } from "./sendgrid.service";


const emailServicesList: BaseEmailService[] = [new SendGridService(), new MailjetService()];
export {
    BaseEmailService,
    MailjetService,
    SendGridService,
    emailServicesList
}

