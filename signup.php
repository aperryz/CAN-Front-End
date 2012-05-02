<?php $page_class = 'signup'; //Used to add a body class to each page. ?>
<?php include_once 'includes/header.php'; ?> 

  <div class="container">
      
      <div class="dfo-logo hide-text">Design for Obama Logo</div>
      
      <div id="signup-form" class="hide">
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
      </div><!-- #signup-form -->
      
      
      
      <div id="confirm-posters">
        <h1>In order to migrate your work from 2008, we need you to confirm that each poster below is yours and that it is ok to migrate:</h1>
        
        <img src="img/dfo/designs/confirm-image.jpg" width="192" height="247" alt="Awesome Poster" title="Awesome Poster for Barack Obama" />
        
        <form>
          <label class="checkbox">
            <input type="checkbox"> This is my poster and I agree to the <a href="#">terms</a>
          </label>
          
          <div class="button-break"> 
            <a href="#" class="disagree">No, this isn’t mine or I don’t agree to the terms</a>
          </div>
          
          <button id="proceed" type="submit" class="btn" disabled>Proceed</button>
        </form>        
        
      </div><!-- #confirm-posters -->
    
<?php include_once 'includes/footer.php'; ?>