function showTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let day = today.getDate(); // getDay returns days of the week. Really dumb...
  let month = today.getMonth();
  
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  
  if (minutes < 10 ) {
    minutes = `0${minutes}`;
  }
  
  const monthsMap = {0: 'January',
                     1: 'February',
                     2: 'March',
                     3: 'April',
                     4: 'May',
                     5: 'June',
                     6: 'July',
                     7: 'August',
                     8: 'September',
                     9: 'October',
                     10: 'November', 
                     11: 'December',
                    };
  
  document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`;
  
  document.getElementById('date').innerHTML = `${monthsMap[month]}, ${day}`;
  
  let timeout = setTimeout(showTime, 500);
}

showTime();

