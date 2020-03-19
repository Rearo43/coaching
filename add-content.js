//var answer = 'Game' 'game' 'Basketball' 
var answers = prompt("What are you interested in, Basketball or Gaming?");
var banana;

if (answers === 'Gaming') {
    confirm('cool, me too!')
    banana = 'cool, me too!!';
} else if (answers === 'Basketball') {
    confirm('You are in the right place!')
    banana = 'You are in the right place!';
} 
//else if (answers === 'Basketball') {
 //   banana = '';
//} else if (answers === 'basketball') {
//   banana = '';
//} else {
 //   banana = '';
//}

document.write('<h3>' + banana + '</h3>');


//////////////////////////////////////2
var answers = prompt("Male or Female?");
var banana;

if (answers === 'Male') {
    confirm('Great, we have coaches excited to talk to you')
    banana = 'cool, me too!!';
} else if (answers === 'Female') {
    banana = 'Sounds great many of our female coaches are on their way to the WNBS!';
} 
//else if (answers === 'Basketball') {
 //   banana = '';
//} else if (answers === 'basketball') {
//   banana = '';
//} else {
 //   banana = '';
//}

document.write('<h3>' + banana + '</h3>');


///////////////////////////3
var answers = prompt("Are you 18 or older?");
var banana;

if (answers === 'Yes') {
    confirm('Great continue')
    banana = 'Great continue';
} else if (answers === 'No') {
    confirm('Ask a parent to contact us.')
    banana = 'Ask a parent to contact us.';
} 
//else if (answers === 'Basketball') {
 //   banana = '';
//} else if (answers === 'basketball') {
//   banana = '';
//} else {
 //   banana = '';
//}

document.write('<h3>' + banana + '</h3>');
