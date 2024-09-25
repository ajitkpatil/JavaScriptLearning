let raceNumber = Math.floor(Math.random() * 1000);
let earyRegistrant = false;
let atheleteAge = 17;

if (earyRegistrant && atheleteAge > 18) {
  raceNumber += 1000;
}
if (earyRegistrant && atheleteAge > 18) {
  console.log(`The race will start at 9:30 am. Race number ${raceNumber}`);
} else if (!earyRegistrant && atheleteAge > 18) {
  console.log(
    `The race will start for late registrants at 11:00 am. Race Number ${raceNumber}`
  );
} else if (atheleteAge < 18) {
  console.log(
    `The race for youth will start at 12:30 pm. Race number ${raceNumber}`
  );
  
}
