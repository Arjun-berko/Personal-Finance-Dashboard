const mongoose = require('mongoose');
const Item = require('./models/User');  // Adjust the path to your Item model

// MongoDB Connection String
const dbConnection = 'mongodb+srv://arjunn2139:Mynameisarjun1@financedashboardcluster.mu2ecgn.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbConnection, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const deleteAllItems = async () => {
    try {
        await Item.deleteMany({});
        console.log('All items deleted.');
    } catch (error) {
        console.error('Error occurred in deleteMany:', error);
    } finally {
        mongoose.disconnect();
    }
};

deleteAllItems();
