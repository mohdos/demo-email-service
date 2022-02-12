
import * as process from 'process';

import 'jasmine';
import { emailServicesList, SendGridService } from '../../email-services';
import { EmailService } from '../../services';
import { CustomError } from '../../utils';

const fakeSendEmail = async ({subject, text, html, recipients}: {subject: string, text?: string, html?: string, recipients: string[]}) => {
    return {
        result: {
            subject, text, html, recipients
        }
    }
}

const fakeSendEmailErrored = async ({subject, text, html, recipients}: {subject: string, text?: string, html?: string, recipients: string[]}) => {
    const errored = true;
    if (errored) throw new CustomError({message: "Error sending email", code: 500});
    return {}
}

describe('Testing email services with fallback', () => {

    it('Test all services error', async () => {
        emailServicesList.forEach((service) => {
            spyOn(service, 'sendEmail').and.callFake(fakeSendEmailErrored);
        });
        try {
            const result = await EmailService.sendEmail({subject: 'Test subject', recipients: ["mohd-1999@hotmail.com"], text: "Testing with text"});
            fail('Email sent while all services are down');
        }
        catch (err: any) {
            expect(err).not.toBeNull();
        }
    });

    it('Test with first email service errored should send using the other service(s)', async () => {
        spyOn(emailServicesList[0], 'sendEmail').and.callFake(fakeSendEmailErrored);
        spyOn(emailServicesList[1], 'sendEmail').and.callFake(fakeSendEmail);
        try {
            const result = await EmailService.sendEmail({subject: 'Test subject', recipients: ["mohd-1999@hotmail.com"], text: "Testing with text"});
            expect(result).not.toBeNull();
        }
        catch (err: any) {
            fail('Email services did not fallback');
        }
    });

    it('Test with all email services working', async () => {
        emailServicesList.forEach((service) => {
            spyOn(service, 'sendEmail').and.callFake(fakeSendEmail);
        });
        try {
            const result = await EmailService.sendEmail({subject: 'Test subject', recipients: ["mohd-1999@hotmail.com"], text: "Testing with text"});
            expect(result).not.toBeNull();
        }
        catch (err: any) {
            fail('Email services did not fallback');
        }
    });
    

})

