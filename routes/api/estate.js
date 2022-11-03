const router = require('express').Router();

const Estate = require('../../models/estate.model');

router.get('/', async (req, res) => {
  try {
    const estates = await Estate.find();
    res.json(estates);
  } catch (err) {
    res.json({ error: err.message });
  }
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
  try {
    const { estateId } = req.params;
    const estate = await Estate.findByIdAndUpdate(estateId, req.body, { new: true });
    res.json(estate);
  } catch (err) {
    res.json({ error: err.message })
  }
});

router.delete('/:estateId', (req, res) => { 
    res.send('DELETE estate');
});

module.exports = router;