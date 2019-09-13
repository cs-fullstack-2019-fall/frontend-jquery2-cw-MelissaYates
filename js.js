/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white background when you click on one of them*/
 let parent_el = document.getElementsByClassName('hello');

 $(".hello").click(function (e)
 {
     $(this).css("background-color", "Orange");
 });

// !! You successfully change the single elements color


/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px.
When you mouse off of it change it back */
let myStyle = {
height:'20px',
width:'20px'
};

$('h1').mouseover(function ()
{
    $(this).css(myStyle);
});
$('h1').mouseleave(function(){
    $(this).css('height','');
    $(this).css('width','');
});
// !! nice use of saving variables for use so you don't have to repeat it

// CHALLENGE
/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */
    $('p.hello').click(function ()
    {
        $('p.hello').append('.')
    });
// !! you successfully change the text as well!