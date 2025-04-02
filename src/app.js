const express = require('express');
const app= express();
app.get("/",(req,res)=>{
   res.send("hello there server is ready for u !");
    }
);
app.listen(770,()=>{
    console.log("app is listening on port :770");
});
