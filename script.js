function f1() {
    //A
    var pays = document.getElementById("pays").value;

    //B
    var capitale = document.getElementById("capitale").value;

    //C
    var tableau = document.querySelector("table");

    //D
    var ligne = document.createElement("tr");

    //E H
    var colPays = document.createElement("td");
    colPays.innerText = pays.toUpperCase();

    //F H
    var colCapitale = document.createElement("td");
    colCapitale.textContent = capitale.charAt(0).toUpperCase() + capitale.slice(1).toLowerCase();

    //G 
    ligne.appendChild(colPays);
    ligne.appendChild(colCapitale);

    //I
    tableau.appendChild(ligne);

}
