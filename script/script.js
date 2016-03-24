/**
 * Created by Dmitriy on 21.03.2016.
 */
    alert("Первое задание");
    var str=prompt("Введите через пробел число и степень","2 3");
    var arr=str.split(' ',5)
    var x=arr[0];
    var n=arr[1];
    if(n>0&&n<100) {
        console.log("Обычный метод " + pow(x, n));
        console.log("Рекурсивный метод " + pow_rec(x, n));

    }else{
        alert("Неверный ввод")
    }

/*----------------------*/

    alert("Второе задание");
var bar = new Array(5);

for(var i = 0; i < bar.length; i++)
    bar[i] = prompt("Введите последовательно 5 имен","Вася");

var chek=false;

var find_name=prompt("Введите искомое имя","Вася");
    for(var i=0;i<5;i++){
    if(find_name==bar[i]) {
        alert("Добро пожаловать: " + bar[i]+"!");
        chek=true;
        break;
           }
    }
if(!chek)
    alert("Такого пользователя нет!");

/*--------------------------*/


function pow(x,n){
    var power=1;
    for (var i = 0; i < n; i++)
        power*=x;
    return power;
}



function pow_rec(x,n){
        if (n != 1) {
            return x * pow_rec(x, n - 1);
        } else {
      return x;
        }
}
