const fs = require ('fs');


// READ A FILE 
/* fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
}) */

//WRITE A FILE or creating a file
//fs.writeFile('./docs/blog1.txt', 'learning node js has been made easier with the help of net nija from youtube', () => {
   // console.log('the file has been written you can check!');
//});

//Directories
// creating directory
//fs.mkdir('./assets1',(err) =>{
  //  if(err){
    //    console.log(err);
    //}
    //console.log('folder created');
//});

//Deleting directory
// fs.rmdir('./assets', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('folder deleted');
// }); 

//deleting a file
fs.unlink('./docs/deleteme.txt', (err) =>{
    if (err){
        console.log(err);
    }
    console.log('folder deleted');
});
