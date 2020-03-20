function interest() {
var answers = prompt("What are you interested in, Basketball or Gaming?");
var feedBack;

if (answers === 'Gaming') {
    confirm('You might want to try our Twitch Coaches link.')
    interestBack = 'Gamers- Try out, https://masonchance.github.io/twitch-coaches/';
} else if (answers === 'Basketball') {
    confirm('You are in the right place!')
    interestBack = 'Ballers- You are in the right place!';
} 
 return interestBack;
}



//////////////////////////////////////2
function gender() {
var answers = prompt("Male or Female?");
var genderBack;

if (answers === 'Male') {
    confirm('Great, we have coaches excited to talk to you!')
    genderBack = 'Male- Great, we have coaches excited to talk to you!';
} else if (answers === 'Female') {
    confirm('Sounds great many of our female coaches are on their way to the WNBA!')
    genderBack = 'Female- Sounds great many of our female coaches are on their way to the WNBA!';
} 
document.write('<h3>' + genderBack + '</h3>');
}



///////////////////////////3
function checkAge() {
var answers = prompt("Are you 18 or older? (Yes or No)");
var ageBack;

if (answers === 'Yes') {
    confirm('Great, continue!')
    ageBack = 'You have confirmed you are over 18.';
} else if (answers === 'No') {
    confirm('Ask a parent to contact us on your behalf.')
    ageBack = 'Not over 18, just ask a parent to contact us on your behalf.';
} 
document.write('<h3>' + ageBack + '</h3>');
}


//////////////////////////Loop
var practice = prompt('Number of times you practice a week.');
var number = 0
if (practice > 0 || x <= 7){
    for (let i = 0; i < practice ; i++)
    number++;

}

document.getElementById("times").innerHTML = "That's great, but we can help you get the most out of those"+ number +"practices!";
document.getElementById("click").style.visibility = 'visible'
else {
    document.getElementById("times").innerHTML = "You don't have to tell us now!"
    document.getElementById("click").style.visibility = 'visible';
}