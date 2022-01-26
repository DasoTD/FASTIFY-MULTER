const boom = require('boom')
const Bike  =  require('../models/Bike')


exports.getBikes = async ( req, reply) => {
    try {
        const bikes = await Bike.find()
        return bikes
    } catch (error) {
        throw boom.boomify(error)
    }
}

exports.getSingleBike = async (req, reply) => {
    try {
        const id = req.params.id
        const bike  = await Bike.findById(id)
        return bike
    } catch (error) {
        throw boom.boomify(error)
    }
}
