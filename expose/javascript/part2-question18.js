function Convert_Date(){
   let d = new Date();
   let time = d.toLocaleTimeString();
   console.log(time);
}
setInterval(Convert_Date, 1000);
