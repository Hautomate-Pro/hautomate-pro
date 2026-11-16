import { app } from './app.js';
import { env, getAdminConfigError } from './config/env.js';
import { verifySmtpConnection } from './services/mailer.js';

app.listen(env.PORT, () => {
  console.log(`API listening on http://localhost:${env.PORT}`);
  const adminConfigError = getAdminConfigError();
  if (adminConfigError) console.warn(`[admin] Admin sign-in is disabled. ${adminConfigError}`);
  void verifySmtpConnection();
});
