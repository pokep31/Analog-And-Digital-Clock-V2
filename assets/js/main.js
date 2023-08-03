/*=============== CLOCK ===============*/
const hour = document.getElementById('clock-hour'),
      minutes = document.getElementById('clock-minutes')

const clock = () =>{
  //We getthe Date object
  let date = new Date()
  
  // We get the hours and minutes
  // (current time) / 12(hours) * 360(deg circle)
  // (current minutes) / 60(minutes) * 360(deg circle)
  let hh = date.getHours() / 12 * 360,
  mm = date.getMinutes() / 60 * 360
  
  // We add a rotation to the elements
  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
  minutes.style.transform = `rotateZ(${mm}deg)`
}
setInterval(clock, 1000) // (Updates every 1s) 1000 = 1s 

/*=============== TIME AND DATE TEXT ===============*/
const dateDayWeek = document.getElementById('date-day-week'),
dateMonth = document.getElementById('date-month'),
dateDay = document.getElementById('date-day'),
dateYear = document.getElementById('date-year'),
textHour = document.getElementById('text-hour'),
textMinutes = document.getElementById('text-minutes'),
textAmPm = document.getElementById('text-ampm')

const clockText = () =>{
  //We getthe Date object
  let date = new Date()
  
  // We get the time and date
  let dayWeek = date.getDay(),
      month = date.getMonth(),
      day = date.getDate(),
      year = date.getFullYear(),
      hh = date.getHours(),
      mm = date.getMinutes(),
      ampm

  // We get the days of the weeks and the months. (First day of the week Domingo)
  let daysWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  let months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']

  // We add corresponding dates
  dateDayWeek.innerHTML = `${daysWeek[dayWeek]}`
  dateMonth.innerHTML = `${months[month]}`
  dateDay.innerHTML = `${day}, `
  dateYear.innerHTML = year

  // If hour is greater than 12 (afternoon), we subtract -12, so that is startsat 1 (afternoon)
  if (hh >=12){
      hh = hh - 12
      ampm = 'PM'
  } else{
      ampm = 'AM'
  }

  textAmPm.innerHTML = ampm

  // When it is 0 hours (early morning), we tell it to change to 12 hours
  if (hh == 0){hh = 12}

  // If hours are less than 10, add a 0 (01, 02, 03,...09)
  if (hh<10){hh = `0${hh}`}    
  textHour.innerHTML = `${hh}: `

  // If minutes are less than 10, add a 0 (01, 02, 03,...09)
  if (mm<10){mm = `0{mm}`}
  textMinutes.innerHTML = mm

  }
setInterval(clockText, 1000) // (Updates every 1s) 1000 = 1s