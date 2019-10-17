function sleep(interval){
  return new Promise(resolve => setTimeout(resolve,interval))
} 
async function func(number,times,interval){
  var printNumber = number;
  let array = Array(times).fill(0); //生成以0填充长度为times的数组
  for(item of array){ //以遍历数组来进行循环
    await sleep(interval);
    console.log(printNumber--)
  }
}
__________________________________________________________________________
for(var i = 0;i<10;i++){
  setTimeout(console.log(i),1000)
}
//打印 0-9不延时

for(var i = 0;i<10;i++){
  setTimeout('console.log(i)',1000)
}
//延时一秒后，打印10个10 且为字符串类型

 function myFun(i) {
   alert(1);
 }
 setTimeout('myFun(1)', 2000); //延时2秒然后弹出1.说明有字符串且字符串是一个表达式/函数会先执行计算然后输出结果（zifuchuan）
 
for (let i=1; i<=5; i++) { 
    setTimeout( function timer() {
        console.log(i);
    }, i*1000 );
}//隔一秒打印一次
