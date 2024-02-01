/**
 * Webapp with Pagination
 */

/**
 * Deklaration der Variablen
 */
let index;
let lernender = undefined;

/**
 * Ausgabe zeigen
 */
function showUI(){
    //Identification
    let htmlObj = document.getElementById("identification");
    htmlObj.innerHTML =
        `id: ${lernender.studentid}<br>`+
        `Name: ${lernender.firstname}<br>`+
        `Vorname: ${lernender.lastname}<br>`+
        `Ausbildung: ${lernender.profession}`;

    //Lehrbetrieb
    htmlObj = document.getElementById("lehrbetrieb");
    htmlObj.innerHTML =
        `Firma: ${lernender.betrieb.firma}<br>`+
        `Kontakt: ${lernender.betrieb.kontakt}<br>`+
        `Email: ${lernender.betrieb.email}`;

    //Kurse - Berufskunde
    htmlObj = document.getElementById("berufskunde");
    //clear
    htmlObj.innerHTML = "";
    //set
    lernender.courses.berufskunde.forEach(modulid => {
        htmlObj.innerHTML += `${modulid}<br>`;
    });


    let fach = "ABU";
    if (lernender.BMS){
        fach = "BMS";
    }
    htmlObj = document.getElementById("allgemeinTitle");
    //clear
    htmlObj.innerHTML = "";
    //set
    htmlObj.innerHTML += " " + fach;

    //Kurse - Allgemein Bildung
    htmlObj = document.getElementById("allgemein");
    //clear
    htmlObj.innerHTML = "";
    //set
    let faecherListe = lernender.courses.allgemein;
    for (let i=0;i<faecherListe.length; i++){
        htmlObj.innerHTML += `${faecherListe[i]}<br>`;
    };

    //Index im Pagination-Element zeigen
    htmlObj = document.getElementById("showIndex");
    //clear
    htmlObj.innerHTML = "";
    //set
    htmlObj.innerHTML = index;
}


/**
 * Nächster Eintrag (Record) zeigen
 */
function showNext() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index eins kleiner als das Maximum ist
        if (lernendenListe.length-1 > index){
            //... erhöhe den index um 1
            index++;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    lernender = lernendenListe[index];
    //zeige den Eintrag
    showUI();
}

/**
 *  Vorhergehender Eintrag (Record) zeigen
 */
function showPrevious() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index grösser als das Minimum ist
        if (index > 0){
            //... vermindere den index um 1
            index--;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    lernender = lernendenListe[index];
    //zeige den Eintrag
    showUI();
}

//start app
//Falls der index nicht definiert ist ...
if (lernender === undefined){
    //... dann setze den index auf 0 (Anfang)
    index = 0;
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    lernender = lernendenListe[index];
    //zeige den Eintrag
    showUI();
}
