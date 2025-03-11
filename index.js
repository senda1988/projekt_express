import express from "express"
//import path from "path"

const app = express()


app.get("/", (req, res) => {
    res.send("Hello world!")
})
app.get("/content", (req, res) => {
    res.send("<h1>Content</h1><label>Your Name</label><input placeholder='Enter your Name'> <label>Your Message</label><textarea placeholder='Enter your Message' rows='4' cols='50'>")
})

app.get("/api/data", (req, res) => {
    res.json({ fullName: 'Senda', age: 28 })
})




app.listen(3000, () => {
    console.log("Server läuft auf Port 3000")
})