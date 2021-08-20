const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors)

app.get("/api",(req,res) =>{
    res.json([{ menu1: "Sports" },{ menu2: "Sports"},{ menu3: "Sports"},{ menu4: "Sports"},{ menu5: "Sports"}]);
})

app.listen(PORT ,() => {
    console.log(`Server listening on ${PORT}`);

})
