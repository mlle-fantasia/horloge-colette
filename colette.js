$(document).ready(function(){
    afficherHeure();
    setInterval(afficherHeure, 1000);
});

function afficherHeure(){


    $("#heureNumerique").html("("+moment().format("HH:mm")+")");

    $(".ilestheure").addClass("blanc");

    moment().format("H")> "1" ||  moment().format("H")=== "0"? $(".s").addClass("blanc"): $(".s").removeClass("blanc");

    let tabHeures = [
        {heure:"01", class:".une"},
        {heure:"02", class:".deux"},
        {heure:"03", class:".trois"},
        {heure:"04", class:".quatre"},
        {heure:"05", class:".cinqHeure"},
        {heure:"06", class:".six"},
        {heure:"07", class:".sept"},
        {heure:"08", class:".huit"},
        {heure:"09", class:".neuf"},
        {heure:"10", class:".dixHeure"},
        {heure:"11", class:".onze"},
        {heure:"00", class:".douze"},
    ];
    let tabMinutes = [
        {minute:["05","06","07","08","09"], class:[".cinqMinute"]},
        {minute:["10","11","12","16","14"], class:[".dixMinute"]},
        {minute:["15","16","17","18","19"], class:[".et", ".quart"]},
        {minute:["20","21","22","23","24"], class:[".vingt"]},
        {minute:["25","26","27","28","29"], class:[".vingt", ".tiret", ".cinqMinute"]},
        {minute:["30","31","32","33","34"], class:[".etdemi"]},
        {minute:["35","36","37","38","39"], class:[".vingt", ".tiret", ".cinqMinute"]},
        {minute:["40","41","42","43","44"], class:[".vingt"]},
        {minute:["45","46","47","48","49"], class:[".le",".quart"]},
        {minute:["50","51","52","53","54"], class:[".dixMinute"]},
        {minute:["55","56","57","58","59"], class:[".cinqMinute"]},
    ];

    for (let i = 0 ; i < tabHeures.length ; i++){
        let heure = tabHeures[i];
        if(moment().format("HH")=== heure.heure ){
            $(heure.class).addClass("blanc");
            moment().format("m") > "35" ? $(".moins").addClass("blanc"): $(".moins").removeClass("blanc");

            for (let i = 0 ; i < tabMinutes.length ; i++){
                let minute = tabMinutes[i];
                let indexOf = minute.minute.indexOf(moment().format("mm"));
                if(indexOf >= 0){
                    console.log();
                    for (let j = 0 ; j < tabMinutes[i-1].class.length ; j++){
                        let classej = tabMinutes[i-1].class[j];
                        $(classej).removeClass("blanc");
                    }
                    for (let i = 0 ; i < minute.class.length ; i++){
                        let classe = minute.class[i];
                        $(classe).addClass("blanc");
                    }

                    if(indexOf === 0){ $(".point1").removeClass("blanc"); $(".point2").removeClass("blanc"); $(".point3").removeClass("blanc"); $(".point4").removeClass("blanc");}
                    if(indexOf === 1){ $(".point1").addClass("blanc");}
                    if(indexOf === 2){ $(".point1").addClass("blanc"); $(".point2").addClass("blanc");}
                    if(indexOf === 3){ $(".point1").addClass("blanc"); $(".point2").addClass("blanc"); $(".point3").addClass("blanc");}
                    if(indexOf === 4){ $(".point1").addClass("blanc"); $(".point2").addClass("blanc"); $(".point3").addClass("blanc"); $(".point4").addClass("blanc");}

                }
            }
        }

    }
}