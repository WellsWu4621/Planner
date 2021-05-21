// Displays todays date and outputs the time to the second
const displayDate = () => {
  $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm a'));
}


// changes color of cells based on time
let hours = ['9','10','11','12','13','14','15','16','17']
let currentTime = moment().hour()
// function to check time
const checkTime = () => {
  for (let i = 0; i < hours.length; i++) {
    if (currentTime > hours[i]) {
      document.getElementById(`hour-${hours[i]}`).className = 'row time-block past'
    } else if (currentTime < hours[i]){
      document.getElementById(`hour-${hours[i]}`).className = 'row time-block future'
    } else {
      document.getElementById(`hour-${hours[i]}`).className = 'row time-block present'
    }
  }
}


//pull from Local Storage
let pastNotes = JSON.parse(localStorage.getItem(`userNotes`)) || []
for (let c = 0; c < pastNotes.length; c++) {
    document.getElementById(`${pastNotes[c].timeBlock}`).innerText = `${pastNotes[c].bValue}`
}

//Save button feature
document.addEventListener('click', event => {
  if (event.target.classList.contains('saveBtn')) {
    let btnNum = event.target.getAttribute('data-num')
    let bValue = document.getElementById(`b${btnNum}`).value
    let timeBlock = 'b' + btnNum
    let userNotes = JSON.parse(localStorage.getItem(`userNotes`)) || []
    let none = 'none'
    let locationNum = 0
    const check = () => {
      for (let n = 0; n < userNotes.length; n++) {
        if (userNotes[n].timeBlock === timeBlock) {
          locationNum = n
          none = ''
          break
        } else none = 'none'
      }
    }
    check()
    console.log(none)
    if (none === 'none') {
      userNotes.push({ timeBlock, bValue })
    } else {
      userNotes[locationNum].bValue = bValue
    }
    
    localStorage.setItem(`userNotes`,JSON.stringify(userNotes))
    console.log(btnNum)
    console.log(bValue)
  }
})
// updates time every minute
displayDate()
let todayDate = setInterval(() => {
  displayDate()
}, 60000);

// checks color every 10 minutes
checkTime()
let timeColor = setInterval(() => {
  checkTime()
}, 600000);
