const router = require('express').Router();

const Estate = require('../../models/estate.model');

router.get('/', async (req, res) => {
  res.send('GET estate');
});

router.post('/', async (req, res) => {
  try {
    const estate = await Estate.create(req.body);
    res.json(estate);
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.put('/:estateId', async (req, res) => {
    res.send('PUT estate');
});

router.delete('/:estateId', (req, res) => { 
    res.send('DELETE estate');
});

module.exports = router;