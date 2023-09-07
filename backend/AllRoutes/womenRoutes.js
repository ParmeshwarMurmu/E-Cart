const express = require('express')
const {WomenModel} = require('../Model/WomenSchema')
const fs = require('fs');
const path = require('path');

const multer = require('multer')
const womenRoutes = express.Router()



const storage = multer.diskStorage({
    destination: './uploads', // Set the destination folder for uploaded files
    filename: (req, file, callback) => {
      callback(null,  file.originalname);
    },
  });

  const upload = multer({ storage: storage });

womenRoutes.post('/add/women', async(req, res)=>{
    try {
        const womenData = WomenModel(req.body);
        await womenData.save();
        res.status(200).send({"msg": "Women Item Added Successfully"})
    } catch (error) {
        res.status(400).send({"msg": error})
    }

})

womenRoutes.post('/uploads', upload.array('photos', 5),  async(req, res)=>{
    console.log("&&&&");

    try {
        const files = req.files;
        console.log(files);

    // Move each file to the uploads directory
    files.forEach(file => {
      const destination = path.join(__dirname, '..', 'uploads', file.originalname);
      fs.renameSync(file.path, destination);
    });

    const fileUrls = files.map(file => {
        return `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;
      });

    res.send(fileUrls);
    } catch (error) {
        res.send(error)
    }

})

module.exports = {
    womenRoutes
}