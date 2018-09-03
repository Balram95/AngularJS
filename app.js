const express=require('express');
const app = express();
const router=express.Router();
const cors=require('cors');
app.use(cors());
router.get('/',function(req,res){
  console.log(req);
  res.sendfile('index.html');
})
app.use('/',router);
app.listen('1999',()=>{
  console.log('Running on port :1999');
})
