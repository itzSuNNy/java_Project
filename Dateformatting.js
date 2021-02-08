/*  
    Full month name MMMM
    Full Year name YYYY
    only month name 3 string MM like feb jan 
    only month number M
    only month number without 0 m
    Day name 3 string Day
    full day name DayName



*/

class FormattingDate{
    dateString_whole="";
    date = 0;
    month = 0;
    year = 0;
    daysName="";
    hour=0;
    minute=0;
    second=0;
    daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    getDate(dateString){
        var dateString = new Date(dateString);
        this.dateString_whole=dateString;                       //for something different
        this.daysName=dateString.getDay();
        var temp_date = dateString.getDate(); 
        this.date = temp_date < 10 ? ("0" + temp_date) : temp_date;

        var  temp_month = dateString.getMonth()+1;
        this.month = temp_month < 10 ? ("0" + temp_month) : temp_month;

        this.year = dateString.getFullYear();

        var  temp_hour=dateString.getHours();
        this.hour = temp_hour < 10 ? ("0" + temp_hour) : temp_hour;
        var  temp_minute = dateString.getMinutes();
        this.minute= temp_minute < 10 ? ("0" + temp_minute) : temp_minute;
        this.second = dateString.getSeconds();
    }
    dayFormat(day){
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
          case 1:  return "st";
          case 2:  return "nd";
          case 3:  return "rd";
          default: return "th";
        }
    }
    amPM(hour){
        var ampm = (parseInt(hour) >= 12) ? "PM" : 'AM';                                   
        this.hour = ( hour>12) ?hour-12:hour;
        return ampm;
    }
    time_12_to_24(hour){
        hour= (hour>12) ? "0"+(hour-12):hour; 
        return hour;
    }
    // 01
    Day_DDMMYYYY(dateString){
        this.getDate(dateString);
        var str=this.daysList[this.daysName].substring(0,3)+", "+(this.dateString_whole.getDate()+""+this.dayFormat(this.date))+" "+this.monthList[this.month-1].substring(0,3)+" "+this.year;
        return str;
    } 
    // 02
    DayName_DDMMYYYY(dateString){
        this.getDate(dateString);
        var str=this.daysList[this.daysName]+", "+(this.dateString_whole.getDate()+""+this.dayFormat(this.date))+" "+this.monthList[this.month-1].substring(0,3)+" "+this.year;
        return str;
    }
    // 03
    Day_DDMMYYYY_HH_MM_24(dateString){
        this.getDate(dateString);
        var str=this.daysList[this.daysName].substring(0,3)+", "+(this.dateString_whole.getDate()+""+this.dayFormat(this.date))+" "+this.monthList[this.month-1].substring(0,3)+" "+this.year+" "+this.hour+":"+this.minute;
        return str;
    }
    // 04
    DayName_DDMMYYYY_HH_MM_24(dateString){
        this.getDate(dateString);
        var str=this.daysList[this.daysName]+", "+(this.dateString_whole.getDate()+""+this.dayFormat(this.date))+" "+this.monthList[this.month-1].substring(0,3)+" "+this.year+" "+this.hour+":"+this.minute;
        return str;
    }
    // 05
    Day_DDMMYYYY_HH_MM_12(dateString){
        this.getDate(dateString);
        var str;
        if(dateString.search(/PM/i) != -1 || dateString.search(/AM/i) != -1){
            str=this.daysList[this.daysName].substring(0,3)+", "+(this.dateString_whole.getDate()+""+this.dayFormat(this.date))+" "+this.monthList[this.month-1].substring(0,3)+" "+this.year+" "+this.hour+":"+this.minute;
            return str;
        }else{
            str=this.daysList[this.daysName].substring(0,3)+", "+this.dateString_whole.getDate()+""+this.dayFormat(this.date)+" "+this.monthList[this.month-1].substring(0,3)+" "+this.year+" "+this.time_12_to_24(this.hour)+":"+this.minute+" "+this.amPM(this.hour);
            return str;
        }
              
    }
    // 06
    DayName_DDMMYYYY_HH_MM_12(dateString){
        this.getDate(dateString);
        var str;
        if(dateString.search(/PM/i) != -1 || dateString.search(/AM/i) != -1){
            return str;
        }else{
            str=this.daysList[this.daysName]+", "+this.dateString_whole.getDate()+""+this.dayFormat(this.date)+" "+this.monthList[this.month-1].substring(0,3)+" "+this.year+" "+this.time_12_to_24(this.hour)+":"+this.minute+" "+this.amPM(this.hour);
            return str;
        }
    }
    //sepration - month name 0,3
    // 07
    YYYYMMDD(dateString){
        this.getDate(dateString);
        var str=this.year+"-"+this.monthList[this.month-1].substring(0,3)+"-"+this.date;
        return str;

    }
    // 08
    DDMMYYYY(dateString){
        this.getDate(dateString);
        var str=this.date+"-"+this.monthList[this.month-1].substring(0,3)+"-"+this.year;
        return str;

    }
    // 09
    MMDDYYYY(dateString){
        this.getDate(dateString);
        var str=this.monthList[this.month-1].substring(0,3)+"-"+this.date+"-"+this.year;
        return str;

    }
    //sepration - month number 
    // 10
    DDMYYYY(dateString){
        this.getDate(dateString);
        var str=this.date+"-"+this.month+"-"+this.year;
        return str;
    }
    // 11
    MDDYYYY(dateString){
        this.getDate(dateString);
        var str=this.month+"-"+this.date+"-"+this.year
        return str;
    }
    // 12
    YYYYMDD(dateString){
        this.getDate(dateString);
        var str=this.year+"-"+this.month+"-"+this.date;
        return str;
    }
    //full month name
    // 13
    MMMMDDYYYY(dateString){
        this.getDate(dateString);
        var str=this.monthList[this.month-1]+" "+this.date+","+this.year;
        return str;
    }
    // 14
    YYYYMMMMDD(dateString){
        this.getDate(dateString);
        var str= this.year+", "+this.monthList[this.month-1]+" "+this.date;
        return str;
    }
    // 0 emit date month
    // 15
    mDYYYY(dateString){
        this.getDate(dateString);
        var str= (parseInt(this.dateString_whole.getMonth())+1)+"-"+this.dateString_whole.getDate()+"-"+this.year;
        return str;
    }
    // 16
    YYYYmD(dateString){
        this.getDate(dateString);
        var str= this.year+"-"+(parseInt(this.dateString_whole.getMonth())+1)+"-"+this.dateString_whole.getDate();
        return str;
    }
    // 17
    DmYYYY(dateString){
    this.getDate(dateString);
    var str= this.dateString_whole.getDate()+"-"+(parseInt(this.dateString_whole.getMonth())+1)+"-"+this.year;
    return str;
    }
    // 0 emit month
    // 18
    YYYYmDD(dateString){
        this.getDate(dateString);
        var str= this.year+"-"+(parseInt(this.dateString_whole.getMonth())+1)+"-"+this.date;
        return str;
    }
    // 19
    mDDYYYY(dateString){
        this.getDate(dateString);
        var str= (parseInt(this.dateString_whole.getMonth())+1)+"-"+this.date+"-"+this.year;
        return str;
    }
    // 20
    DDmYYYY(dateString){
        this.getDate(dateString);
        var str= this.date+"-"+(parseInt(this.dateString_whole.getMonth())+1)+"-"+this.year;
        return str;
    }
    
    // no Seprate month digit
    // 21
    MDDYYYY_noSeprate(dateString){
        this.getDate(dateString);
        var str=this.month+""+this.date+""+this.year;
        return str;
    }
    //    22
    DDMYYYY_noSeprate(dateString){
        this.getDate(dateString);
        var str=this.date+""+this.month+""+this.year;
        return str;
    }
    //    23
    YYYYMDD_noSeprate(dateString){
        this.getDate(dateString);
        var str=this.year+""+this.month+""+this.date;
        return str;
    }
    //    time ago
    //    24
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
    //  25
    YYYYMMDD_s(dateString){
        this.getDate(dateString);
        var str=this.year+"/"+this.monthList[this.month-1].substring(0,3)+"/"+this.date;
        return str; 
    }
    // 26
    DDMMYYYY_s(dateString){
        this.getDate(dateString);
        var str=this.date+"/"+this.monthList[this.month-1].substring(0,3)+"/"+this.year;
        return str;
    }
    // 27
    MMDDYYYY_s(dateString){
        this.getDate(dateString);
        var str=this.monthList[this.month-1].substring(0,3)+"/"+this.date+"/"+this.year;
        return str;
    }
}
// .substring(1,(this.date.length))