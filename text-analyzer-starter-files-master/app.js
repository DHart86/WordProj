$(document).ready(function() {


// WORD COUNT
$(".calcButton").on("click", function() {
  var x = $(".js-userInput").val();
  $('dl').removeClass("hidden");
 
//LOOK FOR DUPLICATES
 function findDups(arra1) {
   var result = [];
   var obj = {};
   
    for (var i in arra1) {
      arra1[i] = arra1[i].replace('.', '');
      obj[arra1[i]]=0;
        }
    for (var i in obj) {
      result.push(i);
        }
    return result;
        }
  
//DISPLAY INFO - UNIQUE
  
  $(".js-unique").text(findDups(x.split(/\s+/)).length + " are unique");
    
     
    }); 

// WORD COUNT , WORD LENGTH, SENT LENGTH

$(".calcButton").on("click", function() {
  var x = $(".js-userInput").val();
 

 function countWords(s){
    s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    
    return s.split(' ').length; 
}

 var words = countWords(x);
 var char = x.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()' '/(\n)+]/g,"").length;
 var sent = x.split(/[\.\?\!]\s/).length;



 if ($(".js-userInput").val().length == 0) { 
     $(".js-unique, .js-another, .js-sent, .js-sLength").text("Empty");
  }

  else {

$(".js-sLength").text((Math.round(char / words *100)/100 + " average word length.")) 
$(".js-sent").text(Math.round(words / sent *100)/100)
$(".js-another").text(words); }


});     


}); 



























