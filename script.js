
$('#squareContainer').on('click', ".square", function(){
    $(this).toggleClass("lightMode"); 
});

for(let i = 0; i < 16; i++) {
      $('#squareContainer').append("<div class='square'></div>"); 
}

