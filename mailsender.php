<?php

if(isset($_POST['envoyer'])){
  if(!empty($_POST['rsName']) AND !empty($_POST['rsEmail']) AND !empty($_POST['rsSubject']) AND !empty($_POST['rsMessage'])){

    $email = htmlspecialchars($_POST['rsEmail']);
    $nom = htmlspecialchars($_POST['rsName']);
    $sujet = htmlspecialchars($_POST['rsSubject']);
    $corps = htmlspecialchars($_POST['rsMessage']);

    if(filter_var($_POST['rsEmail'],FILTER_VALIDATE_EMAIL)){

      $destinataire = "maxencectmd.lemaitre@gmail.com";
      $sujet = "Sujet : ".$sujet. " provenant de : ".$nom ;
      $entete = "From: lmaxence.fr" ;

      // Le lien d'activation est composé du login(log) et de la clé(cle)
      $message = $corps.'
      ---------------
      Mail provenant de lmaxence.fr.';

      //mail($destinataire, $sujet, $message, $entete);

      if(mail($destinataire, $sujet, $message, $entete)){// Envoi du mail
        /*?><h5 class="validinscription"><?php echo 'Inscription enregistrée. Vérifiez votre boîte mail et vos spams !'; ?></h5><?php*/
        header('location:index.php?error=Mail envoyé avec succés !');
      }
      else{
        header('location:index.php?error=Attention, le mail n\'a pas été envoyé  !');
      }
    }
    else{
      header('location:index.php?error=Le format de votre adresse mail n\'est pas valide !');
    }
  }
  else{
    header('location:index.php?error=Veuillez remplir tous les champs !');
  }
}
else{
  header('location:index.php?error=Veuillez remplir les champs !');
}

?>
