var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

const __checkbox = document.getElementsByTagName('input')[0];

const __label = document.createElement('LABEL');
__label.className = 'switch';
__label.id = 'alien';

const __span = document.createElement('SPAN');
__span.className = 'slider';

__label.appendChild(__checkbox);
__label.appendChild(__span);

document.body.appendChild(__label);

// Toggle event
document.getElementsByTagName('input')[0].onclick = () => {
  checkChecked();
};

function checkChecked() {
  if (document.getElementsByTagName('input')[0].checked) {
    document.body.className = 'shabley';
    document.getElementById('alien').className = 'switch hielene';
  } else {
    document.body.className = '';
    document.getElementById('alien').className = 'switch';
  }
};
