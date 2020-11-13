const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=444dcda380af32fa8298516af7dd7d85&query=20,-20&units=f`;

const request = http.request(url, (response) => {
    let data = '';

    response.on('data',(chunk) => {
        data = data + chunk.toString()
    })

    response.on('end',() => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log(error);
})

request.end()
