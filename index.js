function number() {
  var n = document.getElementById("n").value;
  var result = document.getElementById("result");

  var i = 2;
  var j = 2;
  var count = 0;

  // tạo mới sau mỗi lần nhấn
  result.innerHTML = `Các số nguyên tố : `;

  //Kiểm tra nếu n < 2 thì lặp tức kết thúc do 1 và 0 không phải SNT
  if (n <= 1) {
    alert(` Nhập lại : ${n} không phải số nguyên tố`);
    return;
  } else {
    while (i <= n) {
      count = 1;
      j = 2;

      //Vòng lặp kiểm tra i có phải SNT không
      // Gán biến coutn = 0 nếu không phải SNT, ngược lại tăng j thêm 1 và tiếp tục kiểm tra
      while (j <= i / 2) {
        if (i % j === 0) {
          count = 0;
          break;
        }
        j++;
      }
      //Xuất giá trị của i, tăng i thêm 1 và tiếp tục kiểm tra
      if (count === 1) {
        result.innerHTML += `${i} `;
      }
      i++;
    }
  }
}
