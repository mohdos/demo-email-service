

export abstract class BaseEmailService {
    public abstract sendEmail({subject, text, html, recipients}: {subject: string, text?: string, html?: string, recipients: string[]}): Promise<any>
}


