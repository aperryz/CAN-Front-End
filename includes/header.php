<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Campaign Title</title>
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- We can talk about whether we want to include this for better IE support. -->
    <!-- Le HTML5 shim, for IE6-8 support of HTML elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Stylesheets -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/styles.css" rel="stylesheet">

    <!-- Typekit files -->
    <!-- The domain must be adjusted on typekit.com before these can be used outside of localhost -->
    <script type="text/javascript" src="http://use.typekit.com/tgl2squ.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>

    <!-- Le fav and touch icons -->
    <link rel="shortcut icon" href="images/favicon.ico">
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">
  </head>

  <body>
    <div class="navbar navbar-fixed-top">
      <!-- CAN Pulldown bar -->
      <div class="fill dropdown">
        <div class="container">
          <ul class="nav" id="dropdown-nav">
            <li><a href="#home">All Campaigns</a></li>
            <li class="sep">|</li>
            <li><a href="#about">All Partners</a></li>
            <li class="sep">|</li>
            <li><a href="#questions">All Causes</a></li>
          </ul>
          <a class="brand" href="#">Creative Action Network</a>
        </div>
      </div>
      
      <!-- Main navigation bar -->
      <div class="fill">
        <div class="container">
          <a class="brand" href="#home" id="logo">Campaign Title</a>
          <ul class="nav" id="main-nav">
            <li><a href="#home" class="home">Home</a></li>
            <li class="sep">|</li>
            <li><a href="#about">About</a></li>
            <li class="sep">|</li>
            <li><a href="#questions">Questions</a></li>
            <li class="sep">|</li>
            <li><a href="#submitting" class="submit">Submitting</a></li>
          </ul>
          
          <a id="pulldown-btn" class="pull-right">CAN</a>
          <button id="submit-btn" class="btn pull-right" type="submit">Submit</button>
          <ul class="nav login">
            <li><a id="login-link" data-toggle="modal" href="#login-reg-modal">Login</a></li>
            <li class="sep">|</li>
            <li><a id="register-link" data-toggle="modal" href="#login-reg-modal">Register</a></li>
          </ul>

        </div>
      </div>
      
      <!-- Submission confirmation fixed bar -->
      <div class="fill submit-bar" id="share-bar">
        <div class="container">
          <a href="#" class="edit">Edit</a>
          <span>
            How Does This Look?
            <form>
              <button type="submit" class="btn">Publish</button>
            </form>
          </span>
          
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