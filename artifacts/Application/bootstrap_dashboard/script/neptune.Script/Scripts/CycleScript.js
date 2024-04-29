//cycle time == minutes per shift/units per shift
//1 shift = eight hours

//let intervalID = setInterval(func, delay)
let m = 0;
let s = 0;
let u = 0;
let active = false;



ExpectedCycleTimeValue.setText("3 min/unit")


GetShiftName = () => {
    var date = new Date();
    let shiftname = "";

    const currentHour = date.getHours();

    if (currentHour > 6 && currentHour < 14) {
        shiftname = "Morning";
    
    } else if (currentHour > 14 && currentHour < 22){
        shiftname = "Afternoon";

    }
    else {
        shiftname = "Night";
    }

    return shiftname;
}


let sn = GetShiftName();

ProductionControlCard.setSubTitle("Shift: " + sn + " | ")


StartProduction = () => {
    StartBtnBootstrap.setEnabled(false)
    StopBtnBootstrap.setEnabled(true)
    active = true;
    secondsCounter();
    //updateTime();

}



StopProduction = () => {
    StopBtnBootstrap.setEnabled(false)
    StartBtnBootstrap.setEnabled(true)
    
    active = false;
    m = 0;
    s = 0;
}


function secondsCounter() {

    if (s == 60){
        m++;
        s = 0;
    }

    if ((m == 3 && s >= 30) || m > 3){
        CurrentCyleValue.setTextColor("Danger");
    }
    else if (m== 3 && s < 30){
        CurrentCyleValue.setTextColor("Warning");
    }
    
    CurrentCyleValue.setText(m.toString().padStart(2, '0') + ":" + s.toString().padStart(2, '0'))
    
    s++;

    if (active){
        setTimeout(secondsCounter, 1000);
    }
    else {
        CurrentCyleValue.setTextColor("Body");
    }
    
}



//setInterval(secondsCounter, 1000);

