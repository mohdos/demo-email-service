
import * as express from 'express';
import { EmailController } from '../../controllers';
import { joiValidator } from '../../middlewares';
import { emailValidationSchemas } from '../../validations';

const router = express.Router();

router.route('/send-email').post(joiValidator(emailValidationSchemas.sendEmail), EmailController.sendEmail);
router.route('/test').post((req, res) => { console.log("TEST"); return res.send("TESTY") });

export {router as emailRouter}

