import {tokenClient, postReqBody} from './clients';

let resp = await tokenClient.post('/authorization', postReqBody);

console.log(resp);
