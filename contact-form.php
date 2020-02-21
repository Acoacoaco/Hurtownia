<?php

    if (isset($_POST['submit'])) {
       $firstName = $_POST['firstname'];
       $lastName = $_POST['lastname'];
       $mail = $_POST['mail'];
       $phone = $_POST['phone'];
       $orderNumber = $_POST['order-num'];
       $notification = $_POST['notification'];

       $mailTo = "aleksander.wiazewicz@usz.edu.pl";
       $headers = "From: $mail";
       $emailTxt = "Dane zamawiającego: $firstName $firstName. \n\n".
       "Telefon kontaktowy: $phone. \n\n".
       "Treść zgłoszenia: $notification. \n\n";

       mail($mailTo, $orderNumber, $emailTxt, $headers);
       header("Location: index.html?mailsend");

    }

?>
