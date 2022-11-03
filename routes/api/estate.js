const router = require('express').Router();

const Estate = require('../../models/estate.model');

router.get('/', async (req, res) => {
  try {
    const estates = await Estate.find();
    res.json(estates);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const estate = await Estate.create(req.body);
    res.json({ message: 'Estate created', estate });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:estateId', async (req, res) => {
  try {
    const { estateId } = req.params;
    const estateUpdated = await Estate.findByIdAndUpdate(estateId, req.body, { new: true });
    res.json({ message: 'Estate updated', estateUpdated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:estateId', async (req, res) => { 
  try {
    const { estateId } = req.params;
    const estateDeleted = await Estate.findByIdAndDelete(estateId);
    res.json({ message: 'Estate deleted', estateDeleted });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;