
import * as express from 'express';
import { EmailController } from '../../controllers';
import { joiValidator } from '../../middlewares';
import { emailValidationSchemas } from '../../validations';

const router = express.Router();

router.route('/send-email').post(joiValidator(emailValidationSchemas.sendEmail), EmailController.sendEmail);

export {router as emailRouter}

