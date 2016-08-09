//阻塞代码实例
// var fs = require("fs");

// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("程序执行结束!");



//非阻塞代码实例
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err){
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});

console.log("程序执行结束!");


// 输出全局变量 __filename 的值
console.log( __filename );

// 输出全局变量 __dirname 的值
console.log( __dirname );