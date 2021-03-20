require('dotenv').config()
const express = require('express')
const multer = require("multer");
const mongoose = require('mongoose')
const ImageModel = require("./db/Image");
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const path = require('path')


const app = express()
app.use(express.static("public"));
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

//upload
const storage = multer.diskStorage({
    destination: "./public",
    filename(req, file, cb) {
      cb(
        null,
        "google-form-content-questions-" +
          Date.now() +
          path.extname(file.originalname)
      );
    },
  });
  const upload = multer({ storage });
// Routes
app.get("/", async (req, res) => {
    try {
      var result = await ImageModel.find().lean();
      res.send(result);
    } catch (e) {
      res.send(e);
    }
  });
  
  app.post("/", upload.single("myfile"), async (req, res) => {
    const file = req.file; // file passed from client
    const meta = req.body; // all other values passed from the client, like name, etc..
  
    var data = {
      image: req.file.filename,
    };
    var newImage = new ImageModel(data);
    await newImage.save().then((docs) => {
      console.log(docs);
      res.json({
        image: docs.image,
        host: req.protocol + "://" + req.get("host"),
      });
    });
  });

app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/router'))


// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to mongodb")
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})