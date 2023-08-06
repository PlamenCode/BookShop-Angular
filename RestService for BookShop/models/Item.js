const { Schema, model } = require('mongoose');

const itemShema = new Schema({
    name: { type: String, required: [true, 'Make is required'], unique: true },
    author: { type: String, required: [true, 'Model is required'] },
    img: { type: String, required: true },
    price: { type: Number, required: true, min: [0, 'Price must be above 0'] },
    description: { type: String, minlength: [10, 'description must be at least 10 charecters long'] },
    ownerId: { type: String, required: [true, 'ownerId is required'] },
});

itemShema.index({ name: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const Item = model('Item', itemShema);

module.exports = Item