//navbar
function menuTogle() {
  let navbar = document.getElementById('nav');
  navbar.classList.toggle('show');
}
//catatan : mengambil id nav lalu membuat element yang memmiliki id nav di tambahkan sebuah
// class "show" untuk memunculkan menu dari navbar

//scroll

function scrolling(value) {
  let target = document.getElementById(`click${value}`);
  target.scrollIntoView({
    behavior: 'smooth',
  });
}
// catatan: setiap element yang memiliki fungsi scrolling akan di berikan value lalu value tersebut di tangkap
// untuk mengakses lalu ambil id target dan value function tersebut , ssaat elemet di klik akan mengarah ke target lalu memberikan scroll smoth

//from pembelian

let from = document.querySelector('.from');
let cardFrom = from.querySelectorAll('.card-from');

document.querySelectorAll('.main-container-card .card').forEach(function (menu) {
  menu.onclick = () => {
    from.style.display = 'flex';
    let name = menu.getAttribute('data-name');
    cardFrom.forEach(function (see) {
      let target = see.getAttribute('data-target');
      if (name == target) {
        see.classList.add('active');
      }
    });
  };
});

//catatan: mengaambil atribute dataname  dan data target jika data target value nya sama dengan data name yang aktif maka akan memunculkan
//  element yang memiliki class from dan card-from

//close

cardFrom.forEach(function (close) {
  close.querySelector('.close').onclick = () => {
    close.classList.remove('active');
    from.style.display = 'none';
  };
});

//catatan: mengambil clas close lalu hapus yang sedang aktif dan buat display none

//wa

function buy() {
  const target = 'https://api.whatsapp.com/send/?phone=+6282122394638&text&app_absent=0';
  window.location.href = target;
}

// button yang memiliki fungsi buy akan mengarahkan ke whatsaap
