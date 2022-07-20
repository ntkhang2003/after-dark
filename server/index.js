const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/users")
const eventRoute = require("./routes/events")
const multer = require('multer')
const path = require('path')

dotenv.config();
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')))

mongoose 
    .connect(process.env.MONGO_URL, {})   
    .then(() => console.log("MongoDB connected!"))
    .catch(err => console.log(err))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    }, 
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({storage:storage})
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).json('File has been uploaded')
})
app.use("/api/users", userRoute)
app.use("/api/events", eventRoute)

app.get('/', (req,res) => {
    res.send('Api running at port 3080');
});

app.listen(3080, () => {
    console.log("Backend server is running!");
});