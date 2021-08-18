/*
 * Name: Rita Kuo
 * Date: October 20, 2020
 * Section: CSE 154 AJ
 *
 * This is the JS to implement the UI for my cryptogram generator, and generate
 * different types of ciphers from user input. There are three buttons in the page,
 * and when user clicks them, they will show quotes, change image, and add text.
 */

"use strict";
(function() {
  window.addEventListener("load", init);

  /**
   * This method starts the initiaion process, so we
   * now have acess to the DOM tree. Also, this method has 3 event handlers
   */
  function init() {
    const QUOTE_BTN = id("quote-btn");
    QUOTE_BTN.addEventListener("click", showQuote);

    const IMG_BTN = id("img-btn");
    IMG_BTN.addEventListener("click", changeImg);

    const TEXT_BTN = id("text-btn");
    TEXT_BTN.addEventListener("click", addText);

    const REMOVE_BTN = id("remove-btn");
    REMOVE_BTN.addEventListener("click", removeImg);
  }

  /**
   * This methods will show the quote one at a time when
   * the user clicks the button on the page
   */
  function showQuote() {
    const QUOTE = qs(".quotes");
    QUOTE.classList.remove("quotes");
  }

  /**
   * This methods will remove the image when
   * the user clicks the button on the page
   */
  function removeImg() {
    const PARENT = id("parent");
    const REMOVE = id("remove");
    PARENT.removeChild(REMOVE);
  }

  /**
   * This method will change the current image to another image
   * when the user clicks the button on the page.
   */
  function changeImg() {
    const IMG = id("animalcrossing");
    IMG.src = "img/animalcrossing1.jpg";
  }

  /**
   * This method will add the image resource to the current unorder list
   * when the user clicks the button on the page.
   */
  function addText() {
    const LI_TEXT = document.createElement("li");
    LI_TEXT.textContent = "https://en.wikipedia.org/wiki/Emily_in_Paris";
    id("links").appendChild(LI_TEXT);
  }

  /**
   * Returns the DOM object with the given id attribute.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id (null if not found).
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the first DOM object that matches the given selector.
   * @param {string} selector - query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

})();
