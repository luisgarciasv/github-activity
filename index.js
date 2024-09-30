import { httpReq } from "./lib/promisify.js"

const [username] = process.argv.slice(2)

if(!username){
    console.warn(`
username not defined. usage: github-activity <username>
exaemple: github-activity luisgarciasv 
        `)
} else {
    httpReq(username)
        .then( res => console.log(res))
        .catch( err => console.log(err))
}
