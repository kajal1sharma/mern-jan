const fs = require('fs');
// fs.readFile('/Users/amit/Documents/MERN-Jan-2020/Intro.mov',(err,content)=>{
//     if(err){
//         console.log('Error is ',err);
//     }
//     else{
//         console.log('Data is ',content);
//     }
// });

fs.exists('x.txt',(isExist)=>{
    if(isExist){
        fs.appendFile('x.txt','Hello',(err)=>{});
    }
    else{

    }
})
if(fs.existsSync('x.txt')){
    var err = fs.appendFileSync('x.txt','Hello How are U');
    if(err){

    }
    else{

    }
    //fs.appendFile('x.txt','Hello',(err)=>{});
}
else{

}
//const stream = fs.createReadStream('/Users/amit/Documents/MERN-Jan-2020/Intro.mov',{highWaterMark: 20000});
const stream = fs.createReadStream('/Users/amit/Documents/MERN-Jan-2020/Intro.mov');
const wstream = fs.createWriteStream('/Users/amit/Documents/MERN-Jan-2020/TodayIntro.mov');
// stream.on('open',()=>{
//     console.log('Stream is Open');
//     });
    var count = 0;
    stream.pipe(wstream);
// stream.on('data',(chunk)=>{
//     wstream.write(chunk);
// //console.log('Chunk is ',chunk);
// count++;
// });
// stream.on('error',(err)=>{
//     console.log('Error is ',err);
//     });
// stream.on('end',()=>{
//     console.log('Data Write ends ',count);

//     });
//     stream.on('close',()=>{
//         console.log('Data close ');
//         });
for(let i = 1 ; i<=10; i++){
    console.log('Time Pass '+i);
}
// const path = require('path');
// var fullPath = path.join(__dirname,'test.txt');
// var e = fs.writeFileSync(fullPath,"Hello");
// fs.writeFile(fullPath,"Hello How are You",(err)=>{
//     console.log(err?"Error ":"Store");
// })