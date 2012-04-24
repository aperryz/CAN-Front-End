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

  <body>
    <div class="navbar navbar-fixed-top">
      
      <!-- Main navigation bar -->
      <div class="fill">
        <div class="container">
          <a class="brand" href="#home" id="logo">Campaign Title</a>
          <ul class="nav" id="main-nav">
            <li><a href="#home" class="home">Home</a></li>
            <li class="sep">|</li>
            <li><a href="#about">About</a></li>
            <li class="sep">|</li>
            <li><a href="#the-book">The Book</a></li>
            <li class="sep">|</li>
            <li><a href="#contributing" class="submit">Contributing</a></li>
          </ul>
          
          <a id="pulldown-btn" class="pull-right">CAN</a>
          <button id="submit-btn" class="btn pull-right" type="submit">Contribute</button>
          <ul class="nav login">            
            <li><a id="register-link" data-toggle="modal" href="#login-reg-modal">Register</a></li>
            <li class="sep">|</li>
            <li><a id="login-link" data-toggle="modal" href="#login-reg-modal">Login</a></li>
          </ul>

        </div>
      </div>
      
      <!-- Submission confirmation fixed bar -->
      <div class="fill submit-bar" id="share-bar">
        <div class="container">
          <a href="#" class="edit">Edit</a>
          <span>
            How Does This Look?
          </span>
          <form>
              <button type="submit" class="btn">Publish</button>
          </form>
          
        </div>
      </div>
      
      <!-- Share fixed bar -->
      <div class="fill submit-bar" id="submit-confirm-bar">
        <div class="container">
          <span>
            Great! Now Share It
            <a href="#">Fb</a>
            <a href="#">Tw</a>
            <a href="#">Tu</a>
          </span>
          <a href="#" class="close">x</a>
        </div>
      </div>
      
    </div>