const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
           
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`DB coneected Successfully`);
    } catch (error) {
        console.log(`Error ${error.message}`);
    }
};

module.exports = dbConnect;

//F8kWU5WKhDKjN*2

//mongodb+srv://expense:<db_password>@expenses-tracker.sds7l.mongodb.net/?retryWrites=true&w=majority&appName=Expenses-tracker