class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("car racing game");
        title.position(450,0);

        var input = createInput("name");
        var button = createButton("play");
        input.position(450,160);
        button.position(450,200);

        var greeting = createElement("h3");
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("hello" + name);
            greeting.position(450,160);


        })
    
}
}