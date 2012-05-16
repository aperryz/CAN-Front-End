<?php $page_class = 'profile'; //Used to add a body class to each page.  ?>
<?php include_once 'includes/header.php'; ?> 
<?php include_once 'includes/navigation.php'; ?>

<div id="pages-container">
  <div class="container">
    <div id="pages">
      <div class="page">
        <div id="user-info">
          <img class="no-photo" src="img/dfo/add-profile-pic.png" height="100" width="100" alt="Add Profile Photo" title="Add Profile Photo" />
          
          <!-- Spike's Photo >> Remove no-photo class for all real pictures
            <img src="img/dfo/spike-lee-profile.jpg" height="96" width="96" alt="Spizike Lee" title="Spizike Lee Profile" />
          -->
          
          <div id="user-content">
            <div class="user-stats">
              <span class="heavy">6</span> Posters,
              <span class="heavy">402</span> Downloads,
              <span class="heavy">6,201</span> Shares
            </div>
            <h1>Spizike Lee</h1>
            <div id="bio">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies suscipit interdum.
                In volutpat bibendum suscipit. Praesent ac dui leo, id faucibus ipsum. Vivamus justo metus, lacinia nec sodales at, rhoncus vitae felis.
                Vestibulum turpis erat, rutrum ac viverra eget, pharetra et neque.</p>
            </div>
            <div class="circle-nav">
              <a href="#" class="circle">&nbsp;</a>
              <a href="#" class="circle">&nbsp;</a>
              <a href="#" class="circle">&nbsp;</a>
              <a href="#" class="circle">&nbsp;</a>
              <a href="#">Brooklyn</a>
            </div>
          </div> 
          
        </div>
      </div>
    </div>
  </div><!-- End .container div -->
</div><!-- End #pages-container div -->


<div class="container">
  <div class="no-submissions">
    <p>You haven't contributed any posters yet!</p>
    <a class="btn" href="index.php#contributing">Contribute</a>
  </div>
  
<?php //include_once 'includes/grid.php';  //Uncomment this include and remove .no-submissions above to show grid. ?>  
  
<?php include_once 'includes/modals.php'; ?>
  
<?php include_once 'includes/footer.php'; ?>