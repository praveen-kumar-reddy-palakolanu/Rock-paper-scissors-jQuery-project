var player1;
var player1score = 0;
var player2;
var player2score = 0;
var arrchoices = ['rock', 'paper', 'scissor'];
$(document).ready(function() {
    for (let i=0;i< 3;i++) {
        let choice = $('<img>');
        choice.attr('id',arrchoices[i]);
        choice.attr('src',arrchoices[i] +'.jpeg');
        choice.on('click',selectchoice);
        $('#arrchoices').append(choice);
        }
    });

// $(document).ready(function() {
//     arrchoices.forEach(function(choice) {
//         let img = $('<img>', {
//             id: choice,
//             src: choice + '.jpeg',
//             click: selectchoice
//         });
//         $('#arrchoices').append(img);
//     });
// });
function selectchoice() {
    player1=this.id;
    $('#player1choice').attr('src', player1 +'.jpeg');
    player2=arrchoices[Math.floor(Math.random()*3)];
    $('#player2choice').attr('src', player2 +'.jpeg');
    if (player1 == player2)
    {
        alert('Draw!');
    } 
    else
    {
        if (player1 == 'rock')
        {
            if (player2 == 'paper')
            {
                player2score += 1;
                $()
            } 
            else if (player2 == 'scissor')
            {
                player1score += 1;
            }
        } 
        else if (player1 == 'paper')
        {
            if (player2 == 'scissor')
            {
                player2score += 1;
            }
            else if (player2 == 'rock')
            {
                player1score += 1;
            }
        } 
        else if (player1 == 'scissor')
        {
            if (player2 == 'rock')
            {
                player2score += 1;
            }
            else if (player2 == 'paper')
            {
                player1score += 1;
            }
        }
        $('#player1score').text('Player1_Score: '+player1score);
        $('#player2score').text('Player2_Score: '+player2score);
    }
}

