// // // Bt1 p1-1
function timSochiahetcho2(c) {
  if (c % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(timSochiahetcho2(10));

// // // Bt2 p1-1
function timSochiahetcho3(e) {
  if (e % 3 == 0) {
    return "Chia hết cho 3";
  } else {
    return "Không chia hết cho 3";
  }
}
console.log(timSochiahetcho3(18));

// // // bt3 p1-1
let a = 4,
  b = 12;
function tongHaiSo() {
  return a + b;
}
console.log(tongHaiSo());
function layPhanDu() {
  return b % a;
}
console.log(layPhanDu());
function layPhanNguyen() {
  return b / a;
}
console.log(layPhanNguyen());

// // // bt4 p1-1
let firstname = "Viet",
  lastname = "Vo ",
  Middlename = "Nguyen Minh ";
console.log(lastname + Middlename + firstname);

// // //  bt5 p1-1
function soSanhHaiSo(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else if (a == b) {
    return 0;
  }
}
console.log(soSanhHaiSo(5, 5));

// // //  bt6 p1-1
let chuoiKyTu = "happy news year";
console.log(chuoiKyTu.length);
console.log(chuoiKyTu.indexOf("y"));
console.log(chuoiKyTu.lastIndexOf("y"));
console.log(chuoiKyTu.replace("happy", "go"));

// // // bt1 p1-2
function diemCuaHocSinh(f) {
  if (f > 8) {
    return "Excellence";
  } else if (f >= 7 && f < 8) {
    return "Good";
  } else if (f >= 4 && f < 6) {
    return "Good";
  } else if (f < 4) {
    return "Bad";
  }
}
console.log(diemCuaHocSinh(7));

// // bt2 p1-2

function titleCase(string) {
  let sentence = string.toLowerCase().split(" ");
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(" ");
}
let result = titleCase("HOC lập TRình JavAScript");
console.log(result);

// // bt3 p1-2
let str = "8";
let newstr = str.padStart(2, 0);
console.log(newstr);

// bt4 p1-2
function getmanin(main) {
  let index = main.indexOf("@");

  let result2 = main.substring(index + 1);
  return result2;
}
console.log(getmanin("learning@cfdcircle.vn"));

// bt5 p1-2
function pathUrl(url1) {
  let geturl = url1.split(" ");
  return geturl.join("-");
}

console.log(pathUrl("javascript cho nguoi moi bat dau"));

// bt1 p2-1
let resultx = 0;
for (i = 0; i < 10; i++) {
  resultx += i;
}
console.log(resultx);

// bt2 p2-1
function sochanne() {
  let m = 0;
  let mangmoi11 = [];
  while (m <= 20) {
    m++;
    if (m % 2 == 0) {
      mangmoi11.push(m);
    }
  }
  return mangmoi11;
}
console.log(sochanne());

// bt3 p2-1
let mangbatki = ["mot", "hai", "ba", "bon", "nam"];
let mangdacut = mangbatki.splice(-2);
console.log(mangbatki);

// bt4 p2-1
let khoahocCfd = ["Newbie", "reponsive", "react js"];
let dodai = khoahocCfd.length;
console.log(dodai);

for (let j = 0; j < khoahocCfd.length; j++) {
  console.log(j);
}

console.log(khoahocCfd[2]);

let chuoikhoahoc = khoahocCfd.join(", ");
console.log(chuoikhoahoc);

khoahocCfd.push("rps", "raj");
console.log(khoahocCfd);

// bt5 p2-1
let num = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;
for (let f = 0; f < num.length; f++) {
  sum += num[f];
}

console.log(sum);

// bt1 p2-2
function randomNumber(a, b) {
  let number6 = Math.random() * (b - a);
  return Math.round(number6) + a;
}
console.log(randomNumber(1, 50));

// bt2 p2-2
// setTimeout(function () {
//   alert("Xin chao");
// }, 4000);

// bt3 p2-2
setInterval(function dongho() {
  let event = new Date();
  document.getElementsByTagName("h1")[0].innerText = event.toLocaleString();
}, 1000);

// bt4 p2-2

let cfd = [
  {
    name: "newbie",
    price: 100,
    date: "25/1/2022",
  },
  {
    name: "reponsive",
    price: 200,
    date: "25/1/2022",
  },
  {
    name: "reactjs",
    price: 100,
    date: "25/1/2022",
  },
  {
    name: "master",
    price: 100,
    date: "25/1/2022",
  },
];

console.log(cfd);
cfd.forEach(function (pricecfd1) {
  console.log(pricecfd1.price);
});

let result5 = cfd.reduce(function (total, priceone) {
  return total + priceone.price;
}, 0);
console.log(result5);

// bt5 p2-2
let car = {
  name: "abc",
  color: "blue",
  price: 2000,
};
console.log(car.hasOwnProperty("speed"));

// bt1 p3-1
let cfdcircle = ["newbie", "reponsive", "react js", "master"];
let soluong = cfdcircle.length;
console.log(soluong);
for (let k = 0; k < cfdcircle.length; k++) {
  console.log(k);
}
console.log(cfdcircle[2]);

let chuoitenkhoahoc = cfdcircle.join(", ");
console.log(chuoitenkhoahoc);

// bt2 p3-1
let num1 = [10, 15, 20, 25, 30];
let ketqua7 = num1.reduce(function (sumnum1, Value) {
  return sumnum1 + Value;
});
console.log(ketqua7);

// bt3 p3-1
function thamso(array, character) {
  return array.join(character);
}
console.log(thamso(num1, "-"));

// bt4 p3-1
let user = {
  ten: "vu",
  tuoi: 18,
  place: "vietnam",
};
let banbe = ["khoa", "vu", "hieu"];
console.log(banbe);
console.log(banbe[2]);
console.log(user.place);

banbe.push("han");
console.log(banbe.length);

// bt5 p3-1
let phantu = [2, 4, 5, 7, 32, 67, 30, 100];
let phantumoi = phantu.map(function (item) {
  return item * 2;
});
console.log(phantumoi);

// bt1 p3-2

function thamsomang() {
  let mangmoi11 = [1, 2, 3, 4, 5, 6];
  return Math.round(Math.random() * mangmoi11.length);
}
console.log(thamsomang());

// bt2 p3-2
let student = {
  name: "bao",
  age: "18",
};
student.name = "hai";
delete student.age;
console.log(student);

// bt3 p3-2
let mangbt3 = [
  {
    name: "linh",
    dtb: 4,
  },
  {
    name: "minh",
    dtb: 6,
  },
  {
    name: "kinh",
    dtb: 7,
  },
];

let ketquadiem = mangbt3.filter(function (diemtrungbinh) {
  return diemtrungbinh.dtb > 5;
});
console.log(ketquadiem);

// bt4 p3-2
let luong = {
  ha: 100,
  thao: 200,
  kha: 300,
};

let changeluong = Object.values(luong);
let tongluong = changeluong.reduce(function (total, value) {
  return total + value;
}, 0);
console.log(tongluong);

// bt5 p3-2
let mangbt5 = [10, 11, 12, 13, 25, 35, 45, 55];
let sosanh = mangbt5.find(function (lonhon20) {
  return lonhon20 > 20;
});
console.log(sosanh);

// bt6 p3-2
let diemso = [5, 7, 8, 9, 3];
function checkdiem(diemso) {
  return diemso >= 5;
}
function tongket() {
  if (diemso.every(checkdiem) == true) {
    return "Đủ điểm đỗ";
  } else {
    return "Không đủ điểm đỗ";
  }
}
console.log(tongket());
