let a = 6;
let result = ++a + a + a++ + ++a + a;
/*
++a: Tăng giá trị của a lên 1 và sau đó sử dụng giá trị mới của a trong phép toán. Nếu a ban đầu là 6, thì sau ++a, giá trị của a sẽ là 7.
a++: Sử dụng giá trị hiện tại của a trong phép toán, sau đó tăng giá trị của a lên 1. Nếu a ban đầu là 6, thì sau a++, giá trị của a sẽ là 7, nhưng trong phép toán, vẫn sử dụng giá trị cũ của a.
*/