//进入时间服的 人物移动
var time = document.getElementById("time");
time.style.transition = "all 0.5s";
time.onmouseover = function (ev) {
    this.style.right = "50px";
};
time.onmouseout = function (ev) {
    this.style.right = "40px";
};
//导航栏二级菜单
var subMenu_li = document.querySelectorAll(".new-center-sub>li"),
    newsCenter = document.querySelector(".nav>li:nth-child(2)"),
    newsCenterSub = document.querySelector(".new-center-sub");
//移入导航栏出现下拉列表
newsCenter.addEventListener("mouseover", function () {
    // newsCenter.style.height = "250px";
    newsCenterSub.style.height = "205px";
    var len = subMenu_li.length;
    for (var i = 0; i < len; i++) {
        subMenu_li[i].style.transition = "all " + i / 6 + "s";
        subMenu_li[i].style.transform = "scaleX(1)";
    }
});
//移出导航栏收回下拉列表
newsCenter.addEventListener("mouseout", function () {
    newsCenterSub.style.height = 0;
    var len = subMenu_li.length;
    for (var i = 0; i < len; i++) {
        subMenu_li[i].style.transition = "1s";
        subMenu_li[i].style.transform = "scaleX(0)";
    }
});
/*
//二维码线的移动
var line = document.querySelector(".line");
// line.style.top = "84px";
var flag = false;

var intervalId = setInterval(function () {
    if (flag) {
        flag = !flag;
        // setTimeout(function () {
            line.style.transition = "all 3s";
            line.style.top = "84px";

        // }, 100);
    } else {
        flag = !flag;
        // setTimeout(function () {
            line.style.transition = "unset";
            line.style.top = "0px";
        // }, 100);
    }
}, 3000)
*/
//col-b图片轮播
var col_b_carousel = document.querySelectorAll(".col-b-carousel>a");
var col_b_carousel_dots = document.querySelectorAll(".col-b-carousel-ul li");
//用索引判断到最后一张时，切换到第一张
var index = 0;
//轮播图片切换时间间隔（2s一次）
col_b_carousel_dots[0].style.backgroundColor = "red";

//记时器轮播回调函数
var carouselFun = function () {
    if (index >= 4) {
        for (var i = 0; i < col_b_carousel.length; i++) {
            col_b_carousel[i].style.opacity = 0;
            col_b_carousel_dots[index - 1].style.backgroundColor = "transparent";
        }
        index = 0;
    }
    if (index === 0) {
        col_b_carousel_dots[index].style.backgroundColor = "transparent";
    } else {
        col_b_carousel_dots[index - 1].style.backgroundColor = "transparent";
    }
    col_b_carousel[index].style.opacity = 1;
    //播到哪张图片，对应的点被选中
    col_b_carousel_dots[index].style.backgroundColor = "red";
    index++;
    return carouselFun;
};
var intervalId = setInterval(carouselFun(), 2000);


for (var i = 0; i < col_b_carousel.length; i++) {
    col_b_carousel[i].setAttribute("index", i);
    col_b_carousel_dots[i].setAttribute("index", i);

    col_b_carousel_dots[i].onmouseover = function () {
        for (var j = 0; j < col_b_carousel_dots.length; j++) {
            col_b_carousel[j].style.opacity = "0";
            col_b_carousel_dots[j].style.backgroundColor = "transparent";
        }
        this.style.backgroundColor = "red";

        //获取到的 $index 是字符串!!!
        var $index = this.getAttribute("index");
        col_b_carousel[$index].style.opacity = "1";
        index = parseInt($index);
    };
}
//实用工具
var tool = document.querySelector(".tool");
tool.parentElement.onmouseover = function () {
    this.lastElementChild.style.visibility = "visible";
    this.lastElementChild.style.width = "420px";
};
tool.parentElement.onmouseout = function () {
    this.lastElementChild.style.visibility = "hidden";
    this.lastElementChild.style.width = "0px";
};
//微信公众号
var gongzhonghao = document.querySelector(".gongzhonghao");
gongzhonghao.parentElement.onmouseover = function () {
    this.lastElementChild.style.visibility = "visible";
    this.lastElementChild.style.width = "420px";
};
gongzhonghao.parentElement.onmouseout = function (ev) {
    this.lastElementChild.style.visibility = "hidden";
    this.lastElementChild.style.width = "0px";
};
// col-c navTab 标签页
var navTab_li = document.querySelectorAll(".navTab li");
var navTabContent = document.querySelectorAll(".navTab-content>div");

