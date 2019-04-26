window.onload = function () {
  var target = window.document.getElementById('target');

  var anchor = document.createElement('a');
  anchor.href = 'https://google.com';
  anchor.id = 'anchor-target';

  anchor.onclick = function (e) {
    e.preventDefault();

    window.open('http://google.com', '_blank');
  }

  target.appendChild(anchor);
}
