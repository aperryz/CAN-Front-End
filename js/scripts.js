//Run when the DOM is ready to be manipulated.
$(function() {    
    
  /* RUN TO SHOW INITIAL PAGE
  * ====================== */
  
  //show the correct content from the start.
  var currentPage = getCurrentPage();
  var pages = getPages();
  landingPage = showLandingPage(currentPage);
  setPrevNextArrows(currentPage);
  
  //Call the function to count for every number listed.
  landingPage.find('.num').each(function(){
    animateCountUp($(this));
  });
  
  //Set the correct navigation from the start.
  $('#main-nav a[href="#' + currentPage + '"]').parent().addClass("active");
  
  
  /* SLIDING BAR FOR MAIN NAVIGATION
  * ====================== */
  //Adjusted from http://css-tricks.com/jquery-magicline-navigation/.
  var $el, leftPos, newWidth,
  $mainNav = $("#main-nav");

  $mainNav.append("<li id='rollover-bar'></li>");
  var $rollover_bar = $("#rollover-bar");

  $rollover_bar
  .width($(".active").width())
  .css("left", $(".active a").position().left)
  .data("origLeft", $rollover_bar.position().left)
  .data("origWidth", $rollover_bar.width());

  $("#main-nav li a").hover(function() {
    $el = $(this);
    leftPos = $el.position().left;
    newWidth = $el.parent().width();
    $rollover_bar.stop().animate({
      left: leftPos,
      width: newWidth
    });
  }, function() {
    $rollover_bar.stop().animate({
      left: $rollover_bar.data("origLeft"),
      width: $rollover_bar.data("origWidth")
    });
  });
    
  $("#main-nav li").click(function(evt) {
    $("#main-nav li").removeClass("active");
    $el = $(this);
    $el.addClass("active");
    $rollover_bar.data("origLeft", $(".active a").position().left);
    $rollover_bar.data("origWidth", $(".active").width());
    
    //Since we are going to run the click on the arrows we need to move the rollover bar to the new nav link.
    $rollover_bar.animate({
      left: $rollover_bar.data("origLeft"),
      width: $rollover_bar.data("origWidth")
    }); 
    
    
    //Handle page movement when a new page is clicked.
    var pageToShow = $el.children("a").attr('href');
    pageToShow = removeHash(pageToShow);
    showPageContent(pageToShow ,'next');
    
    var currentPage = removeHash($el.children().attr("href"))
    setPrevNextArrows(currentPage);
    
    evt.preventDefault();
  });
  
  //Set click event for the previous and next arrows.
  //We do this by triggering a click event on that navigation item.
  $('.page-control').click(function(evt){
    var clickedArrow = $(this);
    var currentPage = getCurrentPage();
    var prevNextPages = getPrevNextPages(currentPage);
    
    if(clickedArrow.hasClass("prev")){ //If they clicked the previous arrow.
      $("#main-nav li a[href='#" + prevNextPages['prev'] + "']").parent().trigger('click');
    }
    else{ //If they clicked the next arrow.
      $("#main-nav li a[href='#" + prevNextPages['next'] + "']").parent().trigger('click');
    }
    
    evt.preventDefault();
  });
  
  
  /* RUN ISOTOPE AND IMAGE ROLLOVERS
  * ====================== */ 
  var $container = $('#images');
      
  $container.isotope({
    itemSelector: '.image'
  });

    $('#images .image').hover(function(){
      var imageContainer = $(this);
      var imgContent = imageContainer.children('.img-content');
      var imageHeight = imageContainer.css('height');
      imgContent.animate({
        height: imageHeight
      }, 300);
    }, function(){
      var imageContainer = $(this);
      var imgContent = imageContainer.children('.img-content');
      imgContent.animate({
        height: 0
      }, 300);
    });
  
});



/* PAGE MOVEMENT FUNCTIONS
  * ====================== */
//Remove the hash sign from a string
function removeHash(string){
  string = string.replace("#","");
    
  return string;
}


