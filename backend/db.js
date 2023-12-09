const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Connect to the MongoDB cluster
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('MongoDB Connection Failed: ', err.message);
        // Exit process with failure code
        process.exit(1);
    }
};

module.exports = connectDB;
