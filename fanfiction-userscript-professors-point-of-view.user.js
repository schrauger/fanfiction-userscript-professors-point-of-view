// ==UserScript==
// @name        Fanfiction - The Professors' Point of View - Add Names
// @namespace   com.schrauger.fanfiction.professorspov
// @author Stephen Schrauger
// @description Prepends names to script dialog paragraphs in the Fanfiction story "The Professors' Point of View"
// @homepage    https://github.com/schrauger/fanfiction-userscript-professors-point-of-view
// @include     https://www.fanfiction.net/s/7031677
// @include     https://www.fanfiction.net/s/7031677/*
// @version     2.3
// @grant       none
// @downloadURL https://raw.githubusercontent.com/schrauger/fanfiction-userscript-professors-point-of-view/master/fanfiction-userscript-professors-point-of-view.user.js
// @updateURL   https://raw.githubusercontent.com/schrauger/fanfiction-userscript-professors-point-of-view/master/fanfiction-userscript-professors-point-of-view.user.js
// ==/UserScript==
(function(){
var objDumbledore = $('#storytext p span:contains("Dumbledore"):first').parent(); // We don't need to check for underlines, because any <p> with a direct <span> child is underlined.
var objOtherProfessors = $('#storytext p span:contains("Dumbledore"):first').parent().nextUntil("hr");
var allProfessors = $(objDumbledore).add(objOtherProfessors);

// some chapters don't use the dialog format, and instead revert to standard writing.
// No worries, though. Since we only prepend names on the allProfessors object, that
// object is empty when Dumbledore is not listed underlined at the beginning.
// There are a few chapters, unfortunately, that mix in standard at the end. I can't
// detect those, so Sprout get prepended to those paragraphs.
$(allProfessors).nextUntil('#storytext hr:last','hr').each(function(){
  // between each hr element, prepend. except when the number of 'sprout' lines
  // far exceeds the number of all other professor lines, which indicated the writing
  // has changed to standard instead of script.

  paragraphs = $(this).nextUntil('hr','p');
  paragraphs_sprout = $(this).nextUntil('hr',':not(:has(em,span,strong))');

  count_dumbledore = $(paragraphs).find(' > span:first').size();
  count_mcgonagall = $(paragraphs).find(' > em:not(:has(strong,span)):first').size();
  count_flitwick   = $(paragraphs).find(' > em > span:first').size();
  count_snape      = $(paragraphs).find(' > em > strong:first').size();
  count_other      = $(paragraphs).find(' > strong:first').size();
  
  count_non_sprout = count_dumbledore + count_mcgonagall + count_flitwick + count_snape + count_other;
  count_sprout     = $(paragraphs_sprout).size();


  if (count_sprout > (count_non_sprout * 2)){

    // this has too many standard paragraphs. it is standard writing instead of script writing. don't prepend.
  } else {

    // this is script writing. prepend.
    //$(paragraphs).each(function(){

      $(paragraphs).find('> span:first').each(function(){
        if (!$(this)[0].previousSibling || $(this)[0].previousSibling.textContent.length < 2){
          // make sure there are no previous text nodes (jquery can't handle text-only nodes, so use basic js).
          // :first only works on element nodes, not text nodes.
          // if there is a previous sibling, ignore this node. because another character is speaking using underlines, italics, etc within their line (very annoying for this script)
          // Except! If there is a previous sibling, but its length is only 1 character (likely a quotation mark), act as though it doesn't exist, and continue prepending the name as normal.
          $(this).prepend("Dumbledore: ") // dumbledore
          $(this).closest("p").addClass("character");
        }
      });

      $(paragraphs).find('> em:not(:has(strong,span)):first').each(function(){
        if (!$(this)[0].previousSibling || $(this)[0].previousSibling.textContent.length < 2){
          $(this).prepend("McGonagall: ") // mcgonagall
          $(this).closest("p").addClass("character");
        }
      });
      
      $(paragraphs).find('> em > span:first').each(function(){
        if (!$(this)[0].previousSibling || $(this)[0].previousSibling.textContent.length < 2){
          $(this).prepend("Flitwick: ") //flitwick
          $(this).closest("p").addClass("character");
        }
      });

      $(paragraphs).find('> em > strong:first').each(function(){
        if (!$(this)[0].previousSibling || $(this)[0].previousSibling.textContent.length < 2){
          $(this).prepend( "Snape: ") // snape
          $(this).closest("p").addClass("character");
        }
      });


      $(paragraphs).find('> strong:first').each(function(){
        if (!$(this)[0].previousSibling || $(this)[0].previousSibling.textContent.length < 2){
          $(this).prepend($(allProfessors).find(' > strong:first').text() + ": ") // rotating teacher
          $(this).closest("p").addClass("character");
        }
      });

    //});
    $(paragraphs).not('.character').prepend("Sprout: "); // sprout. due to text nodes being difficult, just assign sprout to all paragraphs that don't have our special class added by the end.

  }
})

})();
