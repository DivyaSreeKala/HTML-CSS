const express = require("express");
const app = express();

// port for our project to run
const PORT = 8080;
const upload = require('./file-upload')
// A simple greeting message to
// test the app
app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

// add code for upload functinality using POST method
app.post("/upload", upload.single("file"), (req, res) => {
    // check whether req.file contians the file
    // if not multer is failed to parse so notify the client
    if (!req.file) {
        res.status(413).send(`File not uploaded!, Please 
                            attach jpeg file under 5 MB`);
        return;
    }
    // successfull completion
    res.status(201).send("Files uploaded successfully");
});

// Start the server using listen method of express
// pass the port and callback function on successful start
app.listen(8080, () => {
console.log(`server is started and 
                                listening at port: ${PORT}`);
});
