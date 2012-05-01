$(function() { //Run when the DOM is ready to be manipulated.    
    
  /* RUN TO SHOW INITIAL PAGE
  * ====================== */
  
  //show the correct content from the start.
  var currentPage = getCurrentPage(),
    pages = getPages(),
    landingPage = showLandingPage(currentPage);
    
  setPrevNextArrows(currentPage);
  
  //Set the correct navigation from the start.
  $('#main-nav a[href="#' + currentPage + '"]').parent().addClass("active");
  
  
  /* CAN PULLDOWN MENU
  * ====================== */     
  //Animate the pulldown to show and hide when the pulldown button is clicked.
  $('#pulldown-btn').click(function(){
    var dropdown = $('.dropdown'),
      body = $('body'),
      sortsFilters = $('#sorts-filters');
    
    if (dropdown.hasClass('active')){
      dropdown.animate({
        height: '5px'
      }, 500);
      dropdown.removeClass('active');
      
      //We also animate the body so the whole page appears to move back up.
      body.animate({
        marginTop: '40px'
      }, 500);
      
      
      //We also animate the sort and filter bar back up if it's fixed.
      sortsFilters.animate({
        top: '40px'
      }, 500);
    }
    else{
      dropdown.animate({
        height: '36px'
      }, 500);
      dropdown.addClass('active'); 
      
      //We also animate the body so the whole page appears to move down.
      body.animate({
        marginTop: '71px'
      }, 500);
      
      //We also animate the sort and filter bar down if it's fixed.
      sortsFilters.animate({
        top: '71px'
      }, 500); 
    }
  });
  
  
  /* HANDLE LOGIN/REGISTER LINKS AND MODAL FIELDS
  * ====================== */
  //One modal box used here with JS to show and hide the correct fields.
  //Allows us to process only one form, not multiple forms.
  //We also included the create account and login links within the modal
  //so users can move back and forth between login and register.
  $('#register-link, #create-account-link').click(function(){
    var loginRegModal = $('#login-reg-modal');
    loginRegModal.find('#login-group').addClass('hide');
    loginRegModal.find('#register-group, #logreg-email-group').removeClass('hide');
    loginRegModal.find('#login-reg-button').text('Register');
  });
  $('#login-link, #login-account-link').click(function(){
    var loginRegModal = $('#login-reg-modal');
    loginRegModal.find('#login-group').removeClass('hide');
    loginRegModal.find('#register-group, #logreg-email-group').addClass('hide');
    loginRegModal.find('#login-reg-button').text('Login');
  });
  
  
  /* MAIN NAVIGATION AND SHOWING PAGES
  * ====================== */
  //Adjusted from http://css-tricks.com/jquery-magicline-navigation/.
  //Check if the main navigation exists first.
  if($("#main-nav").exists()){
    
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

    $("#main-nav li").not('.sep').click(function(evt) {
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
      changePage($el.children("a").attr('href'));

      evt.preventDefault();
    });
  }//End of if statement to see if main-nav exists.
  
  //Add event handler to submit button in top right that loads the submit page.
  //We determine which page is the submit page because that anchor tag has a class of submit.
  $('#submit-btn').click(function(){
    $('#main-nav li .submit').trigger('click');
  });
  
  //Add event handler to the campaign logo that loads up the homepage.
  //We determine which page is the homepage because that anchor tag has a class of home.
  $('#logo').click(function(){
    $('#main-nav li .home').trigger('click');
  });
  
  //Set click event for the previous and next arrows.
  //We do this by triggering a click event on that navigation item.
  $('.page-control').click(function(evt){
    var clickedArrow = $(this),
      currentPage = getCurrentPage(),
      prevNextPages = getPrevNextPages(currentPage);
    
    if($("#main-nav").exists()){ //If the main nav exists we just trigger a click event.
      if(clickedArrow.hasClass("prev")){ //If they clicked the previous arrow.
        $("#main-nav li a[href='#" + prevNextPages['prev'] + "']").parent().trigger('click');
      }
      else{ //If they clicked the next arrow.
        $("#main-nav li a[href='#" + prevNextPages['next'] + "']").parent().trigger('click');
      }
    }
    else { //If the main nav doesn't exist we move the pages without adjusting the navigation.
      changePage(clickedArrow.attr('data-name'));
    }
    
    evt.preventDefault();
  });
  
  
  /* SORTS, FILTERS, ISOTOPES AND IMAGES
  * ====================== */ 
  //First check if the sorts and filters even exist.
  if($('#sorts-filters').exists()){
  
    var $container = $('#images'),
    filters = {};

    $container.isotope({
      itemSelector: '.image',
      itemPositionDataEnabled: true,
      getSortData : {
        //SortOne is a regular text field.  We sort alphabetically.
        one : function ( $elem ) {
          return $elem.find('.sort-one').text();
        },
        //SortTwo is a number so we are going to cast it to an integer then sort counting up.
        two : function ( $elem ) {
          return parseInt($elem.find('.sort-two').text(), 10);
        }
      },
      sortBy : 'one'
    });

    //Fade in the sorts and filters when you rollover the grid.
    $container.mouseover(function(){
      $('#sorts-filters').animate({
        opacity: 100
      }, 3000);
    });

    // Handle the combined filters
    $('.filter a').click(function(evt){
      var $this = $(this);
      // don't proceed if already selected
      if ( $this.hasClass('active') ) {
        return;
      }
      var $optionSet = $this.parents('.filter');
      $optionSet.find('.active').removeClass('active');
      $this.addClass('active');

      // store filter value in object
      // i.e. filters.color = 'red'
      var group = $optionSet.attr('data-filter-group');
      filters[ group ] = $this.attr('data-filter-value');
      // convert object into array
      var isoFilters = [];
      for ( var prop in filters ) {
        isoFilters.push( filters[ prop ] )
      }
      var selector = isoFilters.join('');
      $container.isotope({
        filter: selector
      });

      //Run colorbox again so those that were filtered out are no longer included.
      setupColorBox();
    });

    //Add click event to sorting links.
    $('#sort a').click(function(){
      // get href attribute, minus the '#'
      var sortName = $(this).attr('href').slice(1);
      $container.isotope({
        sortBy : sortName
      });

      return false;
    });

    //Set filters to stick when we move below the page.
    makeFilterStick();

    //Show the sort and filter dropdowns on hover.
    $('#sorts-filters .sort-filter').hover(function(){
      $(this).find('ul').removeClass('hide');
    },
    function(){
      $(this).find('ul').addClass('hide');
    });

    //Add class that we use to show if the sort or filter is selected.
    $('#sort a').click(function(){
      var $this = $(this);
      $this.parents('ul').find('.active').removeClass('active');
      $this.addClass('active');
    });
  }//End of if statement to see if filters exist.

  //When hovering over the images dropdown text over the top.
  /*
  $('#images .image').hoverIntent(function(){
    var imageContainer = $(this),
      imgContent = imageContainer.children('.img-content'),
      imageHeight = imageContainer.css('height');
      
    imgContent.stop(true, false).animate({
      height: imageHeight
    }, 300);
  }, function(){
    var imageContainer = $(this),
      imgContent = imageContainer.children('.img-content');
      
    imgContent.animate({
      height: 0
    }, 300);
  });  
*/  
  
  
  /* SETUP SUBMISSION MODAL
  * ====================== */ 
 //Check if the submission modal even exists first.
 if($('#submission-modal').exists()){
  setupSubmissionModal($('#submission-modal'));
 }
  
  
 /* SETUP COLORBOX FROM PAGE LOAD
  * ====================== */ 
 //Setup colorbox to run on the current submissions that are available.
 setupColorBox();
 
 $(document).bind('cbox_complete', function(){
    //Handle showing and hiding the sidebar boxes for colorbox.
    $('.submission-engage-box').click(function(){
      var $this = $(this);
      $this.toggleClass('active');
      $this.find('.submission-engage-content').slideToggle(200);
      
      $this.siblings('.submission-engage-box').removeClass('active');
      $this.siblings('.submission-engage-box').find('.submission-engage-content').slideUp(200);
    });
    
   //Handle show and hiding the social boxes for Twitter and Comments.
   $('.social-heading').click(function(){
     var $this = $(this),
      thisSocialBox = $('#' + $this.attr('data-social-box'));
      
      //Add and remove active class from headings.
      $this.addClass('active');
      $this.siblings().removeClass('active');
      
      //Add and remove hide class from social box with content.
      thisSocialBox.removeClass('hide');
      thisSocialBox.siblings().addClass('hide');
   });
   
   //Make clicking outside of any of the content boxes close the colorbox.
   $('#colorbox-info, #submission-content').click(function(evt){
     if (evt.target.id === "colorbox-info" || evt.target.id === "submission-content"){
      $.colorbox.close();
     }
   });
});

/* FACEBOOK LIKE BUTTON FOR COLORBOX
  * ====================== */ 
//In order to load another Facebook like button from AJAX we need to reparse the FBML.
$(document).ajaxComplete(function(){
    try{
        FB.XFBML.parse(); 
    }catch(ex){}
});

/* PLACEHOLDER SUPPORT
  * ====================== */ 
//Add support for the placeholder attribute in older browsers.
$('input, textarea').placeholder(); 
    
}); //END OF DOCUMENT READY FUNCTION



