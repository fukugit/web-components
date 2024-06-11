
let debug_flg = true;

start = ()=> {
  const data = document.querySelectorAll('[data-css-layout-debug]')
  data.forEach(element => {
    element.style.backgroundColor = '#FFFFFF';
  });
}
  
debug = ()=> {
  if (debug_flg) {
    const data = document.querySelectorAll('[data-css-layout-debug]')
    data.forEach(element => {
      element.style.backgroundColor = element.dataset.cssLayoutDebug;
    });
  } else {
    start();
  }
  debug_flg = !debug_flg

}

let button = document.getElementById('debug');
button.addEventListener('click', debug);


