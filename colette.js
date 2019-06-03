const tabMinutes = [
    {minute: ["00", "01", "02", "03", "04"], classeM: []},
    {minute: ["05", "06", "07", "08", "09"], classeM: [".cinqMinute"]},
    {minute: ["10", "11", "12", "13", "14"], classeM: [".dixMinute"]},
    {minute: ["15", "16", "17", "18", "19"], classeM: [".et", ".quart"]},
    {minute: ["20", "21", "22", "23", "24"], classeM: [".vingt"]},
    {minute: ["25", "26", "27", "28", "29"], classeM: [".vingt", ".tiret", ".cinqMinute"]},
    {minute: ["30", "31", "32", "33", "34"], classeM: [".etdemi"]},
    {minute: ["35", "36", "37", "38", "39"], classeM: [".vingt", ".tiret", ".cinqMinute"]},
    {minute: ["40", "41", "42", "43", "44"], classeM: [".vingt"]},
    {minute: ["45", "46", "47", "48", "49"], classeM: [".le", ".quart"]},
    {minute: ["50", "51", "52", "53", "54"], classeM: [".dixMinute"]},
    {minute: ["55", "56", "57", "58", "59"], classeM: [".cinqMinute"]},
];

const tabHeures = [
    {heure: "00", classeH: ".douze"},
    {heure: "01", classeH: ".une"},
    {heure: "02", classeH: ".deux"},
    {heure: "03", classeH: ".trois"},
    {heure: "04", classeH: ".quatre"},
    {heure: "05", classeH: ".cinqHeure"},
    {heure: "06", classeH: ".six"},
    {heure: "07", classeH: ".sept"},
    {heure: "08", classeH: ".huit"},
    {heure: "09", classeH: ".neuf"},
    {heure: "10", classeH: ".dixHeure"},
    {heure: "11", classeH: ".onze"},
    {heure: "12", classeH: ".douze"},
    {heure: "13", classeH: ".une"},
    {heure: "14", classeH: ".deux"},
    {heure: "15", classeH: ".trois"},
    {heure: "16", classeH: ".quatre"},
    {heure: "17", classeH: ".cinqHeure"},
    {heure: "18", classeH: ".six"},
    {heure: "19", classeH: ".sept"},
    {heure: "20", classeH: ".huit"},
    {heure: "21", classeH: ".neuf"},
    {heure: "22", classeH: ".dixHeure"},
    {heure: "23", classeH: ".onze"},

];

$(document).ready(function () {
    const genererAffichageColette = function (momentHeure, momentMinute) {
        momentHeure = momentHeure || moment().format("HH");
        momentMinute = momentMinute || moment().format("mm");
        $("#heureNumerique").html("(" + momentHeure + ":" + momentMinute + ")");
        showTimeInColette(momentHeure, momentMinute);
    };

    /**
     * Permet de faire des tests grossier sur l'algo
     */
    // showTimeInColette("14", "58");
    // console.log("14:58", $(".blanc").length == 10);
    // showTimeInColette("14", "59");
    // console.log("14:59", $(".blanc").length == 11);
    // showTimeInColette("20", "16");
    // console.log("20:16", $(".blanc").length == 8);

    genererAffichageColette();
    setInterval(function () {
        genererAffichageColette();
    }, 1000);

});

function showTimeInColette(momentHeure, momentMinute) {

    $(".blanc").removeClass("blanc");

    let momentHeureInt = parseInt(momentHeure);
    let momentMinuteInt = parseInt(momentMinute);

    $(".ilestheure").addClass("blanc");

    if (momentHeureInt > 1 || momentHeureInt === 0) {
        $(".s").addClass("blanc");
    }

    for (let indexHeure = 0; indexHeure < tabHeures.length; indexHeure++) {
        if (momentHeure !== tabHeures[indexHeure].heure) continue;
        let indexOfHeure = tabHeures.indexOf(tabHeures[indexHeure]);
        AddClassAccordingToCurrentHour(tabHeures, indexOfHeure, momentMinuteInt);
        break;
    }
    for (let indexCinqMinutes = 0; indexCinqMinutes < tabMinutes.length; indexCinqMinutes++) {
        let indexOfMinute = tabMinutes[indexCinqMinutes].minute.indexOf(momentMinute);
        if (indexOfMinute === -1) continue;
        AddClassAccordingToCurrentFiveMinutes(tabMinutes, indexCinqMinutes);
        AddClassAccordingToCurrentMinute(indexOfMinute);
        break;
    }

}

function AddClassAccordingToCurrentHour(tabHeures, indexOfHeure, momentMinuteInt) {
    let estUneHeureSupplementaire = momentMinuteInt > 34;
    indexOfHeure = estUneHeureSupplementaire ? indexOfHeure + 1 : indexOfHeure;
    indexOfHeure = indexOfHeure === 24 ? 0 : indexOfHeure;

    $(tabHeures[indexOfHeure].classeH).addClass("blanc");

    if (estUneHeureSupplementaire) {
        $(".moins").addClass("blanc");
    }
}

function AddClassAccordingToCurrentFiveMinutes(tabMinutes, iCinqMinutes) {
    for (let i = 0; i < tabMinutes[iCinqMinutes].classeM.length; i++) {
        let classeAAfficher = tabMinutes[iCinqMinutes].classeM[i];
        $(classeAAfficher).addClass("blanc");
    }
}

function AddClassAccordingToCurrentMinute(indexOfMinute) {
    let compteur = indexOfMinute > 0 ? indexOfMinute : 4;
    for (let j = 1; j <= compteur; j++) {
        let selector = $(".point" + j);
        if (indexOfMinute > 0) {
            selector.addClass("blanc");
        }

    }
}
