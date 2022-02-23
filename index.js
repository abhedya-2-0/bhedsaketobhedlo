// So you love cheating? And you found our answer for this level? No worries, have fun :)
$('#submit').click(function(){
        var ans = $("#answer").val()
        if(ans == "cards" || ans == "playingcards" || ans == "deck" || ans == "playing cards"|| ans == "playing_cards"|| ans == "gambling"){
                window.location.replace('https://www.google.co.in')
        }else{
                alert("wrong answer!!")
        }
})