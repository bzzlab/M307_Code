/**
 * Webapp with Pagination
 */

/**
 * Deklaration der Variablen
 */
let index;
let lernender = undefined;
let maxStudents = undefined;
let professionList = undefined;

//start app
function init() {
//Falls der index nicht definiert ist ...
    if (lernender === undefined) {//??
        //... dann setze den index auf 0 (Anfang)
        index = 0;//??
        //speichere wieder den index im Browser-Speicher
        localStorage.setItem("index", index);//??

        //get professions from server
        getProfessions().then(data => {//??
            professionList = data;//??
        });//??

        //get students from server
        getStudents().then(data => {//??
            //set student by index
            let stundent = data[index];//??
            //set max students
            maxStudents = data.length;//??
            console.log(`init -> data-length: ${data.length}`);//??
            console.log(stundent);//??
            //show UI with student
            showUI(stundent)//??
        });//??

    }//??
}

/**
 * Show UI
 * @param lernender
 */
function showUI(lernender) {
    //Identification
    let htmlObj = document.getElementById("identification");//??
    htmlObj.innerHTML =//??
        `id: ${lernender.student_id}<br>` +//??
        `Name: ${lernender.firstname}<br>` +//??
        `Vorname: ${lernender.lastname}<br>` +//??
        `Ausbildung: ${professionList[lernender.profession]}`;//??

    //set item index in pagination
    htmlObj = document.getElementById("itemIndex");//??
    htmlObj.innerHTML = index;//??

    //Lehrbetrieb
    htmlObj = document.getElementById("lehrbetrieb");//??
    htmlObj.innerHTML =//??
        `Firma: ${lernender.betrieb.firma}<br>` +//??
        `Kontakt: ${lernender.betrieb.kontakt}<br>` +//??
        `Email: ${lernender.betrieb.email}`;//??

    //Kurse - Berufskunde
    htmlObj = document.getElementById("berufskunde");//??
    htmlObj.innerHTML ="";//??
    lernender.courses.berufskunde.forEach(modulid => {//??
        htmlObj.innerHTML += `Modul: ${modulid}<br>`;//??
    });//??

    //ABU oder BMS
    let fach = "ABU-Fach";//??
    if (lernender.BMS) {//??
        fach = "BMS-Fach";//??
    }//??

    //Kurse - Allgemein Bildung
    htmlObj = document.getElementById("allgemein");//??
    htmlObj.innerHTML ="";//??
    let faecherListe = lernender.courses.allgemein;//??
    for (let i = 0; i < faecherListe.length; i++) {//??
        htmlObj.innerHTML += `${fach}: ${faecherListe[i]}<br>`;//??
    }//??
}

/***
 * Daten Lernender lesen
 */


function showNext() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");//??
    if (index < maxStudents-1) {//??
        index++;//??
    } else {//??
        index = 0;//??
    }//??
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);//??
    //zeige den Eintrag
    getStudents().then(data => {//??
        let lernender = data[index];//??
        showUI(lernender)//??
    });//??
}

/**
 *  Vorhergehender Eintrag (Record) zeigen
 */
function showPrevious() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");//??
    //Falls der index nicht definiert ist ...
    if (0 < index) {//??
        index--;//??
    } else {//??
        index=maxStudents-1;//??
    }//??
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);//??
    //zeige den Eintrag
    getStudents().then(data => {//??
        let lernender = data[index];//??
        console.log(lernender);//??
        showUI(lernender)//??
    });//??
}


