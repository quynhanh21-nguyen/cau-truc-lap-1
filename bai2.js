//Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
/*for (i=1; i<100; i++){
    console.log(i)
}
if (i=99){
    alert("đã hoàn thành")
}*/

//Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.
/*let temp = +prompt("Nhập nhiệt độ hiện tại");
if (temp>=100){
    alert("giảm nhiệt độ");
}
if (temp<=20){
    alert("tăng nhiệt độ");
}*/

//Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
/*let f0=1;
console.log(f0)
let f1=1;
console.log(f1)
let fi=1;
for (i=2; i<20; i++){
    f0=f1;
    f1=fi;
    fi=f0+f1;
    console.log(fi)
}*/

//Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
/*let f0=1;
let f1=1;
let fi=1;
for (i=2; i<20; i++){
    f0=f1;
    f1=fi;
    fi=f0+f1;
    if (fi%5==0){
        break;
    }
}
console.log(fi);*/

//Tính tổng của 20 số đầu tiên trong dãy fibonacci.
/*let f0=1;
let f1=1;
let fi=1;
let tong = f0 + f1;
for (i=2; i<20; i++){
    f0=f1;
    f1=fi;
    fi=f0+f1;
    tong=tong + fi;
}
console.log(tong);*/

//Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
/*let tong = 0;
let count = 0;
for (i=0; i<=10000; i++){
if (i%7==0){
    console.log(i)
    tong = tong + i;
    count = count + 1;
}
if (count == 30){
    break;
}
}
console.log(tong)*/

//Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".
/*for (i=1; i<=100; i++){
    if (i%3==0&&i%5==0){
        console.log("fizzbuzz")
        continue;
    }
    if (i%3==0){
        console.log("fizz")
        continue;
    }
    if (i%5==0){
        console.log("buzz")
        continue;
    }
  
    console.log(i)
}*/
