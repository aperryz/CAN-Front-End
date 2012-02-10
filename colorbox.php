<?php
  //Pull the id so you can get the information for that submission from the database
  $submission_id = htmlspecialchars($_GET['id']);
  $submission_id = (int) $submission_id;
  
  //All the content shown below if filler.  It should be replaced using php and the submission id.
?>
<!-- ColorBox -->
<div id="colorbox-info">
  <div id="image-holder">
    <img src="http://placehold.it/435x564" />
    <div class="fb-like" data-href="http://bignewideas.com/" data-send="false" data-layout="button_count" data-width="50" data-show-faces="false" data-colorscheme="light" data-font="lucida grande"></div>
  </div>
  <div id="submission-content">

    <div id="submission-desc">
      <h3>Submission ID: <?php echo $submission_id; ?></h3>
      <address>by <a href="mailto:info@jgvisual.com">Don Button</a>, San Francisco, CA</address>
      <div id="submission-description"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
    </div>
    
    <div id="submission-social">
      <div id="social-headings">
        <h3 class="social-heading active" data-social-box="comments">Comments (3)</h3>
        <h3 class="social-heading" data-social-box="on-twitter">On Twitter (2)</h3>
      </div>
      <div id="social-boxes">
        <div id="comments">
          <form class="form-search" _lpchecked="1">
              <input type="text" />
              <button type="submit" class="btn">Add Comment</button>
          </form>
          <ul id="comments-list">
            <li>
              <span class="comment-author">jonny_eh 37 minutes ago | <a href="#">link</a></span>
              I read the overview but I'm still not clear on why/how I would use this.
              What other existing frameworks would I use this instead of?
              <a href="#" class="reply">reply</a>
            </li>
            <ul>
              <li>
                <span class="author">ryanwatkins 32 minutes ago | <a href="#">link</a></span>
                Its a good mobile development framework. It would likely compete with things like Sencha Touch, jQuery Mobile, Jo, and other frameworks targeted at building mobile and hybrid applications.
                <a href="#" class="reply">reply</a>
              </li>
            </ul>
            <li class="last">
              <span class="author">jonny_eh 37 minutes ago | <a href="#">link</a></span>
              I read the overview but I'm still not clear on why/how I would use this.
              What other existing frameworks would I use this instead of?
              <a href="#" class="reply">reply</a>
            </li>
          </ul>
        </div>                
        <div id="on-twitter" class="hide">
          <ul id="tweets-list">
            <li>
              <span class="author">@1200posters  35 minutes ago | <a href="#">link</a></span>
              "Ask what's possible, not what's wrong. Keep asking." - Poster 2 from Catherine Chi 1200posters.com/posters/cather…
            </li>
            <li class="last">
              <span class="author">@jgvisual  47 minutes ago | <a href="#">link</a></span>
              Love this submission.  Just flat out awesome.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div id="submission-engage">
      <div class="submission-engage-box">
        <h4>Download</h4>
        <div class="submission-engage-content">
          <div class="download-type">
            <img src="img/85-11.png" alt="8.5x11" />
            File: PDF<br />
            Paper: 8.5"x11"<br />
            Size: 8.5"x11"
          </div>
          <div class="download-type">
            <img src="img/17-22.png" alt="8.5x11" />
            File: PDF<br />
            Paper: (8.5"x11")<sup>4</sup><br />
            Size: 17"x22"
          </div>
          <div class="download-type">
            <img src="img/255-33.png" alt="8.5x11" />
            File: PDF<br />
            Paper: (8.5"x11")<sup>9</sup><br />
            Size: 25.5"x33"
          </div>
        </div>
      </div>
      <div class="submission-engage-box">
        <h4>Purchase</h4>
        <div class="submission-engage-content">
          Vivamus interdum, justo a vehicula ullamcorper, diam orci congue est, sit amet tempor est libero sed velit. Sed eu mauris non nunc feugiat varius.
        </div>
      </div>
      <div class="submission-engage-box">
        <h4>Share</h4>
        <div class="submission-engage-content">
          <img src="img/share-filler.png" alt="share filler" class="share-button" />
          <img src="img/share-filler.png" alt="share filler" class="share-button" />
          <img src="img/share-filler.png" alt="share filler" class="share-button" />
        </div>
      </div>                
    </div>

  </div>
</div>

<!-- Facebook Like button -->
<!-- Code available at http://developers.facebook.com/docs/reference/plugins/like/ -->
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=131925520250901";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>