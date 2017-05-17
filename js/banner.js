/*<![CDATA[*/
function extend(o1, o2){
    for (var prop in o2){
        if( typeof o1[prop] === "undefined"){
            o1[prop] = o2[prop];
        }
    }
}
function Banner(){
    this.root = Array.prototype.shift.call(arguments);
    this.swiper_array = $(this.root).find(".slideshow-image");
    extend(this, arguments[0]);
    this.init();
    this.play();
}
// 未配置时,启用默认配置
Banner.prototype.init = function(){
    //配置项 默认值
        //宽高比
    this.aspectRatio = this.aspectRatio ? this.aspectRatio : 0;
        //动画时长
    this.duration = this.duration ? this.duration : 5000;
    //设置轮播外框 高
    if(this.aspectRatio){
        $(this.root).css("height",parseInt($(this.root).css("width")) / this.aspectRatio + "px");
    }
    //设置动画时长
    this.swiper_array.css("-webkit-animation-duration", this.duration/1000 + "s");
    this.swiper_array.css("animation-duration", this.duration/1000 + "s");
};
// 开始轮播
Banner.prototype.play = function(){
    if(this.swiper_array.length <= 1){
        return;
    }
    else {
        // 当前页序号
        this.active = this.active ? this.active : 0;
        this.singleStep();
        setInterval(this.singleStep.bind(this),this.duration * 0.9);
    }
};
// 单步动画
Banner.prototype.singleStep = function(){
    var active = this.active;
    var array = this.swiper_array;
    var next = (active + 1) % array.length;
    /*
     * 动画说明:
     *   1. z-index 2层 .active 前90%动画,后10% 渐变透明
     *   2. z-index 1层 .next 10%~90%,无动画, 后10% 追加.active动画(相当于.active的前10%)(此阶段z-index 2,1层都有动画,用于2层替换时,无缝衔接),100%时撤掉.next
     */
    $(array[active]).addClass('active');
    setTimeout(function(){
        $(array[next]).addClass('next');
    }, this.duration * 0.1);
    setTimeout(function(){
        $(array[active]).removeClass('active');
        $(array[next]).removeClass('next');
    }, this.duration);

    this.active = (this.active + 1) % array.length;
};
/*]]>*/