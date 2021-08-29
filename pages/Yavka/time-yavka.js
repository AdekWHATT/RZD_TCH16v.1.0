function Func1() {
    let uchastok = +document.getElementById("uchastki").value
    let teplovoz = +document.getElementById("teplovoz").value

    
    
    
    if (uchastok == 1 && teplovoz == 1) {
        document.getElementById("outNP").innerHTML = "<img src='./img/big_kan1sek.png'>"
        

    } else if (uchastok == 2 && teplovoz == 1) {

        document.getElementById("outNP").innerHTML = "от Явки до НП  + 15 мин."
        document.getElementById("outOP").innerHTML = " от НП до ОК.ПР  + 20 мин."
        document.getElementById("outKP").innerHTML = " от ОК.ПР до КП + 3 мин."
        document.getElementById("Vsego").innerHTML = " Всего от явки до КП 38 мин. От КП до отправления с поездом 65 мин."

    }
    else if (uchastok == 3 && teplovoz == 1) {
        document.getElementById("outNP").innerHTML = " от Явки до НП  + 15 мин."
        document.getElementById("outOP").innerHTML = " от НП до ОК.ПР  + 20 мин."
        document.getElementById("outKP").innerHTML = " от ОК.ПР до КП + 3 мин."
        document.getElementById("Vsego").innerHTML = " Всего от явки до КП 38 мин. От КП до отправления с поездом 65 мин."
    } else {
}
}