for (var i = 0; i < navTab_li.length; i++) {
    navTab_li[i].setAttribute("index", i);
    navTab_li[i].onmouseover = function () {
        for (var i = 0; i < navTab_li.length; i++) {
            navTab_li[i].firstElementChild.style.transform = "scale(0)";
            navTab_li[i].style.color = "#000";
            navTabContent[i].style.visibility = "hidden";
            navTabContent[i].style.opacity = "0";
        }
        var index = this.getAttribute("index");
        this.firstElementChild.style.transform = "scale(1)";
        this.style.color = "#d22c24";
        navTabContent[index].style.visibility = "visible";
        navTabContent[index].style.opacity = "1";
    };
}
//获奖公示，滚动文字
var scrollFont = document.querySelector(".bottom-scroll>div");
setInterval(function () {
    scrollFont.style.left -= scrollFont.offsetWidth;
}, 1000);
//超级联赛部分
var competitions = document.querySelectorAll(".con-wrap9-left-tab>a");
var tabs = document.querySelectorAll(".con-wrap9-left-data-inner-content");
//分别定义深颜色图片和浅色图片数组
var imgsLightArr = ["img/dhxy/light.png", "img/dhxy/ia_10343.png"];
var imgsDeepArr = ["img/dhxy/ia_10342.png", "img/dhxy/deep.png"];
//荣耀榜
var honor = document.querySelector(".honor");
var honorTitle = document.querySelectorAll(".con-wrap9-left-data .con-wrap9-left-data-inner .left-data-title>*");
var honorTitle2 = document.querySelectorAll(".con-wrap9-left-data .con-wrap9-left-data-inner2 .left-data-title>*");


for (var i = 0; i < honorTitle.length - 1; i++) {
    honorTitle[i].setAttribute("data-index", i);
    honorTitle[i].onclick = function () {
        for (var j = 0; j < tab1.length; j++) {
            tab1[j].style.visibility = "hidden";
            tab1[j].style.opacity = "0";
            honorTitle[j].firstElementChild.style.color = "#4e4e4e";
            honorTitle[j].firstElementChild.style.borderBottom = "unset";
            honorTitle[j].firstElementChild.firstElementChild.style.background = "url(" + darkArr[j] + ") no-repeat";
        }
        var $index = this.getAttribute("data-index");
        tab1[$index].style.visibility = "visible";
        tab1[$index].style.opacity = "1";
        this.firstElementChild.style.color = "#d22c24";
        this.firstElementChild.style.borderBottom = "3px solid #d22c24";
        this.firstElementChild.firstElementChild.style.background = "url(" + lightArr[$index] + ") no-repeat";
    }
}


// tab 1
//定义一个暗的和亮的图片数组（news-logo和honor-logo）
var lightArr = ["img/dhxy/ia_10346.png", "img/dhxy/ia_10345.png"],
    darkArr = ["img/dhxy/ia_10344.png", "img/dhxy/ia_10347.png"]
var tab1 = document.querySelectorAll(".tab1>*");
var tab2 = document.querySelectorAll(".tab2>*");

var left_data = document.querySelectorAll(".con-wrap9-left-data>*");
for (var i = 0; i < left_data.length; i++) {
    competitions[i].setAttribute("data-index", i);

    competitions[i].onclick = function () {
        for (var j = 0; j < left_data.length; j++) {
            left_data[j].style.display = "none";
            competitions[j].firstElementChild.style.background = "url(" + imgsLightArr[j] + ")"

        }
        var index = this.getAttribute("data-index"); //index返回的是字符串，不是整数
        left_data[index].style.display = "block";
        this.firstElementChild.style.background = "url(" + imgsDeepArr[index] + ")";

        //控制 honorTitle标题栏
        if (index == 0) {
            for (var i = 0; i < honorTitle.length - 1; i++) {
                honorTitle[i].setAttribute("data-index", i);
                honorTitle[i].onclick = function () {
                    for (var j = 0; j < tab1.length; j++) {
                        tab1[j].style.visibility = "hidden";
                        tab1[j].style.opacity = "0";
                        honorTitle[j].firstElementChild.style.color = "#4e4e4e";
                        honorTitle[j].firstElementChild.style.borderBottom = "unset";
                        honorTitle[j].firstElementChild.firstElementChild.style.background = "url(" + darkArr[j] + ") no-repeat";
                    }
                    var $index = this.getAttribute("data-index");
                    tab1[$index].style.visibility = "visible";
                    tab1[$index].style.opacity = "1";
                    this.firstElementChild.style.color = "#d22c24";
                    this.firstElementChild.style.borderBottom = "3px solid #d22c24";
                    this.firstElementChild.firstElementChild.style.background = "url(" + lightArr[$index] + ") no-repeat";
                }
            }
        } else {
            for (var i = 0; i < honorTitle2.length - 1; i++) {
                honorTitle2[i].setAttribute("data-index", i);
                honorTitle2[i].onclick = function () {
                    for (var j = 0; j < tab1.length; j++) {
                        tab2[j].style.visibility = "hidden";
                        tab2[j].style.opacity = "0";
                        honorTitle2[j].firstElementChild.style.color = "#4e4e4e";
                        honorTitle2[j].firstElementChild.style.borderBottom = "unset";
                        honorTitle2[j].firstElementChild.firstElementChild.style.background = "url(" + darkArr[j] + ") no-repeat";
                    }
                    var $index = this.getAttribute("data-index");
                    tab2[$index].style.visibility = "visible";
                    tab2[$index].style.opacity = "1";
                    this.firstElementChild.style.color = "#d22c24";
                    this.firstElementChild.style.borderBottom = "3px solid #d22c24";
                    this.firstElementChild.firstElementChild.style.background = "url(" + lightArr[$index] + ") no-repeat";
                }
            }
        }
    }
}

