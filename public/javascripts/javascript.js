
var content = [blogpost.content.id]

function newTitle()  {
    var randomNumber = Math.floor(Math.random() * 3);
    document.getElementById('titleDisplay').innerHTML = content[randomNumber];
}