const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const dbData = require('../database/models/UserData');
const dbUser = require('../database/models/user');

router.post('/user', (req, res) => {
  console.log('new user info');
  console.log(`${req.body}`);
  const { name, experience, description, occupation, id } = req.body;
  dbData
    .create({
      owner: id,
      name: name,
      experience: experience,
      description: description,
      occupation: occupation
    })
    .then(dbData => {
      console.log(dbData);
      return dbUser.findOneAndUpdate(
        { _id: id },
        { $push: { information: dbData._id } },
        { new: true }
      );
    });
});

router.post('/search', (req, res) => {
  const query = req.body.occupation;
  // const query = {
  //   $or: [
  //     { experience: { $regex: req.body.experience, $options: 'i' } },
  //     { occupation: { $regex: req.body.occupation, $options: 'i' } }
  //   ]
  // };
  dbData.find({ occupation: query }, (err, data) => {
    if (err) {
      return err;
    }
    console.log(data);
    res.send(data);
  });
});

module.exports = router;
