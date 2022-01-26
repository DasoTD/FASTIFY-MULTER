const fastify = require('fastify')({logger : true})
const boom = require('boom')
const path = require('path');
const Car = require('./src/models/Car')
const mongoose= require('mongoose')
fastify.register(require('fastify-formbody'))
fastify.register(require('fastify-multipart'))

const multer = require('fastify-multer') // or import multer from 'fastify-multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: (req, file, cb) => { // naming file
        if (file.fieldname === "drivingLicense") {
          const drivingLicense = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
          req.drivingLicense = drivingLicense;
            cb(null, drivingLicense);
        }
      
      else if (file.fieldname === "otherDocuments") {
        const otherDocuments = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
          req.otherDocuments = otherDocuments;
            cb(null, otherDocuments);
      }
      else if (file.fieldname === "vehicleLicense") {
        const vehicleLicense = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
          req.vehicleLicense = vehicleLicense;
            cb(null, vehicleLicense);
      }
      else if (file.fieldname === "hackenyPermit") {
        const hackenyPermit = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
          req.hackenyPermit = hackenyPermit;
            cb(null, hackenyPermit);
      }
      else if (file.fieldname === "roadWorthiness") {
        cb(null, file.fieldname+Date.now()+path.extname(file.originalname));
      }
      else if (file.fieldname === "insurance") {
        const insurance = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
        req.insurance = insurance;
          cb(null, insurance);
      }
      else if (file.fieldname === "comprehensiveInsurance") {
        const comprehensiveInsurance = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
        req.comprehensiveInsurance = comprehensiveInsurance;
          cb(null, comprehensiveInsurance);
      }
      else if (file.fieldname === "allocationOfPlateNumber") {
        const allocationOfPlateNumber = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
        req.allocationOfPlateNumber = allocationOfPlateNumber;
          cb(null, allocationOfPlateNumber);
      }
      else if (file.fieldname === "LASAA") {
        const LASAA = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
        req.LASAA = LASAA;
          cb(null, LASAA);
      }
      else if (file.fieldname === "LASDRI") {
        const LASDRI = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
        req.LASDRI = LASDRI;
          cb(null, LASDRI);
    }
    else if (file.fieldname === "riderName") {
      const riderName = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
      req.riderName = riderName;
        cb(null, riderName);
  }
  else if (file.fieldname === "riderIdNumber") {
    const riderIdNumber = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
    req.riderIdNumber = riderIdNumber;
      cb(null, riderIdNumber);
}
else if (file.fieldname === "bikePlateNumber") {
  const bikePlateNumber = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.bikePlateNumber = bikePlateNumber;
    cb(null, bikePlateNumber);
}
else if (file.fieldname === "bikeVehicleLicense") {
  const bikeVehicleLicense = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.bikeVehicleLicense = bikeVehicleLicense;
    cb(null, bikeVehicleLicense);
}
else if (file.fieldname === "stageCarriagePermit") {
  const stageCarriagePermit = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.stageCarriagePermit = stageCarriagePermit;
    cb(null, stageCarriagePermit);
}
else if (file.fieldname === "lgPapers") {
  const lgPapers = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.lgPapers = lgPapers;
    cb(null, lgPapers);
}
else if (file.fieldname === "ogHut") {
  const ogHut = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.ogHut = ogHut;
    cb(null, ogHut);
}
else if (file.fieldname === "goodsOnly") {
  const goodsOnly = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.goodsOnly = goodsOnly;
    cb(null, goodsOnly);
}
else if (file.fieldname === "ikdUnifiedByePass") {
  const ikdUnifiedByePass = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.ikdUnifiedByePass = ikdUnifiedByePass;
    cb(null, ikdUnifiedByePass);
}
else if (file.fieldname === "minTransportationPapers") {
  const minTransportationPapers = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.minTransportationPapers = minTransportationPapers;
    cb(null, minTransportationPapers);
}
else if (file.fieldname === "okPapers") {
  const okPapers = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.okPapers = okPapers;
    cb(null, okPapers);
}
else if (file.fieldname === "ridersPermit") {
  const ridersPermit = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.ridersPermit = ridersPermit;
    cb(null, ridersPermit);
}
else if (file.fieldname === "ogunStateHackenyPermit") {
  const ogunStateHackenyPermit = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.ogunStateHackenyPermit = ogunStateHackenyPermit;
    cb(null, ogunStateHackenyPermit);
}
else if (file.fieldname === "GITInsurance") {
  const GITInsurance = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.GITInsurance = GITInsurance;
    cb(null, GITInsurance);
}
else if (file.fieldname === "ifoLgHaulagePermit") {
  const ifoLgHaulagePermit = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.ifoLgHaulagePermit = ifoLgHaulagePermit;
    cb(null, ifoLgHaulagePermit);
}
else if (file.fieldname === "type") {
  const type = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.type = type;
    cb(null, type);
}
else if (file.fieldname === "vanPlateNumber") {
  const vanPlateNumber = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.vanPlateNumber = vanPlateNumber;
    cb(null, vanPlateNumber);
}
  },
    fileFilter: function (req, file, cb) {
        // Allowed ext
        const filetypes = /jpeg|jpg|pdf|png|svg/;
        // Check ext
        const extname = filetypes.test(path.extname(file.originalname)
          .toLowerCase());
        // Check mime
        const mimetype = filetypes.test(file.mimetype);
      
        if (mimetype && extname) {
          return cb(null, true);
        }
      
        return cb(new Error('Only jpeg,pdf, jpg, svg and png files are allowed!'), false);
      }
  })
   
  
