// ==UserScript==
// @name        Fanfiction - The Professors' Point of View - Add Names
// @namespace   com.schrauger.fanfiction.professorspov
// @author Stephen Schrauger
// @description Prepends names to script dialog paragraphs in the Fanfiction story "The Professors' Point of View"
// @homepage    https://github.com/schrauger/fanfiction-userscript-professors-point-of-view
// @include     https://www.fanfiction.net/s/7031677/*
// @version     1.1
// @grant       none
// @downloadURL https://raw.githubusercontent.com/schrauger/fanfiction-userscript-professors-point-of-view/master/fanfiction-userscript-professors-point-of-view.user.js
// @updateURL   https://raw.githubusercontent.com/schrauger/fanfiction-userscript-professors-point-of-view/master/fanfiction-userscript-professors-point-of-view.user.js
// ==/UserScript==
var objDumbledore = $('#storytext p span:contains("Dumbledore"):first').parent(); // We don't need to check for underlines, because any <p> with a direct <span> child is underlined.
var objOtherProfessors = $('#storytext p span:contains("Dumbledore"):first').parent().nextUntil("hr");
var allProfessors = $(objDumbledore).add(objOtherProfessors);

// some chapters don't use the dialog format, and instead revert to standard writing.
// No worries, though. Since we only prepend names on the allProfessors object, that
// object is empty when Dumbledore is not listed underlined at the beginning.
// There are a few chapters, unfortunately, that mix in standard at the end. I can't
// detect those, so Sprout get prepended to those paragraphs.
$(allProfessors).next('hr').nextUntil('#storytext hr:last','p').each(function(){
  //$(this).find('> span').prepend($(allProfessors).find(' > span:first').text() + ": ") // dumbledore
  $(this).find('> span').prepend("Dumbledore: ") // dumbledore

  //$(this).find('> em:not(:has(strong,span))').prepend($(allProfessors).find(' > em:not(:has(strong,span)):first').text() + ": ") // mcgonagall
  $(this).find('> em:not(:has(strong,span))').prepend("McGonagall: ") // mcgonagall

  //$(this).find('> em > span').prepend($(allProfessors).find(' > em > span:first').text() + ": ") //flitwick
  $(this).find('> em > span').prepend("Flitwick: ") //flitwick

  //$(this).find('> em > strong').prepend($(allProfessors).find(' > em > strong:first').text() + ": ") // snape
  $(this).find('> em > strong').prepend( "Snape: ") // snape

  $(this).find('> strong').prepend($(allProfessors).find(' > strong:first').text() + ": ") // rotating teacher

}); 
/*$(allProfessors).next('hr').nextUntil('#storytext hr:last', 'p:not(:has(em,span,strong))').each(function(){
  $(this).prepend($(allProfessors).clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text() + ": ")}); // sprout
*/
$(allProfessors).next('hr').nextUntil('#storytext hr:last', 'p:not(:has(em,span,strong))').each(function(){
  $(this).prepend("Sprout: ")}); // sprout



