const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.end("Server created");
})

server.listen(PORT, () => {
    console.log(`Server is  running at PORT: ${PORT}`)
})