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
  
  
  /* SORTS, FILTERS, ISOTOPES AND IMAGES
  * ====================== */ 
  var $container = $('#images'),
  filters = {};
      
  $container.isotope({
    itemSelector: '.image',
    getSortData : {
      //SortOne is a regular text field.  We sort alphabetically.
      one : function ( $elem ) {
        return $elem.find('.sort-one').text();
      },
      //SortTwo is a number so we are going to cast it to an integer then sort counting up.
      two : function ( $elem ) {
        return parseInt($elem.find('.sort-two').text(), 10);
      }
    }
  });  
  $container.isotope({
    sortBy : 'one'
  }); //Start sorting by letters.

  // Handle the combined filters
  $('.filter a').click(function(){
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

    return false;
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

  //When hovering over the images dropdown text over the top.
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
    
  //Make sorts and filters fixed once we scroll down.
  var $window = $(window),
  sortsFilters = $('#sorts-filters');
  sortsFiltersTop = sortsFilters.offset();
  sortsFiltersTop = sortsFiltersTop.top;

  $window.scroll(function(e){
    if ($window.scrollTop() > sortsFiltersTop) {
      sortsFilters.addClass('low-scroll');
    }
    else {
      sortsFilters.removeClass('low-scroll');
    }
  }); 
    
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
  
  
  /* SETUP SUBMISSION MODAL
  * ====================== */ 
  setupSubmissionModal($('#submission-modal'));
  
  
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
      console.log(thisSocialBox.siblings());
      thisSocialBox.removeClass('hide');
      thisSocialBox.siblings().addClass('hide');
   });
});
    
}); //END OF DOCUMENT READY FUNCTION



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
  //We pull the max number from the data-number attribute on the container span.
  var maxNumber = containerSpan.attr('data-number');
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
       width:"50%",
       opacity:0.8
    });  
}