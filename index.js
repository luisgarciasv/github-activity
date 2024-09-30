import { httpReq } from "./lib/promisify.js"

const [username, perPage] = process.argv.slice(2)

if(!username){
    console.warn(`
username not defined. usage: github-activity <username>
exaemple: github-activity luisgarciasv 

can also accept a second argument for the number of events to show.
usage: github-activity <username> <# of events>
example:  github-activity luisgarciasv 5
        `)
} else {
    httpReq(username, perPage)
        .then( res => console.log(res))
        .catch( err => console.log(err))
}
