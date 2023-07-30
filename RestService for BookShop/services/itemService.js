const Item = require("../models/Item")

async function getAll(){
    const item = await Item.find({}).lean();
    return item
};

async function getById(id){
    return Item.findById(id);
};

async function createItem(itemData){
    try {
        Item.create(itemData);
    } catch (error) {
        console.log(error);
    }
};

async function updateItem(itemId, itemData){
    const existing = await Item.findById(itemId);

    existing.name = itemData.name;
    existing.author = itemData.author;
    existing.img = itemData.img;
    existing.price = Number(itemData.price);
    existing.description = itemData.description;
    
    return existing.save();
};

async function deleteById(id){
    
    return Item.findByIdAndDelete(id);
};


module.exports = {
    getAll,
    getById,
    createItem,
    updateItem,
    deleteById
}