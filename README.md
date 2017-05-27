# scale-banner-component
项目线上地址：https://yibay.github.io/Component-scale-swiper/ <br/>
## sample

<pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;scale-slide&lt;/title&gt;
    &lt;link rel="stylesheet" type="text/css" href="./css/reset.css" /&gt;
    &lt;link rel="stylesheet" type="text/css" href="./css/banner.css" /&gt;
    &lt;script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;!-- 结构示例 --&gt;
	&lt;div id="example" class="swiper-container-banner" &gt;
        &lt;!-- Additional required wrapper --&gt;
        &lt;div class="swiper-wrapper"&gt;
            &lt;!-- Slides --&gt;
            &lt;img class="slideshow-image" src="./images/home_banner_1.jpg"/&gt;
            &lt;img class="slideshow-image" src="./images/home_banner_2.jpg"/&gt;
            &lt;img class="slideshow-image" src="./images/home_banner_3.jpg"/&gt;
        &lt;/div&gt;
        &lt;script src="./js/banner.js"&gt;&lt;/script&gt;
        &lt;script&gt;
            // 实例化
            var my_banner = new Banner("#example",{
            		// 轮播宽高比 (建议 用原图的宽高比)
            		// aspectRatio: 1980/650,
            		// 动画时长
                duration: 5000
            });
        &lt;/script&gt;
	&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