/* PAGE MOVEMENT FUNCTIONS
  * ====================== */
//Handle all page movement
function changePage(pageToShow){
  //Handle page movement when a new page is clicked.
  pageToShow = removeHash(pageToShow);

  currentPage = getCurrentPage();

  var moveDirection = getPageDirection(currentPage, pageToShow);

  if(moveDirection != 'same') { //Only show the new page and previous and next arrows if it's a different page.
    showPageContent(pageToShow, moveDirection);
    setPrevNextArrows(pageToShow, moveDirection);
  }
}
  
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
  var linkString = $('#pages .page-header h1[data-name="' + pageName + '"]').attr('data-text');  
    
  return linkString;
}
  
  
//Get all the pages on the site by using the name attribute from each .page-header a tag.
function getPages(){
  var pages = [];
  $("#pages .page-header h1").each(function(index){
    pages.push($(this).attr('data-name'));
  })
      
  return pages;
}

//Find out if the page we are going to show is before or after the current page.
function getPageDirection(currentPage, pageToShow){
  var pages = getPages(),
    currentPagePlace,
    pageToShowPlace;
    
  //Find the location of both the current page and the page to show in the array.
  for(var i = 0; i < pages.length; i++){
    if(currentPage == pages[i]){
      currentPagePlace = i;
    }
    if(pageToShow == pages[i]){
      pageToShowPlace = i;
    }
  }

  //Return next if the page comes later, prev if it comes before and same if they clicked the same page.
  if(pageToShowPlace > currentPagePlace){
    return 'next';
  }
  else if (pageToShowPlace < currentPagePlace){
    return 'prev';
  }
  else {
    return 'same';
  }  
}
  
  
//Find the current page by using the current URL.
//We can't use this when we click the navigation because the default change comes after what we do.
function getCurrentPage(){
  var pages = getPages(),
      currentPage = removeHash(window.location.hash),
      foundPage = false;
  
  //Loop through each of the pages and if one of the pages matches then keep that as the current page.
  for(var i=0; i < pages.length; i++){
    if(pages[i] == currentPage){
      foundPage = true;
    }
  }
  
  //If the has doesn't match any of th pages then show the first page.
  if (foundPage == false) { 
    currentPage = pages[0];
  }
    
  return currentPage;
}
  
  
//Set previous and next button text.
function setPrevNextArrows(currentPage, moveDirection){
  var prevNextPages = getPrevNextPages(currentPage),
    pageControlPrev = $('#pages .page-control.prev'),
    pageControlNext = $('#pages .page-control.next');
    
  pageControlPrev.fadeOut(100);
  pageControlNext.fadeOut(100);
    
  //If the previous link should be shown change the text and fade it in.
  if(prevNextPages['prev'] != false){
    pageControlPrev.html(getLinkString(prevNextPages['prev']));
    pageControlPrev.attr('data-name', prevNextPages['prev']);
    
    pageControlPrev.fadeIn(100);
  }
    
  //If the next link should be showng change the text and fade it in.
  if(prevNextPages['next'] != false){
    pageControlNext.html(getLinkString(prevNextPages['next']));
    pageControlNext.attr('data-name', prevNextPages['next']);
    
    pageControlNext.fadeIn(100);
  }  
}
  
  
//Get the previous and next pages of the current page.
//Return false for that array value if a previous or current doesn't exist.
function getPrevNextPages(currentPage){
  var prevNextPages = [],
    pages = getPages();
  
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
  var landingPage = $('#pages .page h1[data-name="' + landingPageName + '"]').closest('div.page');
  landingPage.addClass("active");
  
  //Call the function to count for every number listed.
  landingPage.find('.num').not('.active').each(function(){
    animateCountUp($(this));
  });
  
  return landingPage;
}
  
  
function showPageContent(pageToShow, moveDirection){
  var pages = $('#pages'),
    currentContent = $('#pages .page.active'),
    currentContentHeight = currentContent.height(),
    pageToShowContent = $('#pages .page h1[data-name="' + pageToShow + '"]').closest('div.page');
    
  //Set the height of the pages div to the current page height.
  pages.css('height', currentContentHeight);
    
  //Hide the current content first, when that's finished we animate and show the new content.
  currentContent.animate({
    opacity: 0
  }, 100, function(){
    currentContent.removeClass("active");

    $('html, body').scrollTop(0);
    
    $('#pages-container').animate({
      height: pageToShowContent.height() + parseFloat(pages.css('padding-bottom'))
    }, 200, 'linear', function(){
      //Since the height has changed we need to call the filter stick function again.
      makeFilterStick();
    });

    //Based on the location of the new page vs. the old page, we set the starting location.
    var startLocation = (moveDirection == 'next') ? '100px' : '-100px';
    pageToShowContent.css('left', startLocation);
    pageToShowContent.addClass("active");  
    pageToShowContent.animate({
      opacity: 1,
      left: 0
    }, 100);
  });
  
  //Set the has to be the new page.  This is needed for the prev and next buttons.
  setHash(pageToShow);
  
  //Call the function to count for every number listed.
  pageToShowContent.find('.num').not('.active').each(function(){
    animateCountUp($(this));
  });
    
  return true;
}


