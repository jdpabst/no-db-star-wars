const planets = require('../../starwarsPlanets.json')

module.exports = {
    read: (req, res) => {
        res.status(200).send(planets);
    },
    create: (req, res) => {
        console.log('create');
    },
    update: (req, res) => {
        console.log('update');
    },
    delete: (req, res) => {
        console.log('delete');
    }
}