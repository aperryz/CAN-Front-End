<?php $page_class = 'settings'; //Used to add a body class to each page. ?>
<?php include_once 'includes/header.php'; ?> 

  <div class="container">
      
      <div class="dfo-logo hide-text">Design for Obama Logo</div>
      
      <h1>Edit Profile</h1>
      
      
      <form class="form-horizontal">
        <fieldset>
          
          <div class="control-group">
            <label class="control-label" for="input01">Name</label>
            <div class="controls">
              <input type="text" class="input-xlarge" id="input01">
              <p class="help-block">First and last name please.</p>
            </div>
          </div>
          
          <div class="control-group">
            <label class="control-label" for="input01">Email</label>
            <div class="controls">
              <input type="text" class="input-xlarge" id="input01">
              <p class="help-block">ex. barack@whitehouse.gov</p>
            </div>
          </div>
          
          <div class="control-group">
            <label class="control-label" for="input01">Location</label>
            <div class="controls">
              <input type="text" class="input-xlarge" id="input01">
              <p class="help-block">ex. San Francisco, CA, USA</p>
            </div>
          </div>
          
          <div class="control-group">
            <label class="control-label" for="input01">Biography</label>
            <div class="controls">
              <textarea class="input-xlarge" id="input01" ></textarea>
              <p class="help-block">Tell us a little about you.</p>
            </div>
          </div>
          
          <div class="control-group">
            <label class="control-label" for="input01">Website</label>
            <div class="controls">
              <input type="text" class="input-xlarge" id="input01">
              <p class="help-block">ex. http://www.dfo.com</p>
            </div>
          </div>
          
          
        </fieldset>
      </form>
    
<?php include_once 'includes/footer.php'; ?>