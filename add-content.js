//var answer = 2;
var answers = prompt("What are you interested in, Basketball or Gaming?");
var innerHTML;

if (answers === 'Gaming') {
    innerHTML = 'https://masonchance.github.io/twitch-coaches/';
} else if (answers === 'gaming') {
    innerHTML = 'https://masonchance.github.io/twitch-coaches/';
} else if (answers === 'Basketball') {
    innerHTML = 'https://rearo43.github.io/coaching/index.html';
} else if (answers === 'basketball') {
    innerHTML = 'https://rearo43.github.io/coaching/index.html';
} else {
    innerHTML = 'https://rearo43.github.io/coaching/index.html';
}

document.write('<h3>' + innerHTML + '</h3>');
