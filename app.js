var http = require('http');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!');
  })
  .listen(8081);

const redSwitch = [];
const carousel = new bootstrap.Carousel('#myCarousel');

var mybutton = document.getElementById('myBtn');

// When scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When click on the button, scroll to the top of the doc
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
