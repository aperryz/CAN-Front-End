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

  <body class="<?php echo $page_class; ?>">
    