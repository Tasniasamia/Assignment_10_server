const express = require('express')
const app = express()
const port = 7000
var cors = require('cors')
const chef=require('/chef.json')
const receipe=require('/receipie.json')
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/chef',(req,res)=>{
    res.send(chef);

})
app.get('/recepie/:id',(req,res)=>{
    const id=req.params.id
    const filterdata=receipe.find(index=>index.id==id);
    res.send(filterdata);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})