/* FILTERS
  * ====================== */
function makeFilterStick(){  
  //Make sorts and filters fixed once we scroll down.
  var $window = $(window),  
    sortsFilters = $('#sorts-filters'),
    sortsFiltersTop = sortsFilters.offset().top;
     
  //Remove any previously set scroll events.
  $window.unbind('scroll');  

  $window.scroll(function(e){
    if ($window.scrollTop() > sortsFiltersTop - 50) {
      //If the sorts and filters aren't already shown we want to do that here.
      sortsFilters.animate({
        opacity: 100
      }, 3000);
      
      sortsFilters.addClass('low-scroll');
    }
    else {
      sortsFilters.removeClass('low-scroll');
    }
  }); 
}


/* COUNTING UP
  * ====================== */
function animateCountUp(containerSpan){
  //We pull the max number from the data-number attribute on the container span.
  var maxNumber = containerSpan.attr('data-number');
  
  //Add active class at start and remove at the end.  This way we don't run it again while it's already running.
  //This was required for IE7 and IE8.
  containerSpan.addClass('active');
  
  var currentNumber = 0;
  var timer = setInterval(function(){
    if(currentNumber <= maxNumber){
      containerSpan.text(currentNumber);
      
      if((currentNumber + 100000) < maxNumber){ //Over 100,000 difference count up by 10,000
        currentNumber = currentNumber + 10000;
      }
      else if((currentNumber + 10000) < maxNumber){ //Between 10,000 and 100,000 difference count up by 1,000
        currentNumber = currentNumber + 1000;
      }
      else if((currentNumber + 1000) < maxNumber){ //Between 1,000 and 10,000 difference count up by 50
        currentNumber = currentNumber + 50;
      }
      else if ((currentNumber + 50) < maxNumber){ //Between 50 and 1,000 difference count up by 10
        currentNumber = currentNumber + 10;
      }
      else {
        currentNumber++; //Between 1 and 50 difference count up by 1
      }
    }
    else{
      clearInterval(timer);
      containerSpan.removeClass('active');
    }
  }, 35);  
}


