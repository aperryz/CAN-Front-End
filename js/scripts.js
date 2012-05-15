$(function() { //Run when the DOM is ready to be manipulated.    
    
  /* RUN TO SHOW INITIAL PAGE
  * ====================== */
  
  //show the correct content from the start.
  var currentPage = getCurrentPage(),
    pages = getPages(),
    landingPage = showLandingPage(currentPage);
    
  setPrevNextArrows(currentPage);
  
  //Set the correct navigation from the start.
  $('#main-nav a[data-name="' + currentPage + '"]').parent().addClass("active");
  
  
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
  
  
  /* SHOW WELCOME MESSAGE TO NEW USERS WHEN THEY LAND ON THE PROFILE PAGE.
  * ====================== */
  $('body.profile #welcome-msg').modal('show');
  
  
  /* MAIN NAVIGATION AND SHOWING PAGES
  * ====================== */
  //Adjusted from http://css-tricks.com/jquery-magicline-navigation/.
  //Check if the main navigation exists first.
  if($("#main-nav").exists()){
    
    var $el, leftPos, newWidth,
    $mainNav = $("#main-nav"),
    $activeLi = $mainNav.children(".active");

    $mainNav.append("<li id='rollover-bar'></li>");
    var $rollover_bar = $("#rollover-bar");
    
    //We check to see if we are on the main page showing one of the pages.
    //If not the rollover_bar is hidden from the start.
    if($activeLi.exists()){
      $rollover_bar
        .width($activeLi.width())
        .css("left", $activeLi.children(".active a").position().left)
    }
    $rollover_bar
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
      
      //Close colorbox in case they click the navigation when they are in the image modal.
      $.colorbox.close();

      //Handle page movement when a new page is clicked.
      changePage($el.children("a").attr('data-name'));
      

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
        $("#main-nav li a[data-name='" + prevNextPages['prev'] + "']").parent().trigger('click');
      }
      else{ //If they clicked the next arrow.
        $("#main-nav li a[data-name='" + prevNextPages['next'] + "']").parent().trigger('click');
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
        recent : function ( $elem ) {
          return parseInt($elem.find('.sort-recent').text());  //Number
        },
        artist : function ( $elem ) {
          return $elem.find('.sort-artist').text();
        },
        obamaccomplishment : function ( $elem ) {
          return $elem.find('.sort-obamaccomplishment').text();
        },
        liked : function ( $elem ) {
          return parseInt($elem.find('.sort-liked').text()); //Number
        },
        shared : function ( $elem ) {
          return parseInt($elem.find('.sort-shared').text()); //Number
        },
        downloaded : function ( $elem ) {
          return parseInt($elem.find('.sort-downloaded').text()); //Number
        },
        purchased : function ( $elem ) {
          return parseInt($elem.find('.sort-purchased').text()); //Number
        }
      },
      sortBy : 'recent'
      }, function(){
        addGridClasses($container); //Add classes to specific grid images so we can move their rollover content.
    });
    
    
    

    //Fade and slideDown the sorts and filters when you rollover the grid.
    //We use the one() jquery function to remove the event handler after it fires one time.
    $container.one("mouseover", function(){
        $('#sorts-filters').animate({
          opacity: 1,
          height: 'show'
        }, 500);

        //Set filters to stick when we move below the page.
        makeFilterStick();
    });
    

    // Handle the combined filters
    $('.filter a').click(function(evt){
      var $this = $(this), //Filter that was just clicked
          $optionSet = $this.parents('.filter'), //Entire set of filters
          $otherOptionSet = $optionSet.closest('.sort-filter').siblings('.sort-filter').find('.filter'), //Other set of filters
          $allFilter = $optionSet.find('a[data-filter-value="*"]'); //Filter that shows all
            
      //If user clicked a sub that was already selected.  We don't do this for the all selection.
      if($this.attr('data-filter-value') != '*' && $this.hasClass('active')){
        $this.removeClass('active');
        if(!$optionSet.find('a.active').exists()){ //If nothing is checked then reselect all.
          $allFilter.addClass('active');
        }
      }
      //If user clicked a sub and all is selected.
      else if($this.attr('data-filter-value') != '*' && $allFilter.hasClass('active')){
        $allFilter.removeClass('active');
        $this.addClass('active');
      }
      //If user selected all when other subs were selected.
      else if($this.attr('data-filter-value') == '*'){
        $optionSet.find('a').removeClass('active');
        $this.addClass('active');
      }
      //If this is a subcategory of another sub then we uncheck the parent category first.
      else if($this.closest('li').hasClass('sub')){
        $this.closest('li').prev('.parent').find('a').removeClass('active');
        $this.addClass('active');
      }
      //If this is a general sub
      else {
        $this.addClass('active');
      }
      
      var currentGroup = $optionSet.attr('data-filter-group'), 
          otherGroup = $otherOptionSet.attr('data-filter-group'),
          currentSelectors = [],
          currentSelectorsText = [];
      
      //Add all the currently active filters from this group and put them in an array. Then add to the filters object.
      $optionSet.find('a.active').each(function(){
        var $this = $(this);
        currentSelectors.push($this.attr('data-filter-value'));
        currentSelectorsText.push($this.text());
      });
      filters[currentGroup] = currentSelectors;
      
      //Change the text in the title to match the selected filters.
      setSortFilterTitle(currentSelectorsText, $optionSet.siblings('span'));      
      
      //Loop through and create an array in the correct format for isotope.
      var selector = [],
          filterLength = filters[currentGroup].length;
      for (var i = 0; i < filterLength; i++){
       
        //If the other group is defined and isn't set to all then loop through them.
        if(typeof filters[otherGroup] !== 'undefined' && filters[otherGroup][0] != '*'){
          var otherFilterLength = filters[otherGroup].length;
          
          //Loop through the other group for each item.
          for(var j = 0; j < otherFilterLength; j++){
            selector.push(filters[currentGroup][i] + filters[otherGroup][j]);
          }
        }
        else {
          selector.push(filters[ currentGroup ][i]);
        }
        
      }
      
      selector = selector.join(); //Format it how isotope likes it
      
      $container.isotope({
        filter: selector
      }, function(){
        addGridClasses($container); //Add classes to specific grid images so we can move their rollover content.
      });      
      
      //Run colorbox again so those that were filtered out are no longer included.
      setupColorBox();
    });
    
    //Create an array that specifies.  False if we want it to be descending.
    var sortAscending = [];
    sortAscending['recent'] = false;
    sortAscending['artist'] = true;
    sortAscending['obamaccomplishment'] = true;
    sortAscending['liked'] = false;
    sortAscending['shared'] = false;
    sortAscending['downloaded'] = false;
    sortAscending['purchased'] = false;

    //Add click event to sorting links.
    $('#sort a').click(function(){
      var $this = $(this),
          sortName = $this.attr('href').slice(1), // get href attribute, minus the '#'
          sortNameArray = new Array($this.text()); //Create an array to change the title
          
      $container.isotope({
        sortBy : sortName,
        sortAscending: sortAscending[sortName]
      }, function(){
        addGridClasses($container); //Add classes to specific grid images so we can move their rollover content.
      });
      
      //Change the sort title to match the chosen sort
      setSortFilterTitle(sortNameArray, $this.closest('ul').siblings('span'));

      return false;
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
  }//End of if statement to see if filters exist. 
  
  
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
 
 //Setup click events from initial page load in case we're on a standalone content page.
 colorboxClickEvents();
 

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



/* POSTER CONFIRMATION - DISABLE BUTTON UNTIL TERMS AND POSTER CONFIRMED
  * ====================== */ 
$('#confirm-posters input').change(function() {
    var $this = $(this);
    
    if (!$this.is(':checked')) {
      $this.closest('.poster').removeClass('confirmed');
    }
    else {
      console.log()
      $this.closest('.poster').addClass('confirmed');
    }
});    
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
    }, 300, 'swing', function(){
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


/* FILTERS AND GRID
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
        opacity: 1,
        height: 'show'
      }, 3000);
      
      sortsFilters.addClass('low-scroll');
    }
    else {
      sortsFilters.removeClass('low-scroll');
    }
  }); 
}

//Set the title of the sorts and filters when they're changed.
function setSortFilterTitle(currentSelectorsText, titleElement){
  currentSelectorsText = currentSelectorsText.join(', ');
  
  //If the text is too long cut it and add '...' to it.
  if(currentSelectorsText.length > 30){
    currentSelectorsText = currentSelectorsText.substring(0,30) + '...';
  }
  
  titleElement.text(currentSelectorsText);
}

//Add classes to the bottom, left and right elements so we can style their rollover content so it doesn't cut off.
function addGridClasses($container){
  var $images = $container.find('.image').not('.isotope-hidden'),
    farRightPos = $container.width() - $images.outerWidth(true),
    bottomPos = $container.height() - $images.outerHeight(true);

  $images.each(function(){
    var $this = $(this),
        position = $this.data('isotope-item-position');
    
    //Remove all the classes first.
    $this.removeClass('left right top bottom');

    //Add far left or far right class.
    if(position.x == 0){
      $this.addClass('left');
    }
    else if(position.x == farRightPos){
      $this.addClass('right');
    }

    //Add top row class.
    if(position.y == 0){
      $this.addClass('top');
    }
    //Add bottom row class.
    if(position.y == bottomPos){
      $this.addClass('bottom');
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
  var submissionModal = $('#submission-modal'),
      modalTitle = submissionModal.find('h3'),
      videoSelection = submissionModal.find('.video-selection'),
      videoLinkGroup = submissionModal.find('#video-link-group'),
      processingGroup = submissionModal.find('.processing'),
      submitCompleteGroup = submissionModal.find('.submit-complete'),
      backButton = submissionModal.find('#back');
  
  switch(videoState){
    case 'videoButtons':
      modalTitle.text('Submit A Video');
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
  var submissionModal = $('#submission-modal'),
      modalTitle = submissionModal.find('h3'),
      processingGroup = submissionModal.find('.processing'),
      submitCompleteGroup = submissionModal.find('.submit-complete'),
      backButton = submissionModal.find('#back');
  
  switch(imageState){      
    case 'uploadImage':
      modalTitle.text('Submit A Poster');
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
       scrolling: false,
       top: "110px"
    });  
    
  //Add establish click events again when colorbox runs
  $(document).bind('cbox_complete', colorboxClickEvents);
}

function colorboxClickEvents(){
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
}



/* GENERAL FUNCTIONS
  * ====================== */ 
 //Check if a jQuery selector returns any results.
 $.fn.exists = function () {
    return this.length !== 0;
}