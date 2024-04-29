let hrs = 0;
let min = 0;
let sec = 0;

ShiftBegin = () => {
    if (sec == 60){
        min++;
        sec = 0;
    }

    if (min == 60){
        hrs++;
        min = 0;
    }

    ProductionControlCard.setSubTitle(`Shift: ${GetShiftName()} | ${hrs.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`);

    sec++;

    setTimeout(ShiftBegin, 1000);
}
