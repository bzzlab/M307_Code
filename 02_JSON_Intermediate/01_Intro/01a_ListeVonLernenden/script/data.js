const professionList = ["Applikationsentwickler", "IMS",
    "Mediamaitker", "Recyclist", "Detailhandel", "Kaufmann"];

let lernendenListe =
    [
        {
            "studentid": 101,
            "firstname": "Hans",
            "lastname": "Muster",
            "BMS": true,
            "profession": professionList[2],
            "betrieb": {
                "firma": "Beispiel AG",
                "kontakt": "Frau Sowieso",
                "email": "anna.sowieso@beispiel.ch"
            },
            "courses": {
                "berufskunde": ["M286", "M287", "M288", "usw."],
                "allgemein": ["Franz", "Deutsch", "Mathe", "usw."]
            }
        },{
            "studentid": 102,
            "firstname": "Fritzli",
            "lastname": "Muster",
            "BMS": true,
            "profession": professionList[5],
            "betrieb": {
                "firma": "Beispiel AG",
                "kontakt": "Herr Sowieso",
                "email": "donald.sowieso@beispiel.ch"
            },
            "courses": {
                "berufskunde": ["FiBu 1", "RW Basics", "OR", "usw."],
                "allgemein": ["Franz", "Deutsch", "Mathe", "usw."]
            }
        },{
            "studentid": 103,
            "firstname": "Anna",
            "lastname": "Muster",
            "BMS": true,
            "profession": professionList[1],
            "betrieb": {
                "firma": "Kantonsschule Hottingen",
                "kontakt": "Herr Rektor",
                "email": "herr.rektor@ksh.ch"
            },
            "courses": {
                "berufskunde": ["M183", "M150", "M152", "usw."],
                "allgemein": ["Franz", "Deutsch", "Mathe", "usw."]
            }
        }
    ]
