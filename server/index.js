const express = require('express');

const app = express();

app.use(express.json())
app.use(express.static(__dirname + '../public'))


port = 3001;
app.listen(port, () => {
    console.log('Server listening on port: ' + port)
})