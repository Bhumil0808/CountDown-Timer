

const endDate = "07 Feb 2024 14:18"

document.getElementById("end-Date").innerHTML=endDate;
const input = document.querySelectorAll('input');

const clock = ()=>{
    const end =  new Date(endDate);
    const now = new Date();
    // console.log(end);
    // console.log(now);
    const diff = (end-now)/1000;
    if(diff<0){
        document.getElementById('arrived').innerHTML='We Have Arrived'
        return;
    }
    input[0].value = Math.floor(diff/(3600*24));
    input[1].value= Math.floor((diff/3600)-(input[0].value*24));
    input[2].value = Math.floor((diff/60)-((input[0].value*24*60)+(input[1].value*60)));
    input[3].value= Math.floor(diff-((input[0].value*24*3600)+(input[1].value*3600)+(input[2].value*60)));

}

clock();

setInterval(()=>{
    clock()
},1000);