//同人作品
var indicators = document.querySelectorAll(".view-indicator>*");
var cosContainer = document.querySelector(".con-wrap9-right-inner-container");
var imgWidth = document.querySelector(".con-wrap9-right-inner-container>div");
for (var i = 0; i < indicators.length; i++) {
    indicators[i].setAttribute("data-index", i);
    indicators[i].onclick = function () {
        var index = this.getAttribute("data-index");
        for (var j = 0; j < indicators.length; j++) {
            indicators[j].style.backgroundColor = "rgba(0, 0, 0, .2)";
        }
        this.style.backgroundColor = "#d22c24";
        cosContainer.style.left = -imgWidth.offsetWidth * index + "px";
    }
}

//视频中心->导航
var videoNav = document.querySelectorAll(".con-wrap3-right-inner-title>li");
var videoNavSelected = document.querySelectorAll(".con-wrap3-right-inner-title>li>div");
for (var i = 0; i < videoNavSelected.length; i++) {
    videoNav[i].setAttribute("data-index", i);
    videoNav[i].onmouseover = function () {
        for (var j = 0; j < videoNavSelected.length; j++) {
            videoNavSelected[j].style.transform = "scaleX(0)";
        }
        var index = this.getAttribute("data-index");
        videoNavSelected[index].style.transform = "scaleX(1)";
    }
}

//技能---伸缩长度部分
var skills = document.querySelectorAll(".switch>div");
for (var i = 0; i < skills.length; i++) {
    skills[i].lastElementChild.onmouseover = function () {
        for (var j = 0; j < skills.length; j++) {
            skills[j].firstElementChild.style.width = "0px";
        }

        this.parentElement.firstElementChild.style.width = "300px";
    }
}

//判断鼠标移入div的方向
let box = document.querySelectorAll(".player-community-content>div>div");
console.info(box);
//为每个div设置一个背景图片
for (let i = 0, len = box.length; i < len; i++) {
    if (i + 2 >= 10) {
        box[i].style.background = "url('img/dhxy/ia_101" + (i + 2) + ".jpg')";
    }
    else {
        box[i].style.background = "url('img/dhxy/ia_1010" + (i + 2) + ".jpg')";
    }
}
//鼠标移入移出事件
for (let i = 0, len = box.length; i < len; i++) {
    box[i].onmouseenter = function (e) {
        let w = this.offsetWidth,
            h = this.offsetHeight;
        let toTop = this.getBoundingClientRect().top + document.documentElement.scrollTop; //兼容滚动条
        let x = (e.pageX - this.getBoundingClientRect().left - w / 2) * (w > h ? h / w : 1); //x轴的坐标
        let y = (e.pageY - toTop - h / 2) * (w < h ? w / h : 1); //y轴坐标
        let dir = Math.round(((Math.atan2(y, x) * 180 / Math.PI + 180) / 90) + 3) % 4; //方向
        let arr = ['上', '右', '下', '左'];
        switch (dir) {
            case 0:
                this.firstElementChild.style.animation = "top-in .3s .1s forwards";
                console.info(arr[dir] + '进入');
                break;
            case 1:
                this.firstElementChild.style.animation = "right-in .3s .1s forwards";
                console.info(arr[dir] + '进入');
                break;
            case 2:
                console.info(arr[dir] + '进入');
                this.firstElementChild.style.animation = "bottom-in .3s .1s forwards";
                break;
            case 3:
                console.info(arr[dir] + '进入');
                this.firstElementChild.style.animation = "left-in .3s .1s forwards";
                break;
        }
    };

    box[i].onmouseleave = function (e) {
        let w = this.offsetWidth;
        let h = this.offsetHeight;
        let toTop = this.getBoundingClientRect().top + document.documentElement.scrollTop;
        let x = (e.pageX - this.getBoundingClientRect().left - w / 2) * (w > h ? h / w : 1);
        let y = (e.pageY - toTop - h / 2) * (w < h ? w / h : 1);
        let dir = Math.round(((Math.atan2(y, x) * 180 / Math.PI + 180) / 90) + 3) % 4;
        let arr = ['上', '右', '下', '左'];
        switch (dir) {
            case 0:
                this.firstElementChild.style.animation = "top-out .3s  forwards";
                console.info(arr[dir] + '出去');
                break;
            case 1:
                this.firstElementChild.style.animation = "right-out .3s  forwards";
                console.info(arr[dir] + '出去');
                break;
            case 2:
                console.info(arr[dir] + '出去');
                this.firstElementChild.style.animation = "bottom-out .3s  forwards";
                break;
            case 3:
                console.info(arr[dir] + '出去');
                this.firstElementChild.style.animation = "left-out .3s  forwards";
                break;
        }
    };
}

