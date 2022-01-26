// const multer = require('multer')
const multer= require('../multerrr')
const carController = require('../controllers/carController')
const upload = multer

const routes = [
    {
        method: 'POST',
        url: '/api/cars',
        preHandler: upload,
        handler: carController.addcar
    }
]

module.exports = routes

