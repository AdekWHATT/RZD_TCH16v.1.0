function Tabl() {
    let NumSek = +document.getElementById("kolSek").value
if (NumSek == 1) {
    document.getElementById("Out").innerHTML = "<img src='./img/1.png'>"
} else if (NumSek == 2) {
    document.getElementById("Out").innerHTML = "<img src='./img/3te.png'>"
} else {
    alert("ТЫ НИЧЕГО НЕ ВЫБРАЛ!!!")
}
}