function setHash(string){
  window.location.hash = string;
  
  return window.location.hash;
}
  
  
function getLinkString(pageName){
  var linkString = $('#main-nav a[href="#' + pageName + '"]').text();
    
  return linkString;
}
  
  
//Get all the pages on the site by using the name attribute from each .page-header a tag.
function getPages(){
  var pages = [];
  $("#pages .page-header a").each(function(index){
    pages.push($(this).attr('name'));
  })
      
  return pages;
}
  
  
//Find the current page by using the current URL.
//We can't use this when we click the navigation because the default change comes after what we do.
function getCurrentPage(){
  var currentPage;
  currentPage = window.location.hash;
  if(currentPage != ""){
    currentPage = removeHash(currentPage);
  }
  else{ //If there is no hash than use the first page in the list.
    var pages = getPages();
    currentPage = pages[0];
  }
    
  return currentPage;
}
  
  
//Set previous and next button text.
function setPrevNextArrows(currentPage){
  var prevNextPages = getPrevNextPages(currentPage);
  var pageControlPrev = $('#pages .page-control.prev');
  var pageControlNext = $('#pages .page-control.next');
    
  pageControlPrev.removeClass("active");
  pageControlNext.removeClass("active");
    
  //If the previous link should be shown change the text and set it to active.
  if(prevNextPages['prev'] != false){
    pageControlPrev.html(getLinkString(prevNextPages['prev']));
    pageControlPrev.addClass("active");
  }
    
  //If the next link should be showng change the text and set it to active.
  if(prevNextPages['next'] != false){
    pageControlNext.html(getLinkString(prevNextPages['next']));
    pageControlNext.addClass("active");
  }
}
  
  
//Get the previous and next pages of the current page.
//Return false for that array value if a previous or current doesn't exist.
function getPrevNextPages(currentPage){
  var prevNextPages = [];
  var pages = getPages();
  for (i = 0; i < pages.length; i++){
    if (pages[i] ==  currentPage){
      if(i == 0){
        prevNextPages['prev'] = false;
        prevNextPages['next'] = pages[i + 1];
      }
      else if(i == pages.length - 1){
        prevNextPages['prev'] = pages[i - 1];
        prevNextPages['next'] = false;
      }
      else{
        prevNextPages['prev'] = pages[i - 1];
        prevNextPages['next'] = pages[i + 1];
      }
    }
  }

  return prevNextPages;
}

  
function showLandingPage(landingPageName){
  var landingPage = $('#pages .page a[name="' + landingPageName + '"]').closest('div.page');
  landingPage.addClass("active");
  
  return landingPage;
}
  
  
function showPageContent(pageToShow, pageLocation){
  var pages = $('#pages');
  var currentContent = $('#pages .page.active');
  var currentContentHeight = currentContent.height();
  var pageToShowContent = $('#pages .page a[name="' + pageToShow + '"]').closest('div.page');
    
  //Set the height of the pages div to the current page height.
  pages.css('height', currentContentHeight);
    
  //Hide the current content first
  currentContent.fadeOut(100, function(){
    currentContent.removeClass("active");
    
    //Show the new content.  
    pages.animate({
      height: pageToShowContent.height()
    }, 100);
      
    pageToShowContent.fadeIn(100, function(){
      pageToShowContent.addClass("active");
    });
  });
  
  //Set the has to be the new page.  This is needed for the prev and next buttons.
  setHash(pageToShow);
  
  //Call the function to count for every number listed.
  pageToShowContent.find('.num').each(function(){
    animateCountUp($(this));
  });
    
  return true;
}

/* COUNTING UP FUNCTION
  * ====================== */
function animateCountUp(containerSpan){
  var maxNumber = containerSpan.text();
  maxNumber = Number(maxNumber);
  var currentNumber = 0;  
  
  var i = setInterval(function(){
    if(currentNumber <= maxNumber){
      containerSpan.text(currentNumber);
      currentNumber++;
    }
    else{
      clearInterval();
    }
  }, 1);
  
}
