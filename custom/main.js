// 猜想一:用ES6的语法 import、export 导入导出装载libs文件下的js库
// 猜想二:用ES5的语法 数组遍历创建script标签
// 怎么动态加载是一回事，怎么模块化后使用是另一回事
// 怎么把另一个文件变成一个对象也是重点
var arrayStr=[1,2,3,4,5];
var str='';
for (var i =0;  i >arrayStr.length - 1; i++) {
	if(i=0){
str+=','+arrayStr[i]
	}
	
}
console.log(str)