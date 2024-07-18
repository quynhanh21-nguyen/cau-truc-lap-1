//In ra 100 chữ 'Hello'

/*for (let i=1; i<=100; i++){
    console.log("hello");
}*/

//Nhập vào N từ prompt. In ra N lần chữ 'Hello'
/*let n = +prompt("Nhập vào số n");
for (let i=1; i<= n; i++){
    console.log("hello");
}*/

//In ra cac số từ 1 đến 1000;
/*for (i=1; i<=1000; i++){
    console.log(i);
}*/

//In ra cac số từ a đến b;
/*let a = +prompt("Nhập vào số a");
let b = +prompt("Nhập vào số b");
if (a<=b){
for (let i=a; i<= b; i++){
    console.log(i);
}
} else {
    alert("Nhập lại a lớn hơn b");
}*/

//In ra cac số từ a đến b, mỗi số trong 1 thẻ <h1>;
/*let a = +prompt("Nhập vào số a");
let b = +prompt("Nhập vào số b");
if (a<=b){
for (let i=a; i<= b; i++){
document.write("<h1>" + i + "</h1>");
}
} else {
    alert("Nhập lại a lớn hơn b");
}*/

//In ra các số chẵn tu a đến b
/*let a = +prompt("Nhập vào số a");
let b = +prompt("Nhập vào số b");
if (a<=b){
for (let i=a; i<= b; i++){
if (i%2==0){
    console.log(i)
}
}
} else {
    alert("Nhập lại a lớn hơn b");
}*/

//In ra các số từ a đến b số chẵn trong h2, so le trong h1;
/*let a = +prompt("Nhập vào số a");
let b = +prompt("Nhập vào số b");
if (a<=b){
for (let i=a; i<= b; i++){
if (i%2==0){
    document.write("<h2>" + i + "</h2>")
} else{
    document.write("<h1>" + i + "</h1>")
}
}
} else {
    alert("Nhập lại a lớn hơn b");
}*/

//Tính tích các số từ a - b
/*let a = +prompt("Nhập vào số a");
let b = +prompt("Nhập vào số b");
let tich = 1;
if (a <= b) {
    for (let i = a; i <= b; i++) {
        tich = tich * i;
    }
    alert(tich)
} else {
    alert("Nhập lại a lớn hơn b");
}*/

//Tính Tổng các số chia 5 dư 2 từ a đến b
/*let a = +prompt("Nhập vào số a");
let b = +prompt("Nhập vào số b");
let tong = 0;
if (a <= b) {
    for (let i = a; i <= b; i++) {
        if (i % 5 == 2) {
            tong = tong + i;
        }
    }
    alert(tong);
} else {
    alert("Nhập lại a lớn hơn b");
}*/

//Đếm các số chia 5 dư 2 từ a đến b
/*let a = +prompt("Nhập vào số a");
let b = +prompt("Nhập vào số b");
let count = 0;
if (a <= b) {
    for (let i = a; i <= b; i++) {
        if (i % 5 == 2) {
            count = count + 1;
        }
    }
    alert(count);
} else {
    alert("Nhập lại a lớn hơn b");
}*/

//In ra màn hình 0, 5 ,10,15, 20, ... 50.
/*for (i=0; i<=50; i++){
    if (i%5==0){
        console.log(i)
    }
}*/

//In ra  màn hình 10, 9, 8, 7, 6, ... 0
/*for (i=10; i>=0; i--){
    console.log(i)
}*/

//In ra màn hình 50, 45, 40, .. 0
/*for (i=50; i>=0; i--){
    if (i%5==0){
        console.log(i)
    }
}*/

//In ra bảng cửu chương 5
for (i=1; i<=10; i++){
    tich = 5*i;
    console.log("5 * " + i + " = " + tich);
}