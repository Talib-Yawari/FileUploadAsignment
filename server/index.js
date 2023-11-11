const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 5000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ filename: req.file.filename });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
