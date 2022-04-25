// import _ from 'lodash';
// import '../assets/style.css';

function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = 'index';

  return element;
}

// console.log(_.join([1,2,3]))

document.body.appendChild(component());

document.getElementById('aBtn').onclick = function () {
  //异步加载A
  import('./comp/a.js').then((data) => {
    console.log(data.default)
  })
}
