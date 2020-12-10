function countDown(num) {      

           work_number = time_diff[num]--;
	if (work_number<0) {document.getElementById('counter'+num).innerHTML = 'отсчет окончен'; } else {
           days = Math.floor(work_number / 86400);      
           work_number -= days * 86400;
           hours = Math.floor(work_number / 3600);
           work_number -= hours * 3600;
           minutes = Math.floor(work_number / 60);
           work_number -= minutes * 60;
           seconds = Math.floor(work_number % 60);
           days = (days < 10) ? "0"+days : days;
           hours = (hours < 10) ? "0"+hours : hours;
           minutes = (minutes < 10) ? "0"+minutes : minutes;
           seconds = (seconds < 10) ? "0"+seconds : seconds;
           values = [
              declOfNum(days, ["", "", ""]), 
              declOfNum(hours, ["", "", ""]),  //
              declOfNum(minutes, ["", "", ""]),  //
              declOfNum(seconds, ["", "", ""]) //
           ];
           document.getElementById('counter'+num).innerHTML =  values.join(" ");// + ".";      
		}
        }

        function declOfNum(number, titles) {
           cases = [2, 0, 1, 1, 1, 2];
           return "<b>" + number + "</b> " + titles[ (number%100>4 && number%100<20)? 2 : cases[Math.min(number%10, 5)] ];
        }

        var time_diff=new Array;
		D = new Date();
		time_diff[1] = (Date.UTC(2016, 07, 29, 0, 0, 0) - D.getTime()) / 50000;
		time_diff[2] = (Date.UTC(2016, 09, 29, 0, 0, 0) - D.getTime()) / 50000;

        setInterval("countDown(1)", 1000);
        setInterval("countDown(2)", 1000);




