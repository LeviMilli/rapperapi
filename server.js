const express = require("express")
const app = express()
const PORT = 8000
var cors = require('cors')

app.use(cors())

const rappers = { 
    '21 savage': {
        "birth" : "london",
        "age" : 32,
        "birthLocaion" : "Chicago",
        'birthName': 'ben'
}, 
    'chance': { 
        'age': 29,
        'birth': 'london',
        'birthName' : 'chance'
}, 
    'unknown' : {
        'age' : 0,
        'birthName': 'unknown',
        'location': 'unknown'

    }
}


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const rapperName = req.params.name.toLowerCase()
    if (rappers[rapperName]){
        let rapperObj = rappers[rapperName]
        res.json(rapperObj)
    } else {
        
        res.json(rappers["unknown"])
    }
    
    
})


app.listen(process.env.PORT || PORT , ()=>{
    console.log(`the server is now running on port ${PORT}`)
})