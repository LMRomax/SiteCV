<?php

session_start();

if (
  !empty($_POST['name']) and !empty($_POST['firstname'])
  and !empty($_POST['email']) and !empty($_POST['phone']) and !empty($_POST['message'])
) {

  $email = htmlspecialchars($_POST['email']);
  $nom = htmlspecialchars($_POST['name']);
  $sujet = "Demande via site CV";
  $phone = htmlspecialchars($_POST['phone']);
  $corps = htmlspecialchars($_POST['message']);

  if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

    $destinataire = "maxencectmd.lemaitre@gmail.com";
    $sujet = "Sujet : " . $sujet . " | provenant de : " . $nom . " | numéro de téléphone : " . $phone;
    $entete = "From: lmaxence.fr";

    // Le lien d'activation est composé du login(log) et de la clé(cle)
    $message = $corps . '
      ---------------
      Mail provenant de lmaxence.fr.';

    //mail($destinataire, $sujet, $message, $entete);

    if (mail($destinataire, $sujet, $message, $entete)) { // Envoi du mail
      $_SESSION['success-message'] = "Mail envoyé avec succés !";
      header('location:/');
      die();
    } else {
      $_SESSION['error-message'] = "Attention, le mail n\'a pas été envoyé";
      header('location:/');
      die();
    }
  } else {
    $_SESSION['error-message'] = "Le format de votre adresse mail n\'est pas valide !";
    header('location:/');
    die();
  }
} else {
  $_SESSION['error-message'] = "Veuillez remplir tous les champs !";
  header('location:/');
  die();
}
