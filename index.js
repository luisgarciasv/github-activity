import { httpReq } from "./lib/promisify.js"

httpReq('luisgarciasv')
    .then( res => console.log(res))
    .catch( err => console.log(err))