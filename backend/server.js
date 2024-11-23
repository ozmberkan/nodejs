const express = require("express"); //express'i import ettik
const cors = require("cors"); //cors'u import ettik -> Front-Backend arası köprü - güvenlik
const dotenv = require("dotenv"); //dotenv'i import ettik -> .env dosyasını okumak için
const connectDB = require("./config/db.js");
const AuthRoutes = require("./routes/auth.js");

dotenv.config(); //dotenv'i kullanıma açtık

const app = express(); //express'i kullanıma açtık
app.use(express.json()); //express'in json'ı kullanmasını sağladık -> json veri alışverişi
app.use(cors()); // cors'u kullanıma açtık -> Front-Backend arası köprü - güvenlik

const PORT = process.env.PORT;

app.get("/", (req, res) => res.send("Sunucu aktif bir şekilde çalışıyor....")); //get metodu ile sunucuya bir istek geldiğinde geriye bir cevap döndürdük

app.use("/api", AuthRoutes); // /api yoluna gelen istekleri AuthRoutes'a yönlendirdik

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Sunucu ${PORT} Portunda sorunsuz bir şekilde çalışıyor...`);
    });
  })
  .catch((err) => console.log("Sunucu çalışırken bir hata oluştu...", err)); //connectDB fonksiyonunu çağırdık ve ardından sunucuyu dinlemeye aldık
