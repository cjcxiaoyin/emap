<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>登录</title>
<link rel="stylesheet" href="css/log.css">
</head>
<body>
<div class="cjc_10_16_div">
<form method="post">
<br/>
<label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户名:&nbsp;<input type="text" name="name" class="input_7_9"></label>
<br/><br/>
<label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密码:&nbsp;<input type="password" name="pw" class="input_7_9"></label>
<br/><br/>
<input type="button" class="reg_log_btn" onclick="javascript:window.location.href='reg.html';" value="注册"/>
<button type="submit" name="submit" class="reg_log_btn">登录</button>
</form>
<div>
</body>
</html>
<?php 
$link = mysqli_connect('116.62.148.231', 'root', 'yulong', 'helloweba');
$cjc_username="";
$cjc_email="";

if (!$link){
    echo "<script>alert('数据库连接失败！')</script>";
	exit;
}else {
   // if (isset($_POST['submit'])){
	   if(isset($_REQUEST['submit']) ){
		if(!$_POST['name']){
				echo "<script>alert('请填写用户名或邮箱！');</script>";
				return;
		}
		//$query_01="select status from r_user where username = '{$_POST['name']}' and password = '{$_POST['pw']}'";
		$newpa=md5(trim($_POST['pw']));
		$query_01="select status from r_user where username = '{$_POST['name']}' and password = '$newpa' ";
		$result_01 = mysqli_query($link, $query_01);
		$query_02="select status from r_user where email = '{$_POST['name']}' and password = '$newpa' ";
		$result_02 = mysqli_query($link, $query_02);
		//echo mysqli_num_rows($result_01);
		//if(mysqli_num_rows($result_01) == 1){
		if(mysqli_num_rows($result_01) == 1){
			$row=mysqli_fetch_array($result_01);
			if($row['status']==0){
				echo "<script>alert('该帐号没有激活，无法登陆！');</script>";
				return;
			}
			else {
				$query_cjc_1="select email from r_user where username = '{$_POST['name']}' and password = '$newpa' ";
				$result_cjc_1=mysqli_query($link, $query_cjc_1);
				$cjc_username=$_POST['name'];
				$cjc_email_array=mysqli_fetch_array($result_cjc_1);
				$cjc_email=$cjc_email_array[0];
				header('Location:judge.php?cjc_username='.$cjc_username.'&cjc_email='.$cjc_email);
				//echo "<script>alert('登陆成功！');</script>";//**********************************************************************************
				//echo "<script>window.location.href='WebWorldWind-develop/examples/index.html';setTimeout(alertFunc, 5000);function alertFunc() {window.location.reload();}</script>";//**********************************************************************************
			}
			
		}else if(mysqli_num_rows($result_02) == 1){
			$row_01=mysqli_fetch_array($result_02);
			if($row_01['status']==0){
				echo "<script>alert('该帐号没有激活，无法登陆！');</script>";
				return;
			}else {
				$query_cjc_2="select username from r_user where email = '{$_POST['name']}' and password = '$newpa' ";
				$result_cjc_2=mysqli_query($link, $query_cjc_2);
				$cjc_email=$_POST['name'];
				$cjc_username_array=mysqli_fetch_array($result_cjc_2);
				$cjc_username=$cjc_username_array[0];
				header('Location:judge.php?cjc_username='.$cjc_username.'&cjc_email='.$cjc_email);
				//echo "<script>alert('登陆成功！');</script>";//*******************************************************************************
				//echo "<script>window.location.href='WebWorldWind-develop/examples/index.html';setTimeout(alertFunc, 5000);function alertFunc() {window.location.reload();}</script>";
			}
		}else{
			echo "<script>alert('帐号或密码错误！');</script>";
			return;
		}
		
		//}
       // $query = "select * from user where name = '{$_POST['name']}' and pw = '{$_POST['pw']}'";
       // $result = mysqli_query($link, $query);
     //   if (mysqli_num_rows($result) == 1){
     //       header("Location:index.php");
     //   }
   // }
}
}
?>