const upload =multer({ storage: storage })

mongoose.connect(`mongodb://localhost/fleetManagement`)
.then(() => console.log('mongodb connected...'))
.catch(err => console.log(err))

fastify.get('/', async(request, reply) => {
    return {hello: 'world'}
})
const uploads = upload.fields(
  [
      {
          name:'drivingLicense',
          maxCount:1
      },
      {
          name: 'otherDocuments', maxCount:8
      },
      {
          name: 'vehicleLicense', maxCount:1
      },
      {
          name: 'hackenyPermit', maxCount:1
      },
      {
          name: 'roadWorthiness', maxCount:1
      },
      {
          name: 'insurance', maxCount:1
      },
      {
          name: 'comprehensiveInsurance', maxCount:1
      },
      {
          name: 'LASAA', maxCount:1
      },
      {
          name: 'allocationOfPlateNumber', maxCount:1
      },
      {
          name: 'LASDRI', maxCount:1
      }
  ]
)
//CAR SECTION
const addCar = async(req, reply) => {
    try {
        const { individualName, companyName, companySignupCode,plateNumber, driverName, driverIdNumber, additionalInfo } = req.body
        const drivingLicense = req.files.drivingLicense[0].path
        //const plateNumber = req.files.plateNumber[0].path
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

const getCars = async ( req, reply) => {
    try {
        const cars = await Car.find()
        return cars
    } catch (error) {
        throw boom.boomify(error)
    }
}

const getSingleCar = async (req, reply) => {
  try {
    const {id} = req.query;
    const car = await Car.findById(id);
    return car
  } catch (error) {
    throw boom.boomify(error)
  }
}

//BIKE SECTION
const Bike  =  require('./src/models/Bike')


const getBikes = async ( req, reply) => {
    try {
        const bikes = await Bike.find()
        return bikes
    } catch (error) {
        throw boom.boomify(error)
    }
}

const getSingleBike = async (req, reply) => {
    try {
        const {id} = req.query
        const bike  = await Bike.findById(id)
        return bike
    } catch (error) {
        throw boom.boomify(error)
    }
}

const addBike = async(req, reply) => {
  try {
      const { individualName, companyName, companySignupCode, riderName, riderIdNumber, bikePlateNumber, additionalInfo } = req.body
      const bikeVehicleLicense = req.files.bikeVehicleLicense[0].path
      const hackenyPermit = req.files.hackenyPermit[0].path
      const roadWorthiness = req.files.roadWorthiness[0].path
      const insurance = req.files.insurance[0].path
      const stageCarriagePermit = req.files.stageCarriagePermit[0].path
      const lgPapers = req.files.lgPapers[0].path
      const ogHut = req.files.ogHut[0].path
      const comprehensiveInsurance = req.files.comprehensiveInsurance[0].path
      const goodsOnly = req.files.goodsOnly[0].path
      const ikdUnifiedByePass = req.files.ikdUnifiedByePass[0].path
      const minTransportationPapers = req.files.minTransportationPapers[0].path
      const okPapers = req.files.okPapers[0].path
      const ridersPermit = req.files.ridersPermit[0].path
      const ogunStateHackenyPermit = req.files.ogunStateHackenyPermit[0].path
      const GITInsurance = req.files.GITInsurance[0].path
      const ifoLgHaulagePermit = req.files.ifoLgHaulagePermit[0].path
      const allocationOfPlateNumber = req.files.allocationOfPlateNumber[0].path
      const LASAA = req.files.LASAA[0].path
      const otherDocuments = req.files.otherDocuments[0].path

      let createBike;

      createBike = await Bike.create({
          individualName, 
          companyName, 
          companySignupCode, 
          riderName, 
          riderIdNumber, 
          bikePlateNumber,
          additionalInformation: additionalInfo,
          bikeVehicleLicense:bikeVehicleLicense,
          stageCarriagePermit,
          lgPapers,
          ogHut,
          goodsOnly,
          ikdUnifiedByePass,
          minTransportationPapers,
          okPapers,
          ridersPermit,
          ogunStateHackenyPermit,
          GITInsurance,
          ifoLgHaulagePermit,
          hackenyPermit,
          roadWorthiness,
          insurance,
          comprehensiveInsurance,
          allocationOfPlateNumber,
          LASAA,
          otherDocuments



      })

      createBike.save();
  return createBike

  } catch (error) {
      fastify.log.error(error)
      throw boom.boomify(error)
  }
}
// VAN SECTION
const Van = require('./src/models/Van')
const getVan = async ( req, reply) => {
  try {
      const vans = await Van.find()
      return vans
  } catch (error) {
      throw boom.boomify(error)
  }
}

const getSingleVan = async (req, reply) => {
  try {
      const {id} = req.query
      const van  = await Van.findById(id)
      return van
  } catch (error) {
      throw boom.boomify(error)
  }
}


const addVan = async(req, reply) => {
  try {
    const { individualName, companyName, companySignupCode, type, driverName, driverIdNumber, additionalInfo, vanPlateNumber } = req.body
    const drivingLicense = req.files.drivingLicense[0].path
    const vehicleLicense = req.files.vehicleLicense[0].path
    const hackenyPermit = req.files.hackenyPermit[0].path
    const roadWorthiness = req.files.roadWorthiness[0].path
    const insurance = req.files.insurance[0].path
    const comprehensiveInsurance = req.files.comprehensiveInsurance[0].path
    const goodsOnly = req.files.goodsOnly[0].path
    const ikdUnifiedByePass = req.files.ikdUnifiedByePass[0].path
    const GITInsurance = req.files.GITInsurance[0].path
    const allocationOfPlateNumber = req.files.allocationOfPlateNumber[0].path
    const otherDocuments = req.files.otherDocuments[0].path

    let createVan;
    createVan = await Van.create({
      individualName, 
      companyName, 
      companySignupCode, 
      type, 
      driverName, 
      driverIdNumber, 
      additionalInfo, 
      vanPlateNumber,
      drivingLicense,
      vehicleLicense,
      hackenyPermit,
      roadWorthiness,
      insurance,
      comprehensiveInsurance,
      goodsOnly,
      ikdUnifiedByePass,
      GITInsurance,
      allocationOfPlateNumber,
      otherDocuments
    })
      
  } catch (error) {
    
  }
}

fastify.route({
    method: 'POST',
    url: '/cool-profile',
    preHandler: uploads,
    handler: addCar
  })

  fastify.route({
    method: 'GET',
    url: '/cars',
    handler: getCars
  })

  fastify.route({
    method: 'GET',
    url: '/car',
    handler: getSingleCar
  })

const start = async () => {
    try {
        await fastify.listen(5000)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()