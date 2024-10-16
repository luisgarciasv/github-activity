import https from 'node:https';

const headers = {
    'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
};

// github events api accept a querry param call "per_page", which default value is 30.
function requestURLGen(username, perPage = 30) {
    return `https://api.github.com/users/${username}/events?per_page=${perPage}`;
}

function httpReq(username) {
    return new Promise((resolve, reject) => {
        https.get(requestURLGen(username), { headers }, (res) => {
            let data = '';
            const { statusCode } = res;

            res.setEncoding('utf-8');

            res.on('data', (part) => {
                data += part;
            });

            res.on('error', (err) => {
                reject(err);
            });

            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    if (statusCode !== 200) {
                        reject(
                            `The user ${username} was ${parsed.message.toLowerCase()}`,
                        );
                    }
                    //console.log(data)
                    resolve(parsed);
                } catch (err) {
                    reject(err);
                }
            });
        })
            .on('error', (err) => reject(err));
    });
}

export { httpReq };
