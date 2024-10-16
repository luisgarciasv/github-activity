import { httpReq } from './lib/promisify.js';
import { logFormater } from './lib/log-formater.js';
import { argv } from 'node:process';

const [username, perPage] = argv.slice(2);

if (!username) {
    console.warn(`
username not defined. usage: github-activity <username>
exaemple: github-activity luisgarciasv 

can also accept a second argument for the number of events to show.
usage: github-activity <username> <# of events>
example:  github-activity luisgarciasv 5
        `);
} else {
    httpReq(username, perPage)
        .then((res) => logFormater(res))
        .then((res) => {
            if (!res.length) {
                console.log(
                    `The user ${username} doesn't have recent activity`,
                );
            }
            res.forEach((e) => console.log(e));
        })
        .catch((err) => console.log(err));
}
