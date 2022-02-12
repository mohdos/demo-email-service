
import * as path from 'path';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('dotenv-safe').config({
  allowEmptyValues: true,
  path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`),
  sample: path.join(__dirname, '../../.env.example'),
});

BigInt.prototype['toJSON'] = function() { return this.toString()  }

export const vars = {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT || '3000'),

  emailServices: {
    fromEmail: String(process.env.FROM_EMAIL || ""),
    fromName: String(process.env.FROM_NAME || ""),
    sendGrid: {
      apiKey: String(process.env.SENDGRID_KEY || "")
    },
    mailjet: {
      apiKey: String(process.env.MAILJET_KEY || ""),
      apiSecret: String(process.env.MAILJET_SECRET || "")
    }
  }
};