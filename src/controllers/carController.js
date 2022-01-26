const boom = require('boom')
const fastify = require('fastify')({logger : true})
const Car  =  require('../models/Car')


exports.getCars = async ( req, reply) => {
    try {
        const cars = await Car.find()
        return cars
    } catch (error) {
        throw boom.boomify(error)
    }
}

exports.getSingleCar = async (req, reply) => {
    try {
        const {id} = req.query
        const car  = await Car.findById(id)
        return car
    } catch (error) {
        throw boom.boomify(error)
    }
}

// exports.addCar = async(req, reply) => {
//     try {
//         const { individualName, companyName, companySignupCode, driverName, driverIdNumber, additionalInfo } = req.body
//         const drivingLicense = req.files.drivingLicense[0].path
//         const plateNumber = req.files.plateNumber[0].path
//         const vehicleLicense = req.files.vehicleLicense[0].path
//         const hackenyPermit = req.files.hackenyPermit[0].path
//         const roadWorthiness = req.files.roadWorthiness[0].path
//         const insurance = req.files.insurance[0].path
//         const comprehensiveInsurance = req.files.comprehensiveInsurance[0].path
//         const allocationOfPlateNumber = req.files.allocationOfPlateNumber[0].path
//         const LASAA = req.files.LASAA[0].path
//         const LASDRI = req.files.LASDRI[0].path
//         const otherDocuments = req.files.otherDocuments[0].path

//         let createCar;

//         createCar = await Car.create({
//             individualName, 
//             companyName, 
//             companySignupCode, 
//             driverName, 
//             driverIdNumber, 
//             additionalInformation: additionalInfo,
//             driverDrivingLicense: drivingLicense,
//             carPlateNumber:plateNumber,
//             vehicleLicense,
//             hackenyPermit,
//             roadWorthiness,
//             insurance,
//             comprehensiveInsurance,
//             allocationOfPlateNumber,
//             LASAA,
//             LASDRI,
//             otherDocuments



//         })

//         createCar.save();
//     return createCar

//     } catch (error) {
//         fastify.log.error(error)
//         throw boom.boomify(error)
//     }
// }
exports.addCar = async(req, reply) => {
    try {
        const { individualName, companyName, companySignupCode, driverName, driverIdNumber, additionalInfo } = req.body
        const drivingLicense = req.files.drivingLicense[0].path
        const plateNumber = req.files.plateNumber[0].path
        const vehicleLicense = req.files.vehicleLicense[0].path
        const hackenyPermit = req.files.hackenyPermit[0].path
        const roadWorthiness = req.files.roadWorthiness[0].path
        const insurance = req.files.insurance[0].path
        const comprehensiveInsurance = req.files.comprehensiveInsurance[0].path
        const allocationOfPlateNumber = req.files.allocationOfPlateNumber[0].path
        const LASAA = req.files.LASAA[0].path
        const LASDRI = req.files.LASDRI[0].path
        const otherDocuments = req.files.otherDocuments[0].path

        let createCar;

        createCar = await Car.create({
            individualName, 
            companyName, 
            companySignupCode, 
            driverName, 
            driverIdNumber, 
            additionalInformation: additionalInfo,
            driverDrivingLicense: drivingLicense,
            carPlateNumber:plateNumber,
            vehicleLicense,
            hackenyPermit,
            roadWorthiness,
            insurance,
            comprehensiveInsurance,
            allocationOfPlateNumber,
            LASAA,
            LASDRI,
            otherDocuments



        })

        createCar.save();
    return createCar

    } catch (error) {
        fastify.log.error(error)
        throw boom.boomify(error)
    }
}