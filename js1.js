function timefun(){
let rdate=new Date();
document.getElementById('date1').innerHTML=rdate.toLocaleDateString();
document.getElementById('time1').innerHTML=rdate.toLocaleTimeString();
}

setInterval(timefun,1000);