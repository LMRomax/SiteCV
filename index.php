<?php session_start(); ?> 

<!DOCTYPE html>
<html lang="fr" class="theme-skin-light cssall cssgradients rgba opacity supports textshadow cssanimations bgrepeatround bgrepeatspace boxshadow csstransforms csstransforms3d csstransitions desktop theme-color-07aaf5" style>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <title>Maxence Lemaitre - Curriculum Vitae</title>
  <link rel="icon" type="image/png" href="assets/images/favicon.png" />

  <!-- Styles -->
  <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="assets/css/style.css">
  <link rel="stylesheet" type="text/css" href="assets/css/mediaqueries.css">
  <link rel="stylesheet" type="text/css" href="assets/css/slick-theme.css">
  <link rel="stylesheet" type="text/css" href="assets/css/slick.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <!-- Fonts -->
  <link type="text/css" rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700">
  <link rel="icon" type="image/png" href="" />
  <!--[if IE]><link rel="shortcut icon" type="image/x-icon" href="favicon.ico" /><![endif]-->

  <!-- Scripts -->
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script type="text/javascript" src="assets/js/slick.js"></script>
  <script type="text/javascript" src="assets/js/script.js"></script>
</head>

<body>
  <div id="is-load" class="is-load" style="display: block;">
    <?php include 'views/menuprincipal.php'; ?>
    <?php include 'views/presentation.php'; ?>
      <div id="ancreCompetences" class="ancre"></div>
    <?php include 'views/competences.php'; ?>
      <div id="ancrePortfolio" class="ancre"></div>
    <?php include 'views/portfolio.php'; ?>
      <div id="ancreXp" class="ancre"></div>
    <?php include 'views/xp.php'; ?>
      <div id="ancreFormations" class="ancre"></div>
    <?php include 'views/formations.php'; ?>
      <div id="ancreRefs" class="ancre"></div>
    <?php include 'views/refs.php'; ?>
      <div id="ancreContact" class="ancre"></div>
    <?php include 'views/contact.php'; ?>

    <?php if(isset($_SESSION['error-message']) 
    && !empty($_SESSION['error-message']) 
    && $_SESSION['error-message'] != null) : ?>
        <div class="error-contact">
          <div class="close-box-contact">&times</div>
          <?= $_SESSION['error-message']; ?>
        </div>
    <?php endif; ?>

    <?php if(isset($_SESSION['success-message']) 
    && !empty($_SESSION['success-message']) 
    && $_SESSION['success-message'] != null) : ?>
        <div class="success-contact">
          <div class="close-box-contact">&times</div>
          <?= $_SESSION['success-message']; ?>
        </div>
    <?php endif; ?>

    <?php session_destroy(); ?>

    <footer>
      © Lemaître Maxence
    </footer>
  </div>

  <script type="text/javascript" src="assets/js/menu.js"></script>
  <script type="text/javascript" src="assets/js/responsivemenu.js"></script>
  <script type="text/javascript" src="assets/js/animation.js"></script>
  <script type="text/javascript" src="assets/js/flashMessage.js"></script>
  <script type="text/javascript" src="assets/js/textareaAutoSize.js"></script>
  <script type="text/javascript">
    autosize(document.querySelectorAll('textarea'));
  </script>

</body>

</html>