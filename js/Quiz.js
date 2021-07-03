class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("blue")
    //write code to show a heading for showing the result of Quiz
    textSize(30);
    text("My quiz game results", 340, 50)
    //call getContestantInfo( ) here
    Contestant.getContestantInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      debugger;
      var display_position = 230;
      for(var plr in allContestants){
        debugger;
        var ams = "2"
        if (ams === allContestants[plr].ams)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 240,display_position)
         //P1: 900
      }
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
