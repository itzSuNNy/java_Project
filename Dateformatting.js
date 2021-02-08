/*  
    Full month name monthLong
    Full Year name year
    only month name 3 string monthShort like feb jan 
    only month number month
    only month number without m
    Day name 3 string dayShort
    full day name dayLong
*/
class FormattingDate{
    daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    daysListShort = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    monthList = ["","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthListShort = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    getDate(dateString){
      
        var dateString = new Date(dateString);
        var breakedDateObj = {};
        var temp=0;

        breakedDateObj.dayName = dateString.getDay();
        var temp = dateString.getDate();
        breakedDateObj.date=temp; 
        breakedDateObj.dateZero = temp < 10 ? ("0" + temp) : temp;

        temp = dateString.getMonth()+1;
        breakedDateObj.month=temp;
        breakedDateObj.monthZero = temp < 10 ? ("0" + temp) : temp;

        breakedDateObj.year = dateString.getFullYear();

        temp = dateString.getHours();
        breakedDateObj.hour = temp < 10 ? ("0" + temp) : temp;
        temp = dateString.getMinutes();
        breakedDateObj.minute= temp < 10 ? ("0" + temp) : temp;
        breakedDateObj.second = dateString.getSeconds();

        return breakedDateObj;
        
    }

    dayFormat(day){
        return ([1,11,21].indexOf(day) != -1) ? 'st' : ([2,22].indexOf(day) != -1) ? 'nd' : ([3,23].indexOf(day) != -1) ? 'rd' : 'th';
    }
    amPM(hour){
        var dObj= this.getDate(date)
        var ampm = (parseInt(hour) >= 12) ? "PM" : 'AM';                                   
        dObj.hour = ( hour>12) ?hour-12:hour;
        return ampm;
    }
    time_12_to_24(hour){
        hour= (hour>12) ? "0"+(hour-12):hour; 
        return hour;
    }
    // 01
    dayShortDDMMYYYY(dateString){
        var dObj = this.getDate(dateString);
        var str=this.daysListShort[dObj.dayName]+", "+(dObj.date+""+this.dayFormat(dObj.date))+" "+this.monthListShort[dObj.month]+" "+dObj.year;
        return str;
    } 
    // 02
    dayLongDDMMYYYY(dateString){
        var dObj=this.getDate(dateString);
        var str=this.daysList[dObj.dayName]+", "+(dObj.date+""+this.dayFormat(dObj.date))+" "+this.monthListShort[dObj.month]+" "+dObj.year;
        return str;
    }
    // 03
    dayShortDDMMYYYY_HH_MM_24(dateString){
        var dObj=this.getDate(dateString);
        var str=this.daysListShort[dObj.dayName]+", "+(dObj.date+""+this.dayFormat(dObj.date))+" "+this.monthListShort[dObj.month]+" "+dObj.year+" "+dObj.hour+":"+dObj.minute;
        return str;
    }
    // 04
    dayLongDDMMYYYY_HH_MM_24(dateString){
        var dObj=this.getDate(dateString);
        var str=this.daysList[dObj.dayName]+", "+(dObj.date+""+this.dayFormat(dObj.date))+" "+this.monthListShort[dObj.month]+" "+dObj.year+" "+dObj.hour+":"+dObj.minute;
        return str;
    }
    // 05
    dayShortDDMMYYYY_HH_MM_12(dateString){
        var dObj=this.getDate(dateString);
        var temp=(dateString.search(/PM/i) != -1 || dateString.search(/AM/i) != -1);
        var str;
        if( temp && (!(isNaN(dObj.hour)))){
            str=this.daysListShort[dObj.dayName]+", "+(dObj.date+""+this.dayFormat(dObj.date))+" "+this.monthListShort[dObj.month]+" "+dObj.year+" "+dObj.hour+":"+dObj.minute;            
            return str;
        }else if(temp && isNaN(dObj.hour)){
            return "false Statement";
        }else{
            str=this.daysListShort[dObj.dayName]+", "+(dObj.date+""+this.dayFormat(dObj.date))+" "+this.monthListShort[dObj.month]+" "+dObj.year+" "+this.time_12_to_24(dObj.hour)+":"+dObj.minute+" "+this.amPM(dObj.hour);
            return str;
        }
              
    }
    // 06
    dayLongDDMMYYYY_HH_MM_12(dateString){
        var dObj=this.getDate(dateString);
        var temp=(dateString.search(/PM/i) != -1 || dateString.search(/AM/i) != -1);
        var str;
        if( temp && (!(isNaN(dObj.hour)))){
            str=this.daysList[dObj.dayName]+", "+(dObj.date+""+this.dayFormat(dObj.date))+" "+this.monthListShort[dObj.month]+" "+dObj.year+" "+dObj.hour+":"+dObj.minute;            
            return str;
        }else if(temp && isNaN(dObj.hour)){
            return "false Statement";
        }else{
            str=this.daysList[dObj.dayName]+", "+(dObj.date+""+this.dayFormat(dObj.date))+" "+this.monthListShort[dObj.month]+" "+dObj.year+" "+this.time_12_to_24(dObj.hour)+":"+dObj.minute+" "+this.amPM(dObj.hour);
            return str;
        }
    }
    //sepration - month name 0,3
    // 07
    yearMonthShortDate(dateString){
        var dObj = this.getDate(dateString);
        var str=dObj.year+"-"+this.monthListShort[dObj.month]+"-"+dObj.dateZero;
        return str
    }
    // 08
    dateMonthShortYear(dateString){
        var dObj = this.getDate(dateString);
        var str=dObj.dateZero+"-"+this.monthListShort[dObj.month]+"-"+dObj.year;
        return str;
    }
    // 09
    monthShortDateYear(dateString){
        var dObj=this.getDate(dateString);
        var str=this.monthListShort[dObj.month]+"-"+dObj.dateZero+"-"+dObj.year;
        return str;
    }
    //sepration - month number 
    // 10
    dateMonthYear(dateString){
        var dObj = this.getDate(dateString);
        var str=dObj.dateZero+"-"+dObj.monthZeroh+"-"+dObj.year;
        return str;
    }
    // 11
    monthDateYear(dateString){
        var dObj = this.getDate(dateString);
        var str=dObj.monthZero+"-"+dObj.dateZero+"-"+dObj.year;
        return str;
    }
    // 12
    yearMonthDate(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+"-"+dObj.monthZero+"-"+dObj.dateZero;
        return str;
    }
    //full month name
    // 13
    monthLongDateYear(dateString){
        var dObj=this.getDate(dateString);
        var str=this.monthList[dObj.month]+"-"+dObj.dateZero+"-"+dObj.year;
        return str;
    }
    // 14
    yearMonthLongDate(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+"-"+this.monthList[dObj.month]+"-"+dObj.dateZero;
        return str;
    }
    //15
    dateMonthLongYear(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+"-"+this.monthList[dObj.month]+"-"+dObj.year;
        return str;
    }
    // 0 emit date month
    // 16
    mDYear(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.month+"-"+dObj.date+"-"+dObj.year;
        return str;
    }
    // 17
    yearMD(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+"-"+dObj.month+"-"+dObj.date;
        return str;
    }
    // 18
    dMYear(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.date+"-"+dObj.month+"-"+dObj.year;
        return str;
    }
    // 0 emit month
    // 19
    yearMDate(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+"-"+dObj.month+"-"+dObj.dateZero;
        return str;
    }
    // 20
    mDateYear(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.month+"-"+dObj.dateZero+"-"+dObj.year;
        return str;
    }
    // 21
    DateMYear(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+"-"+dObj.month+"-"+dObj.year;
        return str;
    }

