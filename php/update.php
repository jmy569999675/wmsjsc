<?php
    $conn = mysqli_connect("localhost","root","");
    mysqli_select_db($conn,"wmsj");
    mysqli_query($conn,"set names utf8");
    header("content-type:text/html;charset=utf-8");
$responseArr = array(
    "code"=>200,
    "data"=>null,
    "msg"=>"数据获取成功",
    // "error"=>""
);
$id=$_REQUEST['id'];
$name=$_REQUEST['name'];
$price=(int)$_REQUEST['price'];
$img=$_REQUEST['img'];
$responseArr["data"]=[$price];
$sql = "INSERT INTO `cart`(`id`,`name`, `img`, `price`) VALUES ('{$id}','{$name}','{$img}',{$price})";
$result = mysqli_query($conn, $sql);
if($result){
    $responseArr["msg"]="数据插入成功";
}else{
    $responseArr["msg"]="数据插入失败";
    $responseArr["code"]=207;
    // $responseArr["error"]=mysql_error($sql);
}

mysqli_close($conn);
die(json_encode($responseArr));
?>