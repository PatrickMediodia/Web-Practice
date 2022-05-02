function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if(location === 'Google') {
            resolve('Google says hi');
        } else {
            reject('We can only talk to google');
        }
    });
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`);
    });
}

// makeRequest('Google')
//     .then(response => {
//         console.log('Response Received');
//         return processRequest(response);
//     })
//     .then(processedResponse => {
//         console.log(processedResponse);
//     })
//     .catch(error => {
//         console.log('Error')
//     });

async function process() {
    try {
        const reponse = await makeRequest('Google');
        console.log('Response Received');
        const processedResponse = await processRequest(reponse);
        console.log(processedResponse);
    } catch(error) {
        console.log(error);
    }
}

process();