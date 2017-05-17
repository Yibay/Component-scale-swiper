# scale-banner-component
项目线上地址：https://yibay.github.io/scale-banner-component/ <br/>
## sample

<pre>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>scale-slide</title>
	<link rel="stylesheet" type="text/css" href="./css/reset.css" />
	<link rel="stylesheet" type="text/css" href="./css/banner.css" />
	<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>
	<!-- 结构示例 -->
	<div id="example" class="swiper-container-banner" >
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <img class="slideshow-image" src="./images/home_banner_1.jpg"/>
        <img class="slideshow-image" src="./images/home_banner_2.jpg"/>
        <img class="slideshow-image" src="./images/home_banner_3.jpg"/>
    </div>
    <script src="./js/banner.js"></script>
    <script>
        // 实例化
        var my_banner = new Banner("#example",{
        		// 轮播宽高比 (建议 用原图的宽高比)
        		// aspectRatio: 1980/650,
        		// 动画时长
            duration: 5000
        });
    </script>
	</div>
</body>
</html>
</pre>
