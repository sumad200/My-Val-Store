import axios from 'axios';

export const postReqBody = {
  client_id: 'riot-client',
  code_challenge: '',
  code_challenge_method: '',
  acr_values: '',
  claims: '',
  nonce: '69420',
  redirect_uri: 'http://localhost/redirect',
  response_type: 'token id_token',
  scope: 'openid link ban lol_region',
};

export const tokenClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'User-Agent':
      'RiotClient/64.0.0.4887690.4789131 rso-auth (Windows; 10;;Professional, x64)',
  },
});
