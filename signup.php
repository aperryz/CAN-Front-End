<?php $page_class = 'signup'; //Used to add a body class to each page. ?>
<?php include_once 'includes/header.php'; ?> 

  <div class="container">
      
      <div class="dfo-logo hide-text">Design for Obama Logo</div>
      
      <!-- Artist Beta Signup Form 
      <div id="signup-form">
        <h1>2008 Artist Beta Signup</h1>

        <a href="#" class="facebook-login">Login with Facebook</a>
        <a href="#" class="twitter-login">Login with Twitter</a>

        <p>Or create an account</p>

        <form>
          <input type="text" id="name" class="span3" placeholder="Name">
          <input type="text" id="email" class="span3" placeholder="Email">
          <input type="password" id="password" class="span3" placeholder="Password">
          <input type="password" id="confirm-password" class="span3" placeholder="Confirm Password">


          <label class="checkbox">
            <input type="checkbox"> I agree to the <a href="#">terms and stuff</a>
          </label>
          <button type="submit" class="btn">Create Account</button>
        </form>
      </div> --><!-- #signup-form -->
      
      
      
      <div id="confirm-posters">
        <h1>In order to migrate your work from 2008, we need to ensure each poster below is yours.  Please uncheck any that are not yours and click the button to proceed.</h1>
        <form>
        
        <div id="posters">
          
          <div class="poster confirmed">
            <img src="img/dfo/designs/example-poster-192-247.jpg" width="192" height="247" alt="Awesome Poster" title="Awesome Poster for Barack Obama" />
            <label class="checkbox">
              <input type="checkbox" checked="checked"> This is my really cool poster
            </label>
          </div><!-- .poster -->
          
          <div class="poster confirmed">
            <img src="img/dfo/designs/example-poster-192-247.jpg" width="192" height="247" alt="Awesome Poster" title="Awesome Poster for Barack Obama" />
            <label class="checkbox">
              <input type="checkbox" checked="checked"> This is my very awesome poster
            </label>
          </div><!-- .poster -->
          
          <div class="poster confirmed">
            <img src="img/dfo/designs/example-poster-192-247.jpg" width="192" height="247" alt="Awesome Poster" title="Awesome Poster for Barack Obama" />
            <label class="checkbox">
              <input type="checkbox" checked="checked"> This is my completely great poster
            </label>
          </div><!-- .poster -->
          
          <div class="poster confirmed">
            <img src="img/dfo/designs/example-poster-192-247.jpg" width="192" height="247" alt="Awesome Poster" title="Awesome Poster for Barack Obama" />
            <label class="checkbox">
              <input type="checkbox" checked="checked"> This is my wonderful poster
            </label>
          </div><!-- .poster -->
          
          <div class="poster confirmed">
            <img src="img/dfo/designs/example-poster-192-247.jpg" width="192" height="247" alt="Awesome Poster" title="Awesome Poster for Barack Obama" />
            <label class="checkbox">
              <input type="checkbox" checked="checked"> This is my beautiful poster
            </label>
          </div><!-- .poster -->

        </div><!-- #posters -->
        
        <div id="proceed-container">
          <p>By clicking proceed you agree to <a href="#">our legal jargon</a>.</p>
          <button id="proceed" type="submit" class="btn">Proceed</button>
        </div><!-- #proceed-container -->
        
        </form> 
        
      </div><!-- #confirm-posters -->
    
<?php include_once 'includes/footer.php'; ?>