//玩家社区这边，点击previous和next按钮以及小点进行切换图片
let content_previous = document.querySelector(".content-bottom-previous"),
    content_next = document.querySelector(".content-bottom-next"),
    content_wrap = document.querySelector(".content-community-wrap"),
    contentself = document.querySelector(".player-community-content"),
    //获取小点元素
    content_dots = document.querySelectorAll(".content-bottom-dots>li"),
    steps = 0,
    content_index = 0;
//点击小点发生相应改变
for (let i = 0, len = content_dots.length; i < len; i++) {
    content_dots[i].setAttribute("data-index", i); //为每个点设置索引
    content_dots[i].onmouseover = function () {
        for (let j = 0, len = content_dots.length; j < len; j++) {
            content_dots[j].style.backgroundColor = "#9d9d9d";
        }
        this.style.backgroundColor = "#d22c24";
        let _index = this.getAttribute("data-index");  //注意！这个是字符串，下面赋值要转为整数
        steps = (contentself.offsetWidth + 20) * _index;
        content_wrap.style.left = -steps + "px";
        content_index = parseInt(_index);
    }
}

//点击next按钮事件
content_next.onclick = function () {
    if (content_index === 4) {
        content_index = -1;
        steps = 0;
    }
    console.info(content_index, steps);
    content_index++;
    for (let i = 0, len = content_dots.length; i < len; i++) {
        content_dots[i].style.backgroundColor = "#9d9d9d";
    }
    content_dots[content_index].style.backgroundColor = "#d22c24";
    steps = (contentself.offsetWidth + 20) * content_index;
    content_wrap.style.left = -steps + "px";
};
//点击previous按钮事件
content_previous.onclick = function () {
    if (content_index === 0) {
        content_index = 5;
        steps  = -(contentself.offsetWidth + 20) * content_index;
    }
    console.info(content_index, steps);
    content_index--;
    for (let i = 0, len = content_dots.length; i < len; i++) {
        content_dots[i].style.backgroundColor = "#9d9d9d";
    }
    content_dots[content_index].style.backgroundColor = "#d22c24";
    steps = -(contentself.offsetWidth + 20) * content_index;
    content_wrap.style.left = steps + "px";
};
//玩家视频的title
let community_title = document.querySelectorAll(".player-community-title>li");
//不同title里的内容
let community_block = document.querySelectorAll(".block");
//player-community-tab里的内容（美女玩家，cos等）
let community_tab_parts = document.querySelectorAll('.player-community-tab>div');

for (let i = 0, len = community_title.length; i < len; i++) {
    community_title[i].setAttribute("data-index", i);
    community_title[i].onmouseover = function () {
        for (let j = 0; j < len; j++) {
            // community_block[j].style.display = "none";
            community_title[j].firstElementChild.style.transform = "scaleX(0)";
            community_tab_parts[j].style.display = 'none';
            community_tab_parts[j].style.opacity = 0;

        }
        this.firstElementChild.style.transform = "scaleX(1)";
        let _index = parseInt(this.getAttribute("data-index"));
        community_tab_parts[_index].style.display = 'block';
        setTimeout(function () {
            community_tab_parts[_index].style.opacity = 1;
        }, 10);
        // community_tab_parts[_index].style.visibility = 'visible';
    }
}

