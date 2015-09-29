/**
 * Created by Dave on 9/28/15.
 */
$(function(){

    var candidateList = {};
    candidateList.republicans = [];
    candidateList.democrats = [];
    console.log(candidateList);

//Click load candidates to grab JSON data for variables
    //get republican candidates
    $.ajax({
        url: "/rep"
    }).done(function(response){
        candidateList.republicans = JSON.parse(response);
        for(var i = 0; i < candidateList.republicans.length; i++){
            var repAppend = "<li>" + candidateList.republicans[i] + "</li>";

            $(".appendReps").hide().append(repAppend);
        }
    });
    //get democratic candidates
    $.ajax({
        url: "/dem"
    }).done(function(response){
        candidateList.democrats = JSON.parse(response);
        for(var i = 0; i < candidateList.democrats.length; i++){
            var demAppend = "<li>" + candidateList.democrats[i] + "</li>";
            $(".appendDems").hide().append(demAppend);
        }
    });

    $('#load').on('click', function(){
        $(".appendReps, .appendDems").slideToggle(1000);
    })

    $('#begin').on('click', function(){
        var masterList = candidateList.republicans.concat(candidateList.democrats);
        var randomSelector = Math.floor(Math.random() * masterList.length);
        var winner = masterList[randomSelector];
        var $winnerMessage = "<div class='col-md-12' class='winner'>&#9734&#9733&#9734" + winner + "&#9734&#9733&#9734</div>"

        console.log($winnerMessage);

        $(".winner-div").html($winnerMessage);
        $(".appendReps, .appendDems").slideUp('fast');
        $(".winner-div").animate({'padding': '50px', 'font-size': '100px', "letter-spacing": '10px'});

        $("#eag").animate({right: '1000px',top: '500px', height: '300px', width: "300px"}, 2000);
        $("#eag").animate({height: '80px', width: "80px", right: '2000px',top: '1000px'}, 2000);

        var audio = $("audio")[0];
        audio.play();

        $("#flag-gif").animate({right: '1640px',top: '420px', height: '242px', width: "280px"}, 2000);
        $("#flag-gif-2").animate({right: '0px',top: '420px', height: '242px', width: "280px"}, 2000);


    });
});