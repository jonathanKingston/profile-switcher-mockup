function setup() {
  const picker = document.querySelector('#mee-picker');
  picker.addEventListener('click', pickerClick);
}


function pickerClick(e) {
  const target = e.target;
  const picker = document.querySelector('#mee-picker');
  if (target.classList.contains('expand')) {
    const el = document.querySelector(target.hash);
    el.classList.toggle('detail-expand');
    target.closest('li').classList.toggle('selected');
    picker.classList.toggle('open');
  }
  e.preventDefault();
}

setup();