/* SUBMISSION PROCESS
  * ====================== */ 
//Use one modal and adjust the content based on the submission type.
//We use the data-submission-type attribute on the modal to find the submission type.
function setupSubmissionModal(submissionModal){
  var submissionType = submissionModal.attr('data-submission-type');
  
  switch(submissionType){
    case 'video':
      //Set the initial state to be the video buttons.
      //Then set click events for each link to change the state.
      showVideoState('videoButtons', '');
      
      //Add event listener to upload video link button.
      submissionModal.find('#upload-video-select').click(function(){
        showVideoState('uploadVideo', $(this));
      });
      
      //Add event listener to record video link button.
      submissionModal.find('#record-video-select').click(function(){
        //This can be used to place JS actions for the record video content.
      });
      
      //Add event listener to the add video link button.
      submissionModal.find('#link-video-select').click(function(){
        showVideoState('linkToVideo', $(this));
      });
      
      //Add event listener for video upload link.
      submissionModal.find('.video-upload a').click(function(){
        showVideoState('processingVideo', $(this));
      });
      
      //Add event listener for processing video.
      //*TOCHANGE* This would change to an event listener for when the video is finished loading since it shows the submit complete state.
      submissionModal.find('.processing a').click(function(){
        showVideoState('submitComplete', $(this));
      });
      
      //Add event listener for the back button.
      submissionModal.find('#back').click(function(){
        showVideoState('videoButtons', '');
      });
      break;
      
    //The original HTML is set for images, so we'll default to images.
    case 'image':
    case 'default':
      showImageState('uploadImage', '');
      
      //Add even listener for uploading image.
      submissionModal.find('.image-upload a').click(function(){
        showImageState('processingImage', $(this));
      });
      
      //Add event listener for processing image.
      //*TOCHANGE* This would change to an event listener for when the image is finished loading since it shows the submit complete state.
      submissionModal.find('.processing a').click(function(){
        showImageState('submitComplete', $(this));
      });
      
      //Add event listener for the back button.
      submissionModal.find('#back').click(function(){
        showImageState('uploadImage', '');
      });    
      break;
  }
  
}

