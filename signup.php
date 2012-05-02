<!DOCTYPE html>
<!--[if IE 7]>    <html class="lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en"> <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <title>Design for Obama</title>
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Stylesheets -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/styles.css" rel="stylesheet">
    <link href="css/dfo.css" rel="stylesheet">
    
    <!--HTML5 Shiv for IE6 - IE8 HTML5 Support - Must place before body tag -->
    <!--[if lt IE 9]><script src="js/html5.js"></script><![endif]-->

    <!-- Typekit files -->
    <!-- The domain must be adjusted on typekit.com before these can be used outside of localhost -->
    <!-- We use an asynchronous download and hide the text while typekit is loading. -->
    <script type="text/javascript">
      TypekitConfig = {
        kitId: 'tgl2squ',
        scriptTimeout: 3000
      };
      (function() {
        var h = document.getElementsByTagName('html')[0];
        h.className += ' wf-loading';
        var t = setTimeout(function() {
          h.className = h.className.replace(/(\s|^)wf-loading(\s|$)/g, '');
          h.className += ' wf-inactive';
        }, TypekitConfig.scriptTimeout);
        var tk = document.createElement('script');
        tk.src = '//use.typekit.com/' + TypekitConfig.kitId + '.js';
        tk.type = 'text/javascript';
        tk.async = 'true';
        tk.onload = tk.onreadystatechange = function() {
          var rs = this.readyState;
          if (rs && rs != 'complete' && rs != 'loaded') return;
          clearTimeout(t);
          try { Typekit.load(TypekitConfig); } catch (e) {}
        };
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(tk, s);
      })();
    </script>

    <!-- Favicon and Touch Icons -->
    <link rel="shortcut icon" href="images/favicon.ico">
    <link rel="apple-touch-icon" href="#">
    <link rel="apple-touch-icon" sizes="72x72" href="#">
    <link rel="apple-touch-icon" sizes="114x114" href="#">
  </head>

  <body class="signup">
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
      
    </div><!-- .container -->
    
    
    <!-- Javascript files -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/jquery-1.7.1.min.js"><\/script>')</script>
    <script src="js/jquery.isotope.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.hover-intent.min.js"></script>
    <script src="js/jquery.colorbox.js"></script>
    <script src="js/jquery.placeholder.min.js"></script>
    <script src="js/scripts.js"></script>

    <!-- Don't forget about Google Analytics here -->
  </body>
</html>