// import _ from 'lodash';
import { obj } from './comp/a.js';
import { obj2 } from './comp/b.js';
// import '../assets/style.css';
obj.sayHi()
obj2.sayHi()
console.log(eee)
function component() {
  const element = document.createElement('div');
  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = 'index';

  return element;
}
let A = null
// console.log(_.join([1,2,3]))
// console.log(_.join([1,2,3]))

document.body.appendChild(component());

// document.getElementById('aBtn').onclick = function () {
//   //异步加载A
//   import(/* webpackChunkName: 'A' */'./comp/a.js').then((data) => {
//     A = data.obj
//     A.sayHi()
//     // console.log(data.default)
//   })
// }
