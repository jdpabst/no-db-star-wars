const express = require('express');
const cors = require('cors');
const pc = require('./controllers/planets-controller')

const app = express();
app.use(cors())
// I kept getting a CORS error that wouldn't allow me to spin up my DB so Loren had me install this since I am the one in charge of the DB
app.use(express.json())
app.use('/images', express.static(__dirname + '/images'))

app.get('/api/planets', pc.read);
app.post('/api/planets', pc.create);
app.put('/api/planets', pc.update);
app.delete('/api/planets', pc.delete);


port = 3001;
app.listen(port, () => {
    console.log('Server listening on port: ' + port)
})