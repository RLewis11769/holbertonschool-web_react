// Update counter based on button click - no spamming allowed
import $ from 'jquery';
const _ = require('lodash');
import '../css/main.css';

$('body').append('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append(`<p id='count'></p>`);
$('body').append('<p>Copyright - Holberton School</p>');

// Won't allow click spamming - one per second
$('button').on('click', _.debounce(updateCounter, 500, {
  // Specifies that update happens on leading edge of timeout, not waiting until after
  'leading': true
}));

let count = 0;
function updateCounter() {
  // Update count p tag based on button click below
  count += 1;
  $('#count').text(`${count} clicks on the button`);
};
