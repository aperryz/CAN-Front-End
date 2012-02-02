$(function() {    
    
  /* PAGE MOVEMENT
  * ====================== */
  
  //show the correct content from the start.
  var currentPage = getCurrentPage();
  var pages = getPages();
  showLandingPage(currentPage);
  setPrevNextArrows(getCurrentPage());
  
  //Set the correct navigation from the start.
  $('#main-nav a[href="#' + currentPage + '"]').parent().addClass("active");
  
  
  //Remove the hash sign from a string
  function removeHash(string){
    string = string.replace("#","");
    
    return string;
  }
  
  
  function getLinkString(pageName){
    var linkString = $('#main-nav a[href="#' + pageName + '"]').text();
    
    return linkString;
  }
  
  
  //Get all the pages on the site by using the name attribute from each .page-header a tag.
  function getPages(){
    var pages = new Array();
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
    console.log(currentPage);
    
    return currentPage;
  }
  
  
  //Set previous and next button text.
  function setPrevNextArrows(currentPage){
    var prevNextPages = getPrevNextPages(currentPage);
    var pageControlLeft = $('#pages .page-control.left');
    var pageControlRight = $('#pages .page-control.right');
    
    pageControlLeft.removeClass("active");
    pageControlRight.removeClass("active");
    
    //If the previous link should be shown change the text and set it to active.
    if(prevNextPages['prev'] != false){
      
      pageControlLeft.html(getLinkString(prevNextPages['prev']));
      pageControlLeft.addClass("active");
      console.log('prev arrow set');
    }
    
    //If the next link should be showng change the text and set it to active.
    if(prevNextPages['next'] != false){
      pageControlRight.html(getLinkString(prevNextPages['next']));
      pageControlRight.addClass("active");
      console.log('next arrow set');
    }
  }
  
  
  //Get the previous and next pages of the current page.
  //Return false for that array value if a previous or current doesn't exist.
  function getPrevNextPages(currentPage){
    var prevNextPages = new Array();
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
  }
  
  
  function showPageContent(pageToShow, pageLocation){
    var pages = $('#pages');
    var currentContent = $('#pages .page.active');
    var currentContentHeight = currentContent.height();
    var pageToShowContent = $('#pages .page a[name="' + pageToShow + '"]').closest('div.page');
    
    //Set the height of the pages div to the current page height.
    pages.css('height', currentContentHeight);
    
    //Hide the current content first
    currentContent.fadeOut(1000, function(){
      currentContent.removeClass("active");
      //Show the new content.
      
      pages.animate({
        height: pageToShowContent.height()
      }, 1000);
      
      pageToShowContent.fadeIn(1000, function(){
        pageToShowContent.addClass("active");
      });
    });
    
    return true;
  }
  
  
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
    
  $("#main-nav li").click(function() {
    $("#main-nav li").removeClass("active");
    $el = $(this);
    $el.addClass("active");
    $rollover_bar.data("origLeft", $(".active a").position().left);
    $rollover_bar.data("origWidth", $(".active").width());
    
    //Show the new page we want.
    var pageToShow = $el.children("a").attr('href');
    pageToShow = removeHash(pageToShow);
    showPageContent(pageToShow ,'next');
    
    var currentPage = removeHash($el.children().attr("href"))
    setPrevNextArrows(currentPage);
  });
});