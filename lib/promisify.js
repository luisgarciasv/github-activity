import https from 'node:https'

const headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36'
  };
  

function usernameGen (username) {
    return `https://api.github.com/users/${username}/events`
}

function httpReq (username) {
    return new Promise( (resolve, reject) => {
        https.get( usernameGen(username), { headers }, (res) => {
            let data = ''
            res.setEncoding('utf-8')

            res.on('data', (part) => { data += part })

            res.on('error', (err) => { reject(err)})

            res.on('end', () => {
                try {
                    console.log(data)
                    resolve(JSON.parse(data))
                } catch (err) {
                    reject(err)
                }
            })

        })
        .on('error', err => reject(err))
    }) 
}

export { httpReq }

