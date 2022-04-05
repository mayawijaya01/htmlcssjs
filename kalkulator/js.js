//untuk layar input output
function insert(num) { //fungsi insert untuk menangkap semua tombol dimasukan
    document.form.textView.value = document.form.textView.value + num
}
function c() {
    document.form.textView.value = "";
}
function del() {
    var x = document.form.textView.value;
    document.form.textView.value= x.substring(0,x.length-1)
}
function equal() {
    var x = document.form.textView.value;
    if (x==""){
        alert("Masukan angka terlebih dahulu");
    }
    document.form.textView.value = eval(x); //eval untuk menjumlahkan angka yang masuk

}