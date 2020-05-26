// //*   匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。* 等价于{0,}。
// //+   匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。
// //?   匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 、 "does" 中的 "does" 、 "doxy" 中的 "do" 。? 等价于 {0,1}。



// // function checkPhoneNumber(phoneStr){
// //     let str = phoneStr.toString();
// //     console.log(str);
// //     let pattern = /^[0-9]+\+$/;
// //     if(str.match(pattern)){
// //         return true
// //     }else{
// //         return false;
// //     }
// // }
// // console.log(checkPhoneNumber("1311990993"))

// // var str = "Chapter ";
// // var pattern = /\bCha/
// // var pattern1 = /ter\b/

// // console.log(str.match(pattern));
// // console.log(str.match(pattern1));

// //非捕获元之一  ?: ,?= ,?!  
// //还有两个非捕获元是 ?= 和 ?!，这两个还有更多的含义，
// //前者为正向预查，在任何开始匹配圆括号内的正则表达式模式的位置来匹配搜索字符串，
// //后者为负向预查，在任何开始不匹配该正则表达式模式的位置来匹配搜索字符串。

// // var str = "http://www.runoob.com:80/html/html-tutorial.html";
// // var patt1 = /(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/;
// // arr = str.match(patt1);
// // console.log(arr);

// var str = "fff";
// // var pattern = /^[0-9]{2,}$/      // \d 等价于 [0-9]  

// //检验数字的表达式
// // var pattern = /^\d*$/ 
// // 非零开头的最多带两位小数的数字
// // var pattern = /^([1-9][0-9]*)+(\.[0-9]{1,2})?$/
// // 带1-2位小数的正数或负数
// // var pattern = /^(\-)?\d+(\.\d{1,2})$/
// //正数、负数、和小数
// // var pattern = /^(\-)?[0-9]+(\.[0-9]{0,})?$/     //输入正则匹配的时候一定不要输入空格
// // 有两位小数的正实数
// // var pattern = /^(\d)+(\.\d{2})/
// //浮点数
// // var pattern = /^\d+(\.\d+)?$/

// //校验字符的表达式
// //汉字
// // var pattern = /^[\u4e00-\u9fa5]+$/
// //由26个英文字母组成的字符串
// // var pattern = /^[A-Za-z]{0,}$/
// //由数字、26个英文字母或者下划线组成的字符串
// // var pattern = /^\w+$/;

// //特殊需求表达式
// var pattern = /^fff|a{1,}$/;
// console.log(str.match(pattern));

// var s = "JavaScript 中国";
// s = escape(s);
// console.log(s);
// s = unescape(s);
// console.log(s);

// var a  = "11.2";
// var b = "3.2"
// var c = Number(a) - Number(b);
// console.log(c);

let a = {};

if(a){
    console.log(111)
}