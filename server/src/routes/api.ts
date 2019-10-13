import { Response } from "express";
import { RideProps } from '../types/index'
var express = require('express');
const mongoose = require('mongoose');
const Data = require('./data')
var router = express.Router();
const dbRoute =
  'mongodb+srv://sapir:1234@my-cluster-qfumk.mongodb.net/messages?retryWrites=true&w=majority';
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
/* GET users listing. */
router.get('/getData', (req: Request, res: Response) => {
  Data.find((err: Error, data: any) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// // this is our update method
// // this method overwrites existing data in our database
// router.post('/updateData', (req: Request, res: Response) => {
//   const { id, update } = req.body;
//   Data.findByIdAndUpdate(id, update, (err) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

// // this is our delete method
// // this method removes existing data in our database
// router.delete('/deleteData', (req: Request, res: Response) => {
//   const { id } = req.body;
//   Data.findByIdAndRemove(id, (err) => {
//     if (err) return res.send(err);
//     return res.json({ success: true });
//   });
// });

// // this is our create method
// // this method adds new data in our database
router.post('/putData', (req: Request, res: Response) => {
  let data = new Data();
  console.log(req.body)
  const { message, authorName, authorPhone }: any = req.body;
  if (!message) {
    return res.json({
      success: false,
      error: 'INVALID INPUTS',
    });
  }

  data.message = message;
  data.authorName = authorName;
  data.authorPhone = authorPhone;
  data.save((err: Error) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

module.exports = router;
