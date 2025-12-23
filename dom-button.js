// FUNGSI UBAH TEXT HANYA 1 button
function UbahText1() {
  let cek1 = document.getElementById("judul1").innerHTML;

  if (cek1 === "SELAMAT DATANG !") {
    const judulku0 = document.getElementById("judul1");
    judulku0.innerHTML = "BELAJAR DOM !";
  } else {
    const judulku1 = document.getElementById("judul1");
    judulku1.innerHTML = "SELAMAT DATANG !";
  }
}

// FUNGSI UBAH WARNA DENGAN COLOR INPUT DAN TOMBOL
function UbahWarna1() {
  let cekcolor1 = document.getElementById("pickcolor1").value;

  document.getElementById("judul2").style.color = cekcolor1;
}
