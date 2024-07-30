const express = require('express');
const router = express.Router();
const Header = require('../models/Header');


router.get('/', async (req, res) => {
  try {
    const header = await Header.findOne();
    res.json(header);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});


router.post('/', async (req, res) => {
  const { text } = req.body;
  try {
    let header = await Header.findOne();
    if (!header) {
      header = new Header({ text });
    } else {
      header.text = text;
    }
    await header.save();
    res.json(header);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
