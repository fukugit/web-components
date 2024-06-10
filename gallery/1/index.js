
let debug_flg = false;

start = ()=> {
  document.getElementById('body')
  .style.backgroundColor = '#FFFFFF';
  document.getElementsByClassName('container')[0]
    .style.backgroundColor= '#FFFFFF';
  document.getElementsByClassName('gallery')[0]
    .style.backgroundColor= '#FFFFFF';
  document.getElementsByClassName('top')[0]
    .style.backgroundColor= '#FFFFFF';
  document.getElementsByClassName('contents')[0]
    .style.backgroundColor= '#FFFFFF';
  document.getElementsByClassName('image1')[0]
    .style.backgroundColor= '#FFFFFF';
}
  
debug = ()=> {
  if (debug_flg) {
    const data = document.querySelectorAll('[data-css-layout-debug]')
    // alert(data[0].dataset.cssLayoutDebug)
    data[0].style.backgroundColor = data[0].dataset.cssLayoutDebug;
    // document.getElementById('body')
    // .style.backgroundColor = 'skyblue';
    document.getElementsByClassName('container')[0]
      .style.backgroundColor= 'orange';
    document.getElementsByClassName('gallery')[0]
      .style.backgroundColor= 'greenyellow';
      document.getElementsByClassName('top')[0]
      .style.backgroundColor= 'pink';
    document.getElementsByClassName('contents')[0]
      .style.backgroundColor= 'orange';
    document.getElementsByClassName('image1')[0]
      .style.backgroundColor= 'brown';
  } else {
    start();
  }
  debug_flg = !debug_flg

}

start();
let button = document.getElementById('debug');
button.addEventListener('click', debug);


