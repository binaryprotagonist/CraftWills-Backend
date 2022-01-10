const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now()+file.originalname+"."+file.mimetype.split("/")[1]);
  },
});

const upload = multer({ storage: storage });
module.exports = upload;