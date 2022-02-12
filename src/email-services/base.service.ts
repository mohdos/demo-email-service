
/**
 * @abstract
 * Base email service for sending email
 */
export abstract class BaseEmailService {

    /**
     * Send email method
     * @param __namedParameters.subject email subject
     * @param __namedParameters.text email body text
     * @param __namedParameters.html email body html
     * @param __namedParameters.recipients array of emails of the recipients
     * 
     * @returns result of sending the email
     */
    public abstract sendEmail({subject, text, html, recipients}: {subject: string, text?: string, html?: string, recipients: string[]}): Promise<any>
}


