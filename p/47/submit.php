<?php
// переменные, полученные из форм на сайте
$my_name = $_POST["my_name"];
$my_secname = $_POST["my_secname"];
$my_phone = $_POST["my_phone"];
$my_mail = $_POST["my_mail"];
$my_password = $_POST["my_password"];


if(isset($_POST["dop"])){
   $dop = $_POST["dop"];
}else{
   $dop = '-';
};




require_once 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer();
$mail->CharSet = 'utf-8';

$email_body = "";
$email_body = $email_body . "<p>Имя:</p><h2>".$my_name."</h2><p>Фамилия:</p><h2>".$my_secname."</h2><p>Телефон:</p><h2>".$my_phone."</h2><p>Почта:</p><h2>".$my_mail."</h2><p>Пароль:</p><h2>".$my_password."</h2><p>Форма:</p><h2>".$dop."</h2>";

$mail->From = 'sdelaem.in.ua@yandex.ua';
$mail->FromName = 'OneClick TRADES';
$mail->AddAddress('sdelaem.in.ua@yandex.ua', 'ANALYTICS');
$mail->Subject = 'Новая заявка с лендинга OneClick TRADES';
$mail->MsgHTML($email_body);

if(!$mail->send()) {
   echo 'Message could not be sent.';
   echo 'Mailer Error: ' . $mail->ErrorInfo;
   exit;
} else {
   echo '1';
    // save into text csv file
    $fp2 = fopen("leads.csv", "a");
    $datenow = date('Y-m-d');
    $timenow = date('H:i:s');
    $inputspace2 = $datenow.";".$timenow.";".$my_name.";".$my_secname.";".$my_phone.";".$my_mail.";".$my_password.";".$dop."\n";
    fwrite($fp2, $inputspace2);
    fclose($fp2);
}


?>