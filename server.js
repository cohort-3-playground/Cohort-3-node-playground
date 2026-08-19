const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") res.end("Home endpoint");
    if (req.url === "/products") res.end("Product endpoint");
    if (req.url === "/users") res.end("Users endpoint");
})

server.listen(PORT, () => {
    console.log(`Server is  running at PORT: ${PORT}`)
})