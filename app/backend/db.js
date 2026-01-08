const mongoose = require('mongoose')


const connectToDb = async (uri) => {
    try {
        console.log(`Connecting to DB at ${uri}...`);
        await mongoose.connect(uri)
        console.log('conneced to db successfullly!')
    } catch (error) {
        console.error('error connecting to db:', error.message);
    }
}

module.exports = connectToDb