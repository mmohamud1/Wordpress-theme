<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package QO
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css" integrity="sha384-wESLQ85D6gbsF459vf1CiZ2+rr+CsxRY0RpiF1tLlQpDnAgg6rwdsUF1+Ics2bni" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'qo' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="site-branding">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
			else :
				?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
			endif;
			$qo_description = get_bloginfo( 'description', 'display' );
			if ( $qo_description || is_customize_preview() ) :
				?>
				<p class="site-description"><?php echo $qo_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>
			<?php endif; ?>
		</div><!-- .site-branding -->

		<nav class="nav nav-2">
      <div class="nav-container">
        <a href="https://www.quodorbis.com/" class="nav-logo nav-2-logo" id="nav-logo">
          <img src="https://www.quodorbis.com/img/white_logo_transparent.png" alt="logo" class="nav-logo-img" >
        </a>
        <button class="nav-mobile" id="hamburger-icon">
          <i class="fas fa-bars"></i>
       </button>

       <ul class="nav-menu nav-2-menu" >
         <li class="nav-items">
           <a href="https://www.quodorbis.com/" class="nav-links">Home</a>
         </li>
         <li class="nav-items dropdown-items">
          <a href="https://www.quodorbis.com/about.html" class="nav-links dropdown-link">About Us &nbsp;<i class="fas fa-caret-down"></i></a>
          <div class="dropdown-content dropdown-content-2">
            <a href="https://www.quodorbis.com/about.html#aboutqo">About Quod Orbis</a>
            <a href="https://www.quodorbis.com/about.html#team_ex">Our People</a>
            <a href="https://www.quodorbis.com/about.html#careers">Careers</a>
          </div>
        </li>
         <li class="nav-items dropdown-items">
          <a href="https://www.quodorbis.com/ccm.html" class="nav-links dropdown-link">Continuous Controls Monitoring &nbsp;<i class="fas fa-caret-down"></i></a>
          <div class="dropdown-content">
            <a href="https://www.quodorbis.com/ccm.html#about-ccm">What is CCM?</a>
            <a href="https://www.quodorbis.com/ccm.html#ccm-solution">QO CCM Solution</a>
            <a href="https://www.quodorbis.com/ccm.html#qo-platform">QO Platform & Case Study</a>
            <a href="https://www.quodorbis.com/ccm.html#ccm-readiness">QO CCM Readiness Solution</a>
            <a href="https://www.quodorbis.com/ccm.html#digital-risk">Digital Risk: Board-level Issue</a>
            <a href="https://www.quodorbis.com/ccm.html#business-cost">CCM Business Case & Cost</a>
          </div>
        </li>
        <li class="nav-items">
          <a href="https://www.quodorbis.com/digital-cyber-consultancy.html" class="nav-links">Digital & Cyber Consultancy</a>
        </li>
        
        <li class="nav-items">
          <a href="https://www.quodorbis.com/news.html" class="nav-links">News & Views</a>
        </li>
      </ul>

       <div class="nav-btns nav-2-btns" >
        <a href="https://www.quodorbis.com/contact.html" class="contact-btn"><button class="nav-btn">Contact Us</button></a>
         <button class="nav-btn" data-toggle="modal" data-target="#demoModal">Request Demo</button>
       </div>
       
      </div>

    </nav>
    <!-- /.navbar -->
    <!--Hamburger-->
    <aside class="ham-container" id="ham-container">
      <div class="ham-close-icon" id="ham-close">
        <i class="fas fa-times"></i>
      </div>
      <div class="ham-wrapper">
        <ul class="ham-menu">
          <a href="https://www.quodorbis.com//" class="ham-link" id="home-link">Home</a>
          <div class="ham-dropdown">
            <a  id="about-link" class="ham-link">About Us &nbsp;<i class="fas fa-caret-down"></i></a>
            <div class="ham-dropdown-content" id="about-dropdown">
              <a href="https://www.quodorbis.com/about.html#aboutqo" class="ham-dropdown-link" id="about-link-1">About Us</a>
              <a href="https://www.quodorbis.com/about.html#team_ex" class="ham-dropdown-link" id="about-link-2">Our People</a>
              <a href="https://www.quodorbis.com/about.html#careers" class="ham-dropdown-link" id="about-link-3">Careers</a>
            </div>
          </div>
          <div class="ham-dropdown">
            <a  class="ham-link" id="ccm-link">Continuous Controls Monitoring &nbsp;<i class="fas fa-caret-down"></i></a>
            <div class="ham-dropdown-content" id="ccm-dropdown">
              <a class="ham-dropdown-link" id="ccm-link-1" href="https://www.quodorbis.com/ccm.html#about-ccm">What is CCM?</a>
              <a class="ham-dropdown-link" id="ccm-link-2" href="https://www.quodorbis.com/ccm.html#ccm-solution">QO CCM Solution</a>
              <a class="ham-dropdown-link" id="ccm-link-3" href="https://www.quodorbis.com/ccm.html#qo-platform">QO Platform & Case Study</a>
              <a class="ham-dropdown-link" id="ccm-link-4" href="https://www.quodorbis.com/ccm.html#ccm-readiness">QO CCM Readiness Solution</a>
              <a class="ham-dropdown-link" id="ccm-link-5" href="https://www.quodorbis.com/ccm.html#digital-risk">Digital Risk: Board-level Issue</a>
              <a class="ham-dropdown-link" id="ccm-link-6" href="https://www.quodorbis.com/ccm.html#business-cost">CCM Business Case & Cost</a>
            </div>

          </div>
          <a href="https://www.quodorbis.com/digital-cyber-consultancy.html" class="ham-link" id="dig-link">Digital & Cyber Consultancy</a>
          <a href="https://www.quodorbis.com/news.html" class="ham-link" id="news-link">News & Views</a>
        </ul>
        <div class="ham-btns">
          <a href="https://www.quodorbis.com/contact.html" class="nav-btn ham-btn" id="contact-link">Contact Us</a>
         <button class="nav-btn ham-btn" data-toggle="modal" data-target="#demoModal" id="demo-link">Request Demo</button>
        </div>

      </div>
    </aside>
	<!--Modals-->
	<div class="modal fade" id="eventModal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Register for our <b>event</b></h4>
          </div>
          <div class="modal-body">
            <br/>
            <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
            <script>
              hbspt.forms.create({
                portalId: "5823873",
                formId: "512a200e-c83c-452c-9f3f-7b2419ec3661"
            });
            </script>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="demoModal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Request a <b>demo</b></h4>
          </div>
          <div class="modal-body">
            <br/>
            <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js"></script>
            <script>
              hbspt.forms.create({
                          portalId: "5823873",
                          formId: "5e1f222f-38b0-4a00-9d0d-b7dafa0cbfee"
            });
            </script>
          </div>
        </div>
      </div>
    </div>

	<div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Register with <b>us!</b></h4>
          </div>
          <div class="modal-body">
            <p>Please register your contact details with us to access downloadable content.</p>
            <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js"></script>
            <script>
              hbspt.forms.create({
                portalId: "5823873",
                formId: "3503af54-29ea-4a63-9804-8cda893b670f"
            });
            </script>
          </div>
        </div>
      </div>
    </div>
	</header><!-- #masthead -->
