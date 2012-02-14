<!-- MODALS -->
<!-- Login and Register Modal -->
<div class="modal hide fade" id="login-reg-modal">
  <div class="modal-body">
    <form class="form-horizontal">
      <div class="control-group">
        <input type="text" class="input-xlarge" id="logreg-name" placeholder="Name">
      </div>
      <div class="control-group hide" id="logreg-email-group">
        <input type="text" class="input-xlarge" id="logreg-email" placeholder="Email">
      </div>
      <div class="control-group">
        <input type="password" class="input-xlarge" id="logreg-password" placeholder="Password">
      </div>
      <div class="control-group text-links" id="login-group">
        <a href="#forgot-password" id="forgot-password-link">I forgot my password</a> /
        <a href="#register" id="create-account-link">I need to create an account</a>
      </div>
      <div class="control-group text-links hide" id="register-group">
        <a href="#login" id="login-account-link">I need to login to my account</a>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-large" id="login-reg-button">Login</button>
        <a href="#" class="facebook-login">Login with Facebook</a>
        <a href="#" class="twitter-login">Login with Twitter</a>
      </div>
    </form>
  </div>
</div>

<!-- Submission Modal -->
<!-- Adjust data-submission-type between 'video' and 'image' to show the different submission processes. -->
<div class="modal hide fade" id="submission-modal" data-submission-type="video">
  <div class="modal-header">
    <a class="close" data-dismiss="modal">×</a>
    <a href="#" class="hide" id="back">Back</a>
    <h3>Submit an Image</h3>
  </div>
  <div class="modal-body">
    <form class="form-horizontal">
      <div class="control-group image-upload">
        <a href="#">
          Click to upload an image file
          <span>Or drag an image from your desktop</span>
        </a>
      </div>
      <div class="control-group video-selection hide">
        <a href="#" id="upload-video-select" class="select-video">Upload a video</a>
        <a href="#" id="record-video-select" class="select-video">Record a video</a>
        <a href="#" id="link-video-select" class="select-video">Link to a video</a>
      </div>
      <div class="control-group video-upload hide">
        <a href="#">
          Click to upload a video file
          <span>Or drag a video from your desktop</span>
        </a>
      </div>
      <div class="control-group processing hide">
        <a href="#">
          Please wait while we process your file
          <span>Click again to see submit complete state.</span>
        </a>
      </div>
      <div class="control-group submit-complete hide">
        <img src="http://placehold.it/203x264" width="203" height="264" alt="filler-alt" title="filler-title" />
      </div>
      <div class="control-group hide" id="video-link-group">
        <input type="text" class="input-xlarge" id="video-link" placeholder="Link">
      </div>
      <div class="control-group">
        <input type="text" class="input-xlarge" id="title" placeholder="Title">
      </div>
      <div class="control-group">
        <textarea class="input-xlarge" id="description" rows="3" placeholder="Description"></textarea>
      </div>
      <div class="control-group">
        <select id="select01" class="input-xlarge">
          <option>Tag1</option>
          <option>Tag2</option>
          <option>Tag3</option>
          <option>Tag4</option>
          <option>Tag5</option>
        </select>
      </div>
      <div class="control-group">
        <label class="checkbox inline">
          <input type="checkbox" id="inlineCheckbox1" value="option1"> I agree to the <a href="#">terms and service agreement</a> thingy.
        </label>
      </div>
    </form>
  </div>
  <div class="modal-footer">
    <a href="#" class="btn btn-large">Preview</a>
  </div>
</div>