/**
 * Present all job titles in one, specific DOM element.
 */
var jobTitleCarousell = function () {
  var jobTitleElement = document.querySelector('.job-title');
  var jobTitles = [
    'JavaScript',
    'Web',
    'Front-end',
    'Back-end',
    'Python'
  ];
  var speed = 2 * 1000;

  var index = 1;
  var limit = jobTitles.length;
  setInterval(function() {
    if (index >= limit) index = 0;
    jobTitleElement.textContent = jobTitles[index];
    index++;
  }, speed);
};

/**
 * Register jobTitleCarousell on DOMContentLoaded.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', jobTitleCarousell);
