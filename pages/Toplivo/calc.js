let sekA1, sekA2, resultA, sekB1, sekB2, resultB, udelVes, kgSekA, kgSekB

func1 = () => {

    sekA1 = +document.getElementById("sekA1").value


    sekA2 = +document.getElementById("sekA2").value


    resultA = ((sekA1 + sekA2) / 2);

    document.getElementById("outA").innerHTML = resultA + " л.'А'";
}

func2 = () => {

    sekB1 = +document.getElementById("sekB1").value


    sekB2 = +document.getElementById("sekB2").value


    resultB = ((sekB1 + sekB2) / 2);

    document.getElementById("outB").innerHTML = resultB + " л.'Б'";
}

raschetUdel = () => {

    udelVes = +document.getElementById("udel").value

    kgSekA = Math.round(resultA * udelVes)


    document.getElementById("kgA").innerHTML = kgSekA + " кг. сек А"

    kgSekB = Math.round(resultB * udelVes)

    document.getElementById("kgB").innerHTML = kgSekB + " кг. сек Б"

}