//Show and hide certain video groups based on the current state we should show.
function showVideoState(videoState, $this){
  var submissionModal = $('#submission-modal');
      modalTitle = submissionModal.find('h3'),
      videoSelection = submissionModal.find('.video-selection'),
      videoLinkGroup = submissionModal.find('#video-link-group'),
      processingGroup = submissionModal.find('.processing'),
      submitCompleteGroup = submissionModal.find('.submit-complete'),
      backButton = submissionModal.find('#back');
  
  switch(videoState){
    case 'videoButtons':
      modalTitle.text('Submit a Video');
      videoSelection.removeClass('hide');
      videoSelection.find('a.active').removeClass('active');
      submissionModal.find('.image-upload').addClass('hide');
      submissionModal.find('.video-upload').addClass('hide');
      processingGroup.addClass('hide');
      submitCompleteGroup.addClass('hide');
      backButton.addClass('hide');
      break;
      
    case 'uploadVideo':
      modalTitle.text('Upload a Video');
      submissionModal.find('.video-upload').removeClass('hide');
      videoLinkGroup.addClass('hide');
      videoSelection.addClass('hide');
      backButton.removeClass('hide');
      break;
      
    case 'recordVideo':
      //Use this to display correctly for the record a video button click.
      break;
      
    case 'linkToVideo':
      videoLinkGroup.toggleClass('hide');
      $this.toggleClass('active');
      break;
      
    case 'processingVideo':
      modalTitle.text('Processing...');
      $this.parent().addClass('hide');
      processingGroup.removeClass('hide');
      break;
      
    case 'submitComplete':
      modalTitle.text('Looks Great!');
      processingGroup.addClass('hide');
      submitCompleteGroup.removeClass('hide');
      break;
  }
}

//Show and hide certain image groups based on the current state we should show.
function showImageState(imageState, $this){
  var submissionModal = $('#submission-modal');
      modalTitle = submissionModal.find('h3'),
      processingGroup = submissionModal.find('.processing'),
      submitCompleteGroup = submissionModal.find('.submit-complete'),
      backButton = submissionModal.find('#back');
  
  switch(imageState){      
    case 'uploadImage':
      modalTitle.text('Submit an Image');
      submissionModal.find('.image-upload').removeClass('hide');
      processingGroup.addClass('hide');
      submitCompleteGroup.addClass('hide');
      backButton.addClass('hide');
      break;
      
    case 'processingImage':
      modalTitle.text('Processing...');
      $this.parent().addClass('hide');
      processingGroup.removeClass('hide');
      backButton.removeClass('hide');
      break;
      
    case 'submitComplete':
      modalTitle.text('Looks Great!');
      processingGroup.addClass('hide');
      submitCompleteGroup.removeClass('hide');
      backButton.removeClass('hide');
      break;
  }
}


/* COLORBOX
  * ====================== */
function setupColorBox(){
  //Remove all colorbox functionality in case it had been done before and submissions had been removed from filters.
  $.colorbox.remove();
  
  //Add colorbox functionality to only images that aren't hidden by isotope.
  $('.image').not('.isotope-hidden')
    .colorbox({
       rel:'image',
       width:'849px',
       opacity:0.8,
       scalePhotos: false,
       scrolling: false
    });  
}


/* GENERAL FUNCTIONS
  * ====================== */ 
 //Check if a jQuery selector returns any results.
 $.fn.exists = function () {
    return this.length !== 0;
}