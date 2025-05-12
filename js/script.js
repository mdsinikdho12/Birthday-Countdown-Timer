const deadlineDate ="30 octobor 2025"




function deadline(){
    const dedlineEndsDate = new Date(deadlineDate);
    const currentDate = new Date();

    const totalSeconds = (dedlineEndsDate - currentDate) /1000 ;
    const Days = Math.floor(totalSeconds / (3600*24));
    const Hours = Math.floor(totalSeconds % (3600*24) / 3600);
    const Minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = Math.floor(totalSeconds % 60);

    document.getElementById('Days').innerHTML=timeFormating(Days);
    document.getElementById("Hours").innerHTML=timeFormating(Hours);
    document.getElementById("Minutes").innerHTML=timeFormating(Minutes);
    document.getElementById("Seconds").innerHTML=timeFormating(seconds);
        


}

function timeFormating(time){
    return time <10 ?`0${time}`:time;
}

deadline()
setInterval(deadline,1000)



