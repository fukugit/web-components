
let debug_flg = true;

clear = ()=> {
  const data = document.querySelectorAll('[data-css-layout-debug]')
  data.forEach(element => {
    element.style.backgroundColor = '#FFFFFF';
    // element.style.border = "0";
  });
}
  
debug = ()=> {
  if (debug_flg) {
    const data = document.querySelectorAll('[data-css-layout-debug]')
    data.forEach(element => {
      element.style.backgroundColor = element.dataset.cssLayoutDebug;
      // element.style.boxSizing = "border-box";
      // element.style.border = "solid 1px black";
    });
  } else {
    clear();
  }
  debug_flg = !debug_flg

}

let button = document.getElementById('debug');
button.addEventListener('click', debug);


