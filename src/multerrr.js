const path = require('path');
const multer = require('multer');



const storage = multer.diskStorage({

    // destination: (req, file, cb) => { // setting destination of uploading files        
    //     if (file.fieldname === "drivingLicense") { // if uploading resume
    //       cb(null, 'drivingLicenses');
    //     } else if (file.fieldname === "plateNumber") { // if uploading resume
    //         cb(null, 'plateNumbers');
    //     }else if (file.fieldname === "otherDocuments") { // if uploading resume
    //         cb(null, 'otherDocuments');
    //     }else if (file.fieldname === "vehicleLicense") { // if uploading resume
    //         cb(null, 'vehicleLicenses');
    //     }else if (file.fieldname === "hackenyPermit") { // if uploading resume
    //         cb(null, 'hackenyPermits');
    //     }else if (file.fieldname === "roadWorthiness") { // if uploading resume
    //         cb(null, 'roadWorthinesss');
    //     }else if (file.fieldname === "insurance") { // if uploading resume
    //         cb(null, 'insurances');
    //     }else if (file.fieldname === "comprehensiveInsurance") { // if uploading resume
    //         cb(null, 'comprehensiveInsurances');
    //     }else if (file.fieldname === "allocationOfPlateNumber,") { // if uploading resume
    //         cb(null, 'allocationOfPlateNumber');
    //     }else if (file.fieldname === "LASAA") { // if uploading resume
    //         cb(null, 'LASAA');
    //     }else if (file.fieldname === "LASDRI") { // if uploading resume
    //         cb(null, 'LASDRI');
    //     }
    //   },
    
      destination(req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/'));
      },
  
      filename: (req, file, cb) => { // naming file
        if (file.fieldname === "drivingLicense") {
          const drivingLicense = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
          req.drivingLicense = drivingLicense;
            cb(null, drivingLicense);
        }
      else if (file.fieldname === "plateNumber") {
        const plateNumber = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
          req.plateNumber = plateNumber;
            cb(null, plateNumber);
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
  }
});

    const fileFilter = (req, file, cb) => {
        // Allowed ext
        const filetypes = /jpeg|pdf|jpg|png|svg/;
        // Check ext
        const extname = filetypes.test(path.extname(file.originalname)
          .toLowerCase());
        // Check mime
        const mimetype = filetypes.test(file.mimetype);
      
        if (mimetype && extname) {
          return cb(null, true);
        }
      
        return cb(new Error('Only jpeg, pdf, jpg, svg and png files are allowed!'), false);
};

module.exports = multer({
        storage,
        limits: {
          fileSize: 5000000,
        },
        fileFilter,
}).fields(
  [
      {
          name:'drivingLicense',
          maxCount:1
      },
      {
          name: 'plateNumber', maxCount:1
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
);

// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 10
//     },
//     fileFilter,
// })

      