# myNote
# myNote
for (var i = 0; i < 3; i++) {
   setTimeout(function(){console.log(i)},0);
}
// 3,3,3

for (var i = 0; i < 3; i++) {
   console.log(i);
}
// 0,1,2

for (let i = 0; i < 3; i++) {
   setTimeout(function(){console.log(i)},0);
}
// 0,1,2

for (let i = 0; i < 3; i++) {
   setTimeout(function(){console.log(i)},0);
} =
for (var  i = 0; i < 3; i++) {
  let tmp = i;
   setTimeout(function(){console.log(tmp)},0);
}

<!doctype html>
<html className="no-js" lang="">
  <head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>HomePage</title>
  </head>
  <body>
    <div id="app">
    </div>
     <script>
 var ndContainer = document.getElementById('app');
 for (var i = 0; i < 3; i++) {
    var ndItem = document.createElement('li');
    ndItem.innerText = i + 1;
    ndItem.addEventListener('click', function () {
        alert(ndItem.innerText);
    });
    ndContainer.appendChild(ndItem);
}
     </script>
  </body>
</html>

 for (var i = 0; i < 3; i++) {
    var ndItem = document.createElement('li');
    ndItem.innerText = i + 1;
    ndItem.addEventListener('click', function () {
        alert(ndItem.innerText);
    });
    ndContainer.appendChild(ndItem);
}
//  3,3,3

 for (var i = 0; i < 3; i++) {
    const ndItem = document.createElement('li');
    ndItem.innerText = i + 1;
    ndItem.addEventListener('click', function () {
        alert(ndItem.innerText);
    });
    ndContainer.appendChild(ndItem);
}
// 1,2,3

 for (var i = 0; i < 3; i++) {
    var ndItem = document.createElement('li');
    ndItem.innerText = i + 1;
    ndItem.addEventListener('click', function () {
        alert(this.innerText);
    });
    ndContainer.appendChild(ndItem);
}
// 1,2,3

//子组件
const a = (props) => {
  console.log(this);
  //….
  return (JSX)

}
export default a;

//父组件
<a  …data>

箭头函数里的this是定义时所在的对象  不是使用时所在的对象
这里的this指向的是module，严格模式，因此是undefined，不是严格模式，window
console.log(this); ＝＝＝＝ undefined

import A；
class B ｛
｝
export B；

整个叫module, 顶层代码的this指向undefined,classB里的this是B的实例对象

js异步编程的4种方式

http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html

ES6 class中
为啥要在constructor中绑定this

class Logger {
  printName() {
    this.print(“a”);
  }
 print(text) {
   console.log(text);
 }
}

for循环
for (let i = 0; i<3;i++){
 let i = ‘abc’;
 console.log(i);
}
输出三次abc，函数内部的变量i和外部的变量i是分离的

let
块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了

涂神：只是用函数作用域模拟块级，不能完全相等

顶层对象的属性与全局变量挂钩，被认为是javascript最大的设计败笔之一
window.a = 1;
a// 1
a = 2;
window.a // 2

ES6 let，const，class 命令的全局变量，不属于顶层对象的属性。也就是说，从ES6开始，全局变量将逐步与顶层对象的属性脱钩。

箭头函数

函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
this对象的指向是可变的，但是在箭头函数中，它是固定的。
this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。

所以，箭头函数转成ES5的代码如下。

// ES6
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

// ES5
function foo() {
  var _this = this;

  setTimeout(function () {
    console.log('id:', _this.id);
  }, 100);
}
