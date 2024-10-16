import { githubEvents } from './event-formatter.js';

function logFormater(response) {
    return new Promise((resolve, reject) => {
        const logArray = [];
        let lastEvent = {};
        let lastStr = '';
        let eventAmount = 0;

        try {
            response.forEach((event) => {
                
                eventAmount++;
                
                const type = event?.type;
                const name = event?.repo?.name;
                const action = event?.payload?.action;
                const member = event?.payload?.member;
                const ref_type = event?.payload?.ref_type;
                const merged = event?.payload?.pull_request?.merged;

                const currentEvent = { type, name, action, member, ref_type, merged };
                
                if(JSON.stringify(lastEvent) !== JSON.stringify(currentEvent)) {
                    eventAmount = 1;
                    
                    if (lastStr) logArray.push(lastStr)
                }
                
                const str = githubEvents[type]({
                    name,
                    action,
                    member,
                    merged,
                    ref_type,
                    eventAmount,
                });

                if (JSON.stringify(currentEvent) === JSON.stringify(lastEvent)) {
                    lastStr = str
                    return;
                }

                lastStr = str
                lastEvent = currentEvent

            });
            
            if(lastStr) logArray.push(lastStr)
            
            resolve(logArray);
        } catch (error) {
            reject(error);
        }
    });
}

export { logFormater };
