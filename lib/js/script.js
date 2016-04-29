function setup() {
  const picker = document.querySelector('#mee-picker');
  picker.addEventListener('click', pickerClick);
}


function pickerClick(e) {
  const target = e.target;
  const picker = document.querySelector('#mee-picker');
  if (target.classList.contains('expand')) {
    const el = document.querySelector(target.hash);
    el.classList.add('detail-expand');
    picker.classList.add('open');
  }
  e.preventDefault();
}

setup();
