const select = document.querySelector('select');
document.body.style.padding = '10px';

select.onchange = function() {
  const choice = select.value;
  
  createCalendar(choice, 2022);
}

function daysInMonth(month, year)
{
    var d = new Date(year, month, 0);
    return d.getDate();
}


const list = document.querySelector('.output');


function createCalendar(choice, yr) {
 // alert(choice);
  let m = choice;   
  //let yr = 2022;
  
    let tmpDate = new Date(yr,m,0);
    tmpDate.setDate(1);//set to 1st of a month
    let num = daysInMonth(m, yr);
    let dayofweek = tmpDate.getDay();  //index : 0 for sun, 1 mon, --- 6 for sat

    // alert("date: " + tmpDate);
    // alert("days in month: " + num);
    // alert("day of week: " + dayofweek);

  
  list.innerHTML = '';
  let calTable = document.createElement("table");
  let tblbody = document.createElement("tbody");

  let weekdays = ["B.", "B.e.", "Ç.a.", "Ç.", "C.a.", "C.", "Ş."];

  let headRow = document.createElement('tr');
  for (let d of weekdays) {
    let dayCell = document.createElement("td");
    dayCell.setAttribute("style","width: 10%;");
    let dayTxt = document.createTextNode(d);
        
    dayCell.appendChild(dayTxt);
   
    headRow.appendChild(dayCell);
  }
 // cRow.classList.add("head");
  tblbody.appendChild(headRow);
 

  //h1.textContent = choice;
  let total_entries = num + dayofweek;
   let t_rows = Math.round(total_entries /7.0);
  // alert(t_rows);
  let count = 1;
  for (let i = 0; i <= t_rows; i++) {
       
    let cRow = document.createElement('tr');
    
    for(let j = 0; j < 7; j++) {
      let cCell = document.createElement('td');
      cCell.setAttribute("style","width: 10%;");
      
      if(i === 0 && j < dayofweek){
        let cellTxt = document.createTextNode(" ");
        
        cCell.appendChild(cellTxt);
      }
      
      else if (count <= num){
        let cellTxt = document.createTextNode(count.toString());
        
        cCell.appendChild(cellTxt);
       
        //cCell.innerHTML = count;
        count ++;
      }
      else {
        
        break;
      }
      
      cRow.appendChild(cCell);
      
    }
    
    tblbody.appendChild(cRow);
  }
  calTable.appendChild(tblbody);
  // sets the border attribute of tbl to 2;
  calTable.setAttribute("border", "8");
  calTable.setAttribute.backgroundColor = "red";
  calTable.setAttribute("style", "background-color: lightblue; padding: 3%;");
 // calTable.setAttribute("style", "padding: 1%;")

  list.appendChild(calTable);
}
 
 createCalendar(1, 2022); //Jan 2022