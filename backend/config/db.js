//mongoDB baglantısı

const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Bağlantısı Başarılı..."))
    .catch((err) => console.log("MongoDB Bağlantısı Başarısız...", err));
};

module.exports = connectDB;
