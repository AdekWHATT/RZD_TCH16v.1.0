function Tabl() {
    let NumSek = +document.getElementById("kolSek").value
if (NumSek == 1) {
    document.getElementById("Out").innerHTML = "<img src='./img/smenanaputh.jpg'>"
} else if (NumSek == 2) {
    document.getElementById("Out").innerHTML = "<img src='./img/smenavdepo.jpg'>"
} else {
    alert("ТЫ НИЧЕГО НЕ ВЫБРАЛ!!!")
}
}
