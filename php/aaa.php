<?php
    $conn = mysqli_connect("localhost","root","");
    mysqli_select_db($conn,"wmsj");
    mysqli_query($conn,"set names utf8");
    header("Content-type:text/html;charset=utf-8");
    $ids=$_REQUEST["ids"];
    $name=$_REQUEST["name"];
    $price=$_REQUEST["price"];
    $url=$_REQUEST["url"];
    $position=$_REQUEST["position"];
    $like=$_REQUEST["like"];

    $sql="INSERT INTO `djws`(`id`, `name`, `price`, `like_num`, `star`, `url`) VALUES ('{$ids}','{$name}','{$price}','{$like}','{$position}','{$url}')";
    $result = mysqli_query($conn,$sql);
    if($result){
        echo "ok";
    }else{
        echo "error";
    };

    mysqli_close($conn);
?>