//玩家社区这边，点击previous和next按钮以及小点进行切换图片
//这是从美女玩家开始的项，到后面那几项
let cos_content_previous = document.querySelector(".cos-content-bottom-previous"),
    cos_content_next = document.querySelector(".cos-content-bottom-next"),
    //获取小点元素
    cos_content_dots = document.querySelectorAll(".cos-content-bottom-dots>li"),
    cos_steps = 0,
    cos_content_index = 0,
    cos_content_wrap = document.querySelector(".cos .content-community-wrap"),
    cos_contentself = document.querySelector(".cos .player-community-content");

//点击小点发生相应改变
for (let i = 0, len = cos_content_dots.length; i < len; i++) {
    cos_content_dots[i].setAttribute("data-index", i); //为每个点设置索引
    cos_content_dots[i].onmouseover = function () {
        for (let j = 0, len = cos_content_dots.length; j < len; j++) {
            cos_content_dots[j].style.backgroundColor = "#9d9d9d";
        }
        this.style.backgroundColor = "#d22c24";
        let _index = this.getAttribute("data-index");  //注意！这个是字符串，下面赋值要转为整数
        cos_steps = (cos_contentself.offsetWidth + 20) * _index;
        console.info(cos_contentself.offsetWidth);
        cos_content_wrap.style.left = -cos_steps + "px";
        console.info("left:" + cos_content_wrap.style.left);
        cos_content_index = parseInt(_index);
    }
}

//点击next按钮事件
cos_content_next.onclick = function () {
    if (cos_content_index === 4) {
        cos_content_index = -1;
        cos_steps = 0;
    }
    cos_content_index++;
    for (let i = 0, len = cos_content_dots.length; i < len; i++) {
        cos_content_dots[i].style.backgroundColor = "#9d9d9d";
    }
    cos_content_dots[cos_content_index].style.backgroundColor = "#d22c24";
    cos_steps = (cos_contentself.offsetWidth + 20) * cos_content_index;
    cos_content_wrap.style.left = -cos_steps + "px";
};
//点击previous按钮事件
cos_content_previous.onclick = function () {
    if (cos_content_index === 0) {
        cos_content_index = 5;
        cos_steps  = -(cos_contentself.offsetWidth + 20) * cos_content_index;
    }
    cos_content_index--;
    for (let i = 0, len = cos_content_dots.length; i < len; i++) {
        cos_content_dots[i].style.backgroundColor = "#9d9d9d";
    }
    cos_content_dots[cos_content_index].style.backgroundColor = "#d22c24";
    cos_steps = -(cos_contentself.offsetWidth + 20) * cos_content_index;
    cos_content_wrap.style.left = cos_steps + "px";
};
//游戏攻略
let gameStrategyBodys = document.querySelectorAll('.game-strategy-body-body'),
    gameStrategyTitles = document.querySelectorAll('.game-strategy-body-title');
let clearSetTimeout;
for (let i = 0, len = gameStrategyBodys.length; i < len; i++) {
    gameStrategyTitles[i].setAttribute('data-index', i);
    gameStrategyTitles[i].onmouseover = function() {
        let _this = this;

        clearSetTimeout = setTimeout(function () {
            for (let j = 0; j < len; j++) {
                gameStrategyTitles[j].style.backgroundColor = "#eaf1fa";
                gameStrategyBodys[j].style.width = 0;
            }
            let index = _this.getAttribute('data-index');
            gameStrategyBodys[index].style.width = '424px';
            gameStrategyBodys[index].style.backgroundColor = '#f5f9ff';
        }, 300);
    };
    gameStrategyTitles[i].onmouseout = function () {
        clearTimeout(clearSetTimeout);
    }
}
let hot_recommantion = document.querySelector('.hot_recommantion');
let hotRecommantoinContent = document.querySelector(".hot-recommantoin-content");
hot_recommantion.onmouseover = () => {
    setTimeout(() => {
        hotRecommantoinContent.style.height = '378px';
    }, 100);
};
hot_recommantion.onmouseout = () => {
    hotRecommantoinContent.style.height = 0;
};
hotRecommantoinContent.onmouseover = function() {
    this.style.height = '378px';
};
hotRecommantoinContent.onmouseout = function () {
    setTimeout( () => {
        this.style.height = '0px';
    }, 500)
};
