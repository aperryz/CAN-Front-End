<?php $page_class = 'settings'; //Used to add a body class to each page. ?>
<?php include_once 'includes/header.php'; ?> 

  <div class="container">
      
      <div class="dfo-logo hide-text">Design for Obama Logo</div>
      
      <h1>Edit Profile</h1>
      
      <form class="form-horizontal" action="profile.php" method="post">
         
          <div class="control-group">
            <label class="control-label" for="name">Name</label>
            <div class="controls">
              <input type="text" class="input-xlarge" id="name">
              <p class="help-block">First and last name.</p>
            </div>
          </div>
          
          <div class="control-group">
            <label class="control-label" for="email">Email</label>
            <div class="controls">
              <input type="text" class="input-xlarge" id="email">
              <p class="help-block">ex. barack@whitehouse.gov</p>
            </div>
          </div>
          
          <div class="control-group">
            <label class="control-label" for="location">Location</label>
            <div class="controls">
              <input type="text" class="input-xlarge" id="location">
              <p class="help-block">ex. San Francisco, CA, USA</p>
            </div>
          </div>
          
          <div class="control-group">
            <label class="control-label" for="biography">Biography</label>
            <div class="controls">
              <textarea class="input-xlarge" rows="5" id="biography" ></textarea>
              <p class="help-block">Tell us a little about you.</p>
            </div>
          </div>
          
          <div class="control-group">
            <label class="control-label" for="website">Website</label>
            <div class="controls">
              <input type="text" class="input-xlarge" id="website">
              <p class="help-block">ex. http://www.dfo.com</p>
            </div>
          </div>
          
          
          <div class="control-group">
            <label class="control-label" for="avatar">Avatar</label>
            <div class="controls">
              <input type="file" class="input-xlarge" id="avatar">
              <p class="help-block">Upload your picture. Square pictures work best.</p>
            </div>
          </div>
          
          <div class="control-group">
            <label class="control-label">Login with Facebook or Twitter</label>
            <div class="controls">
              <a href="#" class="facebook-login">Login with Facebook</a>
              <a href="#" class="twitter-login">Login with Twitter</a>
            </div>
          </div>        
          
          <div class="form-actions">
            <button type="submit" class="btn">Save Profile</button>
          </div>
      </form>
    
<?php include_once 'includes/footer.php'; ?>