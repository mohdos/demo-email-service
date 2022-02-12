import * as joi from "joi";



export const emailValidationSchemas = {
    sendEmail: joi.object().keys({
        body: joi.object().keys({
            subject: joi.string().min(1).required(),
            text: joi.string().min(2),
            html: joi.string().min(2),
            recipients: joi.array().items(joi.string().email()).min(1).required()
        }).or('text', 'html').unknown(false)
    }).unknown(true)
}



