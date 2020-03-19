//var answer = 'Game' 'game' 'Basketball' 
var answers = prompt("What are you interested in, Basketball or Gaming?");
var feedBack;

if (answers === 'Gaming') {
    confirm('You might want to try our Twitch Coaches link.')
    feedBack = 'Gamers- Try out, https://masonchance.github.io/twitch-coaches/';
} else if (answers === 'Basketball') {
    confirm('You are in the right place!')
    feedBack = 'Ballers- You are in the right place!';
} 


document.write('<h3>' + feedBack + '</h3>');


//////////////////////////////////////2
var answers = prompt("Male or Female?");
var feedBack;

if (answers === 'Male') {
    confirm('Great, we have coaches excited to talk to you!')
    feedBack = 'Male- Great, we have coaches excited to talk to you!';
} else if (answers === 'Female') {
    confirm('Sounds great many of our female coaches are on their way to the WNBA!')
    feedBack = 'Female- Sounds great many of our female coaches are on their way to the WNBA!';
} 


document.write('<h3>' + feedBack + '</h3>');


///////////////////////////3
var answers = prompt("Are you 18 or older? (Yes or No)");
var feedBack;

if (answers === 'Yes') {
    confirm('Great, continue!')
    feedBack = 'You have confirmed you are over 18.';
} else if (answers === 'No') {
    confirm('Ask a parent to contact us on your behalf.')
    feedBack = 'Not over 18, just ask a parent to contact us on your behalf.';
} 


document.write('<h3>' + feedBack + '</h3>');
