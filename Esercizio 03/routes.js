const requestHandler = (req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.write('<html lang="en">');
            res.write('<head><title>Enter Message</title></head>');
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Invia</button></form></body>');
        }
    } else if (req.method === 'POST') {
        if (req.url === '/message') {
            const body = [];
            req.on('data', (dataChunk) => {
                body.push(dataChunk);
            });
            req.on('end', () => {
                // Raggruppo chunk
                const parsedBody = Buffer.concat(body).toString();
                console.log(parsedBody);
                res.write('<html lang="en">');
                res.write('<body><h1>' + parsedBody.split('=')[1] + '</h1></body>');
                res.write('</html>');
                return res.end();
            });
        }
    }
}

//esportare qui la funzione implementata
exports.handler = requestHandler