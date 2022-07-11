const mongoose=require('mongoose');
const express=require('express');

var app=express();
app.use(express.json());


const uri = "mongodb://localhost/Bajaj";
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("connected to db");
    })
    .catch(()=>{
        console.log("not connected");
    });
const port=3090;
app.listen(port,()=>{
    console.log(`listening at ${port}`);
})
function isCharacterALetter(char) {
    return /^[A-Z]$/i.test(char);
}
function intToChar(int) {
    // 👇️ for Uppercase letters, replace `a` with `A`
    const code = 'a'.charCodeAt(0);


    return String.fromCharCode(code + int);
}

app.get('/result',(req,res)=>{
    console.log(req.body.data[0]);
    let arr=req.body.data;
    let count=0
    let length=arr.length;
    let number=[]
    let char=[]
    for (let i=0;i<length;i++){
        console.log(arr[i]);
        if(isCharacterALetter(arr[i]))
        {
            char.push(arr[i])
            console.log("hii");
            count++;
        }
        else if(Number.isInteger(arr[i])){
            number.push(arr[i])
            count++;
        }
    }
    let result={};
    result.is_success=true;
    result.user_id="Anurag Modi_1928215"
    result.email="1928215@kiit.ac.in"
    result.roll_number="1928215"
    result.numbers=number
    result.alphabets=char
    result.count=count;
    res.send(result);

})
