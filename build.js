/* eslint strict:"off" */
"use strict";

const fastify = require("fastify"); // or import fastify from 'fastify'
const multer = require("fastify-multer"); // or import multer from 'fastify-multer'

const imageFilter = function(req, file, cb) {
  // Accept images only
  // use is-svg for svg files https://github.com/sindresorhus/is-svg
  if (
    !file.originalname.match(
      /\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|svg|SVG|webp|WEBP)$/
    )
  ) {
    req.fileValidationError = "Only image files are allowed!";
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

const limitsUpload = {
  fileSize: 1000000, //15MB 15*1048576
  files: 1
};

const upload = multer({
  dest: "uploads/",
  fileFilter: imageFilter,
  limits: limitsUpload
});

const showForm = async function(request, reply) {
  reply.header("Content-Type", "text/html");
  reply.type("text/html");
  reply.send(`
    <form action="/upload" enctype="multipart/form-data" method="post">
      <div>File: <input type="file" name="image" /></div>
      <input type="submit" value="Upload" />
    </form> 
  `);
};
const fileUploaded = function(request, reply) {
  console.log("file has been uplaoded");
};

const routes = [
  {
    method: "GET",
    url: "/",
    handler: showForm
  },
  {
    method: "POST",
    url: "/upload",
    preHandler: upload.single("image"),
    handler: fileUploaded
  }
];

function build(opts) {
  const app = fastify(opts);

  // register fastify content parser
  app.register(multer.contentParser);

  routes.forEach(route => {
    app.route(route);
  });

  return app;
}

module.exports = {
  build
};
