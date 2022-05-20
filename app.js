function axios(score) {
    return new Promise((resolve, reject) => {
        if (score >= 3) {
            resolve('won')
        }
        // else if (score = 2) {
        //     reject('draw')
        // }
        else {
            reject('lose')
        }

    })
}

axios(10)
    .then(data => console.log(data))
    .catch(err => console.log(err))

axios(1)
    .then(data => console.log(data))
    .catch(err => console.log(err))

axios(2)
    .then(data => console.log(data))
    .catch(err => console.log(err))