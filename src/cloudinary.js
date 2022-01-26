const cloudinary = require("cloudinary").v2;
const Car = require("../src/models/Car");
const {
  CLOUDINARY_API_KEY,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_SECRET,
  env,
} = require("../config");

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});

module.exports = async (file, carId) => {
  cloudinary.uploader
    .upload(file.path, { folder: `TRANS_${env}` })
    .then(async function (image) {
      const asset = await Car.findById(carId);
      if (asset) {
        asset.logo = image.secure_url;
        await asset.save();
        console.log(asset)
      }
    })
    .catch(function (err) {
      return err;
    });
};
