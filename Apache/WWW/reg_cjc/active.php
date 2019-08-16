<?php
include_once("conn.php");

$verify = stripslashes(trim($_GET['verify']));
$nowtime = time();

$sql = "SELECT id,token_exptime FROM `r_user` WHERE status='0' AND token=:token";
$stmt = $db->prepare($sql);
$stmt->execute(array(
    ':token' => $verify
));
$row = $stmt->fetch(PDO::FETCH_ASSOC);
if ($row) {
	if ($nowtime > $row['token_exptime']) { //30min
		$msg = '您的激活有效期已过，请登录您的帐号重新发送激活邮件.';
	} else {
        $sql_update = "UPDATE `r_user` SET status=1 WHERE id=:id";
        $stmt_update = $db->prepare($sql_update);
        $stmt_update->execute(array(
            ':id' => $row['id']
        ));
        if ($stmt->rowCount()) {
            $msg = '激活成功！';
        } else {
            $msg = '服务器忙！';
        }
	}
} else {
	$msg = 'error.';	
}
?>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>电子地图系统激活帐号</title>
<link rel="stylesheet" type="text/css" href="../css/main.css" />
<style type="text/css">
.demo{width:400px; margin:40px auto 0 auto; min-height:200px;}
.demo h3{line-height:40px; padding:4px; text-align:center; font-size:20px; color:#360}
</style>
</head>

<body>

<div id="main">
   <div class="demo">
   		<h3><?php echo $msg;?></h3>
	</div>
</div>
</body>
</html>