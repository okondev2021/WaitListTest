'use strict';

import path from 'path';
import google from '@googleapis/forms';
import {authenticate} from '@google-cloud/local-auth';

const formID = '1Zx5OH_yK9PINuyeL-X6GNeW0WRgos7vpkaLoC9HZ1Vo';

async function runSample() {
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, 'credentials.json'),
    scopes: 'https://www.googleapis.com/auth/forms.responses.readonly',
  });
  const forms = google.forms({
    version: 'v1',
    auth: auth,
  });
  const res = await forms.forms.responses.list({
    formId: formID,
  });
  return res.data.responses.length;
}


runSample()
  .then(result => {
    console.log(result); // result will be available here
  })
  .catch(error => {
    console.error(error);
  });

// if (module === require.main) {
//   runSample().catch(console.error);
// }
// module.exports = runSample;