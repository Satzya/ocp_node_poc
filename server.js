let express = require("express")
let app = express()

let PORT = process.env.PORT || 8080

let server = app.listen(PORT, () => {
    console.log(`Port on ${server.address().port}`);
    console.log(`Host on ${server.address().host}`);
})

app.get('/',(req,res)=>{
    res.send('Received comminucation')
})



