const http = require('http')


// req is request object and res is response object
const server = http.createServer((req,res) => {

    if(req.url === '/'){
        res.end('Welcome to our home page');
    }

    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    
    // res.end(
    //     `<h1>OOPS! page not found </h1>
    //     <a href = "/"> Go back </a>`
    // )
})


// setting up the port
server.listen(5000)