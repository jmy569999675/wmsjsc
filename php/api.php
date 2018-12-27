<?php
    $conn = mysqli_connect("localhost","root","");
    mysqli_select_db($conn,"wmsj");
    mysqli_query($conn,"set names utf8");
    header("Content-type:text/html;charset=utf-8");
$responseArr = array(
    "code"=>200,
    "data"=>null,
    "msg"=>"数据获取成功"
);
$action=$_REQUEST["action"];
echo $action;
switch ($action){
    case 'cart':
        $sql="select * from ".$action;
        $result = mysqli_query($conn,$sql);
        if(mysqli_num_rows($result)>0){
            $commodity=array();
            while($row=mysqli_fetch_assoc($result)){
                $commodity[]=$row;
                // var_dump($row);
            }
            $responseArr["data"]=$commodity;
        }else{
            $responseArr["code"]=207;
            $responseArr["msg"]="没有记录";
        }
        mysqli_close($conn);
        die(json_encode($responseArr));
        break;

    case 'home_dota_1':
        $sql="select * from ".$action;
        $result = mysqli_query($conn,$sql);
        if(mysqli_num_rows($result)>0){
            $commodity=array();
            while($row=mysqli_fetch_assoc($result)){
                $commodity[]=$row;
                // var_dump($row);
            }
            $responseArr["data"]=$commodity;
        }else{
            $responseArr["code"]=207;
            $responseArr["msg"]="没有记录";
        }
        mysqli_close($conn);
        die(json_encode($responseArr));
        break;

    case 'home_dota_2':
        $sql="select * from ".$action;
        $result = mysqli_query($conn,$sql);
        if(mysqli_num_rows($result)>0){
            $commodity=array();
            while($row=mysqli_fetch_assoc($result)){
                $commodity[]=$row;
                // var_dump($row);
            }
            $responseArr["data"]=$commodity;
        }else{
            $responseArr["code"]=207;
            $responseArr["msg"]="没有记录";
        }
        mysqli_close($conn);
        die(json_encode($responseArr));
        break;

    case 'home_dota_3':
        $sql="select * from ".$action;
        $result = mysqli_query($conn,$sql);
        if(mysqli_num_rows($result)>0){
            $commodity=array();
            while($row=mysqli_fetch_assoc($result)){
                $commodity[]=$row;
                // var_dump($row);
            }
            $responseArr["data"]=$commodity;
        }else{
            $responseArr["code"]=207;
            $responseArr["msg"]="没有记录";
        }
        mysqli_close($conn);
        die(json_encode($responseArr));
        break;


    case 'home_dota_4':
        $sql="select * from ".$action;
        $result = mysqli_query($conn,$sql);
        if(mysqli_num_rows($result)>0){
            $commodity=array();
            while($row=mysqli_fetch_assoc($result)){
                $commodity[]=$row;
                // var_dump($row);
            }
            $responseArr["data"]=$commodity;
        }else{
            $responseArr["code"]=207;
            $responseArr["msg"]="没有记录";
        }
        mysqli_close($conn);
        die(json_encode($responseArr));
        break;
    
    case 'home_dota_5':
        $sql="select * from ".$action;
        $result = mysqli_query($conn,$sql);
        if(mysqli_num_rows($result)>0){
            $commodity=array();
            while($row=mysqli_fetch_assoc($result)){
                $commodity[]=$row;
                // var_dump($row);
            }
            $responseArr["data"]=$commodity;
        }else{
            $responseArr["code"]=207;
            $responseArr["msg"]="没有记录";
        }
        mysqli_close($conn);
        die(json_encode($responseArr));
        break;

    case 'del':
        $condition=$_REQUEST['condition'];
        $sql="DELETE FROM `cart` WHERE id=".$condition;
        $result = mysqli_query($conn,$sql);
        if ($result) {
            $responseArr["code"]=200;
            $responseArr["data"]="删除成功";
            $responseArr["msg"]="删除成功";
        }else{
            $responseArr["code"]=207;
            $responseArr["data"]="删除失败";
            $responseArr["msg"]="删除失败";
        }
        mysqli_close($conn);
        die(json_encode($responseArr));
        break;

    case 'djws':
        $sql="select * from ".$action;
        $result = mysqli_query($conn,$sql);
        if(mysqli_num_rows($result)>0){
            $commodity=array();
            while($row=mysqli_fetch_assoc($result)){
                $commodity[]=$row;
                // var_dump($row);
            }
            $responseArr["data"]=$commodity;
        }else{
            $responseArr["code"]=207;
            $responseArr["msg"]="没有记录";
        }
        mysqli_close($conn);
        die(json_encode($responseArr));
        break;
}
?>