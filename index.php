<?php include_once 'includes/header.php'; ?>

    <div class="container">
      <div id="pages">
        <div class="page">
          <div class="page-header">
            <h1><a name="home">Longer Campaign Title</a></h1>
          </div>
          <div class="row">
            <div class="span12">
              <p>Campaign description lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation.</p>

            </div>
          </div>
        </div>

        <div class="page">
          <div class="page-header">
            <h1><a name="about">About Campaign Title</a></h1>
          </div>
          <div class="row">
            <div class="span12">
              <p>Morbi ac tortor ac augue sollicitudin cursus. Nunc sagittis, ipsum quis congue venenatis, tortor sapien vulputate ante, in hendrerit mi risus eu augue. Nam sed ultricies sem. Quisque pharetra vestibulum nibh et faucibus. Aliquam faucibus pellentesque massa non venenatis. Nunc tristique ante vel diam rhoncus nec eleifend est mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget mauris vel arcu ullamcorper aliquet. Sed tempus posuere mauris non sagittis.</p>
              <div class="row">
                <div class="span4 count">
                  <span class="num" data-number="757"></span>
                  Posters Aggregated
                </div>
                <div class="span4 count">
                  <span class="num" data-number="306"></span>
                  Participating Artists
                </div>
                <div class="span4 count">
                  <span class="num" data-number="62"></span>
                  Online Poster Views
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="page">
          <div class="page-header">
            <h1><a name="questions">Questions About Campaign Title</a></h1>
          </div>
          <div class="row">
            <div class="span12">
              <p>Morbi ac tortor ac augue sollicitudin cursus. Nunc sagittis, ipsum quis congue venenatis, tortor sapien vulputate ante, in hendrerit mi risus eu augue. Nam sed ultricies sem. Quisque pharetra vestibulum nibh et faucibus. Aliquam faucibus pellentesque massa non venenatis. Nunc tristique ante vel diam rhoncus nec eleifend est mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget mauris vel arcu ullamcorper aliquet. Sed tempus posuere mauris non sagittis.</p>
            </div>
          </div>
        </div>

        <div class="page">
          <div class="page-header">
            <h1><a name="submitting">Submitting to Campaign Title</a></h1>
          </div>
          <div class="row">
            <div class="span12">
              <p>Morbi ac tortor ac augue sollicitudin cursus. Nunc sagittis, ipsum quis congue venenatis, tortor sapien vulputate ante, in hendrerit mi risus eu augue. Nam sed ultricies sem. Quisque pharetra vestibulum nibh et faucibus. Aliquam faucibus pellentesque massa non venenatis. Nunc tristique ante vel diam rhoncus nec eleifend est mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget mauris vel arcu ullamcorper aliquet. Sed tempus posuere mauris non sagittis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in. Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. isquavoluptatem. Ut enim ad minima veniam, que consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              <p>Morbi ac tortor ac augue sollicitudin cursus. Nunc sagittis, ipsum quis congue venenatis, tortor sapien vulputate ante, in hendrerit mi risus eu augue. Nam sed ultricies sem. Quisque pharetra vestibulum nibh et faucibus. Aliquam faucibus pellentesque massa non venenatis. Nunc tristique ante vel diam rhoncus nec eleifend est mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget mauris vel arcu ullamcorper aliquet. Sed tempus posuere mauris non sagittis.</p>
              <div class="row">
                <div class="span6 offset3">
                  <button class="btn btn-large">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="page-control prev">About</a>
        <a class="page-control next">Submitting</a>
      </div>
      <!-- End of the pages -->

      <!-- Begin image gallery -->
      <div class="row" id="sorts-filters">
        <div class="span3 sort-filter">
          <span>Sorting Control</span>
          <ul id="sort" class="hide">
            <li><a href="#one" class="active">Sort By Letter</a></li>
            <li><a href="#two">Sort By Number</a></li>
          </ul>
        </div>
        <div class="span3 sort-filter">
          <span>Filter 1 - Eye Color</span>
          <ul id="filter-one" class="hide filter" data-filter-group="eyes">
            <li><a data-filter-value="" href="#" class="active">All Eye Colors</a></li>
            <li><a data-filter-value=".blue" href="#">Blue Eyes</a></li>
            <li><a data-filter-value=".green" href="#">Green Eyes</a></li>
            <li><a data-filter-value=".brown" href="#">Brown Eyes</a></li>
          </ul>
        </div>
        <div class="span3 sort-filter">
          <span>Filter 2 - Job</span>
          <ul id="filter-two" class="hide filter" data-filter-group="job">
            <li><a data-filter-value="" href="#" class="active">All Jobs</a></li>
            <li><a data-filter-value=".designer" href="#">Designers</a></li>
            <li><a data-filter-value=".programmer" href="#">Programmers</a></li>
          </ul>
        </div>
        <div class="span3 image-form">
          <form class="form-search" _lpchecked="1">
            <input type="text" placeholder="Search" />
            <button type="submit" class="btn">Go</button>
          </form>
        </div>
      </div>

      <!-- Begin image gallery -->
      <div class="row">
        <div class="span12" id="images">
          <div class="image brown programmer" data-colorbox-url="includes/colorbox.php?id=34">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">Bill Nye</p>
              <p class="sort-two">628</p>
            </div>
          </div>
          <div class="image blue programmer" data-colorbox-url="includes/colorbox.php?id=33">
            <img src="http://lorempixel.com/145/187/sports" />
            <div class="img-content">
              <p class="sort-one">Athlete</p>
              <p class="sort-two">172</p>
            </div>
          </div>
          <div class="image blue designer" data-colorbox-url="includes/colorbox.php?id=32">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">James Earl Jones</p>
              <p class="sort-two">77</p>
            </div>
          </div>
          <div class="image green programmer" data-colorbox-url="includes/colorbox.php?id=31">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">Marie Curie</p>
              <p class="sort-two">815</p>
            </div>
          </div>
          <div class="image brown designer" data-colorbox-url="includes/colorbox.php?id=30">
            <img src="http://lorempixel.com/145/187/nightlife" />
            <div class="img-content">
              <p class="sort-one">Diana, Princess of Whales</p>
              <p class="sort-two">357</p>
            </div>
          </div>
          <div class="image blue designer" data-colorbox-url="includes/colorbox.php?id=29">
            <img src="http://lorempixel.com/145/187/food" />
            <div class="img-content">
              <p class="sort-one">Mohandas Gandhi</p>
              <p class="sort-two">21</p>
            </div>
          </div>
          <div class="image brown designer" data-colorbox-url="includes/colorbox.php?id=28">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">H</p>
              <p class="sort-two">987</p>
            </div>
          </div>
          <div class="image green designer" data-colorbox-url="includes/colorbox.php?id=27">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">I</p>
              <p class="sort-two">752</p>
            </div>
          </div>
          <div class="image brown programmer" data-colorbox-url="includes/colorbox.php?id=26">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">F</p>
              <p class="sort-two">7</p>
            </div>
          </div>
          <div class="image brown designer" data-colorbox-url="includes/colorbox.php?id=25">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">J</p>
              <p class="sort-two">6</p>
            </div>
          </div>
          <div class="image green designer" data-colorbox-url="includes/colorbox.php?id=24">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">K</p>
              <p class="sort-two">231</p>
            </div>
          </div>
          <div class="image blue designer" data-colorbox-url="includes/colorbox.php?id=23">
            <img src="http://lorempixel.com/145/187/food" />
            <div class="img-content">
              <p class="sort-one">L</p>
              <p class="sort-two">999</p>
            </div>
          </div>
          <div class="image brown designer" data-colorbox-url="includes/colorbox.php?id=22">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">M</p>
              <p class="sort-two">634</p>
            </div>
          </div>
          <div class="image brown programmer" data-colorbox-url="includes/colorbox.php?id=21">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">N</p>
              <p class="sort-two">751</p>
            </div>
          </div>
          <div class="image brown designer" data-colorbox-url="includes/colorbox.php?id=20">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">O</p>
              <p class="sort-two">546</p>
            </div>
          </div>
          <div class="image brown designer" data-colorbox-url="includes/colorbox.php?id=19">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">P</p>
              <p class="sort-two">826</p>
            </div>
          </div>
          <div class="image brown designer" data-colorbox-url="includes/colorbox.php?id=18">
            <img src="http://lorempixel.com/145/187/food" />
            <div class="img-content">
              <p class="sort-one">Q</p>
              <p class="sort-two">156</p>
            </div>
          </div>
          <div class="image green programmer" data-colorbox-url="includes/colorbox.php?id=17">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">R</p>
              <p class="sort-two">579</p>
            </div>
          </div>
          <div class="image green designer" data-colorbox-url="includes/colorbox.php?id=16">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">S</p>
              <p class="sort-two">364</p>
            </div>
          </div>
          <div class="image blue programmer" data-colorbox-url="includes/colorbox.php?id=15">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">T</p>
              <p class="sort-two">33</p>
            </div>
          </div>
          <div class="image green programmer" data-colorbox-url="includes/colorbox.php?id=14">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">U</p>
              <p class="sort-two">84</p>
            </div>
          </div>
          <div class="image blue programmer" data-colorbox-url="includes/colorbox.php?id=13">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">M</p>
              <p class="sort-two">64</p>
            </div>
          </div>
          <div class="image green programmer" data-colorbox-url="includes/colorbox.php?id=12">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">N</p>
              <p class="sort-two">97</p>
            </div>
          </div>
          <div class="image green programmer" data-colorbox-url="includes/colorbox.php?id=11">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">O</p>
              <p class="sort-two">10</p>
            </div>
          </div>
          <div class="image blue designer" data-colorbox-url="includes/colorbox.php?id=10">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">P</p>
              <p class="sort-two">1</p>
            </div>
          </div>
          <div class="image blue designer" data-colorbox-url="includes/colorbox.php?id=9">
            <img src="http://lorempixel.com/145/187/food" />
            <div class="img-content">
              <p class="sort-one">Q</p>
              <p class="sort-two">51</p>
            </div>
          </div>
          <div class="image blue programmer" data-colorbox-url="includes/colorbox.php?id=8">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">R</p>
              <p class="sort-two">80</p>
            </div>
          </div>
          <div class="image brown designer" data-colorbox-url="includes/colorbox.php?id=6">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">S</p>
              <p class="sort-two">1400</p>
            </div>
          </div>
          <div class="image green designer" data-colorbox-url="includes/colorbox.php?id=6">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">T</p>
              <p class="sort-two">12</p>
            </div>
          </div>
          <div class="image blue designer" data-colorbox-url="includes/colorbox.php?id=5">
            <img src="http://placehold.it/145x187" />
            <div class="img-content">
              <p class="sort-one">U</p>
              <p class="sort-two">575</p>
            </div>
          </div>
        </div>
      </div><!-- End image gallery -->
      
      <?php include_once 'includes/modals.php'; ?>
<?php include_once 'includes/footer.php'; ?>