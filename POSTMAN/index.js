const express = require("express")
const app = express()

// to get data in body
app.use(express.json())

app.get("/", (req, res) => {
    res.send("GET 1: server is working fine")
})

app.get("/2", (req, res) => {
    res.send("GET 2: server is working fine")
})


app.post("/", (req, res) => {
    res.send("POST: server is working fine")
})

app.post("/:item", (req, res) => {

    const dynamic_data = req.params

    console.log(dynamic_data)
    console.log(dynamic_data["item"])

    res.send(`POST: ${dynamic_data["item"]}`)
})


app.put("/", (req, res) => {

    const query_data = req.query

    console.log(query_data)
    console.log(query_data["username"])
    console.log(query_data["password"])

    res.send(`PUT: username : ${query_data["username"]}, password : ${query_data["password"]}`)
})

const delteAPI = (req, res) => {

    const bodyData = req.body

    console.log(bodyData)

    res.json({ msg: "data in body found", data: bodyData, noData: { key: undefined, key2: null, key4: "str" } })
}


app.delete("/", delteAPI)



app.post("/form-data/data", (req, res) => {

    const bodyData = req.body

    console.log(req)
    console.log(bodyData)

    res.json({ msg: "data in form found" })
})

app.listen(8000, () => {
    console.log("Server started")
})