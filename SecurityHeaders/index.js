const express = require("express");
const app = express();

app.use((req,res,next)=>{
    res.removeHeader("X-Powered-By")
    next()
})

app.get("/list", (req, res) => {
  res.send([
    {
      id: 1,
      title: "Vikash System Design",
    },
  ]);
});

app.listen(5010, () => {
  console.log("sever is running ");
});
