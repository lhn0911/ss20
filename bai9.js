let a = 5;
let b = "5";
console.log(a==b);  // toán tử '==' dùng để so sánh bằng giữa 2 hay nhiều phần tử thông qua giá trị
console.log(a===b); // toán tử '===' dùng để so sánh bằng giữa 2 hay nhiều phần tử thông qua giá trị và chặt chẽ với kiểu dữ liệu của chúng
console.log(a!=b);  //toán tử '!=' dùng để so sánh khác giữa 2 hay nhiều phần tử thông qua giá trị
console.log(a!==b); //toán tử '!==' dùng để so sánh khác giữa 2 hay nhiều phần tử thông qua giá trị và chặt chẽ với kiểu dữ liệu của chúng
/*Ví Dụ: a=5 kiểu dữ liệu Number, b ="5" kiểu dữ liệu String
+, Với toán tử '==' : a=5, b="5"(so sánh a==b. nếu đúng in ra true, sai in ra false)
+, Với toán tử '===': a=5, b="5"(so sánh a===b. In ra false vì a và b không cùng kiểu dữ liệu)
+, Với toán tử '!=' : a=5, b="5"(so sánh a!=b. nếu đúng in ra true, sai in ra false)
+, Với toán tử '!==': a=5, b= "5"(So sánh a!==b.In ra false vì a và b không cùng kiểu dữ liệu)
*/