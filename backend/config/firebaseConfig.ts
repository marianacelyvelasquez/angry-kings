import admin from 'firebase-admin';

const serviceAccount = require('TODO-ADD-THE-RIGHT-PATH');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin;
