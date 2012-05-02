<?php
//Pull the id so you can get the information for that submission from the database
if(isset($_GET['id'])){
  $submission_id = htmlspecialchars($_GET['id']);
  $submission_id = (int) $submission_id;
}

//All the content shown below is filler.  It should be replaced using php and the submission id.
?>

<!-- ColorBox for displaying individual submissions in modal view. -->
<!-- Inline height for #colorbox-info needs to be adjusted with PHP to content height to avoid cutting off content -->
<div id="colorbox-info" style="height: 1300px;">
  <div id="image-holder">
    <img src="img/dfo/designs/example-poster-443-573.jpg" width="435" height="564" alt="Crazy Awesome Poster Alt" title="Crazy Totally Sweet Poster Title" />
    <div class="fb-like" data-href="http://bignewideas.com/" data-send="false" data-layout="button_count" data-width="40" data-show-faces="false" data-colorscheme="light" data-font="lucida grande"></div>
  </div>
  <div id="submission-content">
    
    <div id="submission-engage">
      <div class="submission-engage-box download">
        <h5>Download</h5>
        <div class="submission-engage-content">
          <div class="download-type first">
            <img src="img/85-11.png" alt="8.5x11" width="50" height="65" />
            <h6>8.5"x11"</h6>
            <span class="download-size">2550x3300 pixels</span>
            <a href="#">JPG</a> | <a href="#">PDF</a>
          </div>
          <div class="download-type">
            <img src="img/85-11.png" alt="8.5x11" width="50" height="65" />
            <h6>17"x2"</h6>
            <span class="download-size">Four, titled 8.5"x11"s</span>
            <a href="#">PDF</a>
          </div>
          <div class="download-type">
            <img src="img/85-11.png" alt="8.5x11" width="50" height="65" />
            <h6>25.5"x33"</h6>
            <span class="download-size">Nine, titled 8.5"x11"s</span>
            <a href="#">PDF</a>
          </div>
        </div>
      </div>
      <div class="submission-engage-count download">235 times</div>
      
      <div class="submission-engage-box purchase">
        <h5>Purchase</h5>
        <div class="submission-engage-content">
          Vivamus interdum, justo a vehicula ullamcorper, diam orci congue est, sit amet tempor est libero sed velit. Sed eu mauris non nunc feugiat varius.
        </div>
      </div>
      <div class="submission-engage-count purchase">96 times</div>
      
      <div class="submission-engage-box share">
        <h5>Share</h5>
        <div class="submission-engage-content">
          <img src="img/share-filler.png" alt="share filler" class="share-button" width="68" height="68"  />
          <img src="img/share-filler.png" alt="share filler" class="share-button" width="68" height="68"  />
          <img src="img/share-filler.png" alt="share filler" class="share-button" width="68" height="68"  />
        </div>
      </div>
      <div class="submission-engage-count share">2.5K times</div>
    </div><!-- #submission-engage -->
    
    
    
      <div id="submission-desc">
        <h2>Submission ID: <?php if(isset($submission_id)) echo $submission_id; ?></h2>
        <address>by <a href="mailto:info@jgvisual.com">Don Button</a>, San Francisco, CA</address>
        <div id="submission-description"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
      </div>

      <div id="submission-social">
        <div id="social-headings">
          <h4 class="social-heading active" data-social-box="comments">Comments (3)</h4>
          <h4 class="social-heading last" data-social-box="on-twitter">On Twitter (2)</h4>
        </div>
        <div id="social-boxes">
          <div id="comments">
            <form class="form-search">
              <textarea rows="1"></textarea>
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

  </div><!-- #submittion-content -->
</div><!-- #colorbox-info -->