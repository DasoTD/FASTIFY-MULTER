const boom = require('boom')
const Van =  require('../models/Van')


exports.getVans = async ( req, reply) => {
    try {
        const vans = await Van.find()
        return vans
    } catch (error) {
        throw boom.boomify(error)
    }
}

exports.getSingleVan = async (req, reply) => {
    try {
        const id = req.params.id
        const van  = await Van.findById(id)
        return van
    } catch (error) {
        throw boom.boomify(error)
    }
}
