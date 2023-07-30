const { hasUser } = require('../middlewares/guards');
const { getUserCart, getAllBooksInCart, addToCart, removeFromCart, checkBookInCart } = require('../services/cartService');
const { getAll, createItem, getById, deleteById, updateItem } = require('../services/itemService');
const parseError = require('../utils/parser');

const dataController = require('express').Router();

dataController.get('/', async(req, res) =>{
    const items = await getAll();
    res.json(items);
});

dataController.post('/', hasUser(),  async (req, res) => {
    try {
        const item = await createItem(req.body.book);
        res.json(item);  
    } catch (err) {
        const message = parseError(err)
        res.status(400).json({ message });
    };
});

dataController.get('/:id', async (req, res) => {
    const item = await getById(req.params.id);
    res.json(item)
});

dataController.put('/:id', hasUser(),  async (req, res) => {
    const item = await getById(req.params.id);
    if(req.body.user.uid.toString() != item.ownerId.toString()){
        return res.status(403).json({ message: 'You can\'t modify someone\'s records.'})
    };
    try {
        const result = await updateItem(req.params.id, req.body.book);
        res.json(result);
    } catch (err) {
        const message = parseError(err)
        res.status(400).json({ message });
    }
});

dataController.delete('/:id', hasUser(), async (req, res) => {
    const item = await getById(req.params.id);
    if(req.body.user.uid.toString() != item.ownerId.toString()){
        return res.status(403).json({ message: 'You can\'t delete someone\'s records.'})
    };

    try {
        await deleteById(req.params.id);
        res.status(204).end();
    } catch (err) {
        const message = parseError(err)
        res.status(400).json({ message });
    }
});


module.exports = dataController;