    // no Seprate month digit
    // 22
    monthDateYear_noSeprate(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.monthZero+""+dObj.dateZero+""+dObj.year;
        return str;
    }
    //    23
    dateMonthYear_noSeprate(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+""+dObj.monthZero+""+dObj.year;
        return str;
    }
    //    24
    yearMonthDate_noSeprate(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+""+dObj.monthZero+""+dObj.dateZero;
        return str;
    }
    //    time ago
    //    25
    timeSince(date) {

        var seconds = Math.floor((new Date() - new Date(date))/1000);
        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years"+" ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months"+" ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days"+" ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours"+" ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes"+" ago";
        }
            return Math.floor(seconds) + " seconds"+" ago";
    }
    //sepration / month name 0,3
    //  26
    yearMonthDate_s(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+"/"+dObj.monthZero+"/"+dObj.dateZero;
        return str;
    }
    // 27
    dateMonthYear_s(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+"/"+dObj.monthZero+"/"+dObj.year;
        return str;
    }
    // 28
    monthDateYear_s(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.monthZero+"/"+dObj.dateZero+"/"+dObj.year;
        return str;
    }
    //29
    yearMonthShortDate_s(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+"/"+this.monthListShort[dObj.month]+"/"+dObj.dateZero;
        return str;
    }
    // 30
    dateMonthShortYear_s(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+"/"+this.monthListShort[dObj.month]+"/"+dObj.year;
        return str;
    }
    // 31
    monthShortDateYear_s(dateString){
        var dObj=this.getDate(dateString);
        var str=this.monthListShort[dObj.month]+"/"+dObj.dateZero+"/"+dObj.year;
        return str;
    }
    // 32
    yearMonthLongtDate_s(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+"/"+this.monthList[dObj.month]+"/"+dObj.dateZero;
        return str;
    }
    // 33
    dateMonthLongYear_s(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+"/"+this.monthList[dObj.month]+"/"+dObj.year;
        return str;
    }
    // 34
    monthLongDateYear_s(dateString){
        var dObj=this.getDate(dateString);
        var str=this.monthList[dObj.month]+"/"+dObj.dateZero+"/"+dObj.year;
        return str;
    }

    // sepration dot
     //  35
     yearMonthDate_d(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+"."+dObj.monthZero+"."+dObj.dateZero;
        return str;
    }
    // 36
    dateMonthYear_d(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+"."+dObj.monthZero+"."+dObj.year;
        return str;
    }
    // 37
    monthDateYear_d(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.monthZero+"."+dObj.dateZero+"."+dObj.year;
        return str;
    }
    //38
    yearMonthShortDate_d(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+"."+this.monthListShort[dObj.month]+"."+dObj.dateZero;
        return str;
    }
    // 39
    dateMonthShortYear_d(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+"."+this.monthListShort[dObj.month]+"."+dObj.year;
        return str;
    }
    // 40
    monthShortDateYear_d(dateString){
        var dObj=this.getDate(dateString);
        var str=this.monthListShort[dObj.month]+"."+dObj.dateZero+"."+dObj.year;
        return str;
    }
    // 41
    yearMonthLongtDate_d(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+"."+this.monthList[dObj.month]+"."+dObj.dateZero;
        return str;
    }
    // 42
    dateMonthLongYear_d(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+"."+this.monthList[dObj.month]+"."+dObj.year;
        return str;
    }
    // 43
    monthLongDateYear_d(dateString){
        var dObj=this.getDate(dateString);
        var str=this.monthList[dObj.month]+"."+dObj.dateZero+"."+dObj.year;
        return str;
    }
}
