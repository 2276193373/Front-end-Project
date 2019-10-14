<template>
  <section class="msite">
    <!--首页头部title-->
    <!--由msite_header改成header-->
    <HeaderTop :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>

      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航轮播-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(pages, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(data, index) in pages" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl + data.image_url" alt="图片加载失败">
              </div>
              <span>{{data.title}}</span>
            </a>

          </div>
        </div>
        <!-- 轮播图页码(小圆点) -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="back" v-else>
    </nav>
    <!--首页附近商家列表-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <!--      <div class="shop_container"></div>-->
      <ShopList/>
      <div style="height: 50px;"></div>
    </div>
  </section>

</template>

<script>
    //引入swiper
    import Swiper from 'swiper'
    //同时引入swiper的css文件
    import 'swiper/dist/css/swiper.min.css'
    import HeaderTop from "../../components/HeaderTop/HeaderTop";
    import ShopList from "../../components/ShopList/ShopList";
    import {mapState} from 'vuex'

    export default {
        //注意要在页面加载完成之后（mounted）再进行swiper的初始化
        mounted() {
            this.$store.dispatch('getCategorys');
            //获取异步数据
            this.$store.dispatch('getShops');
        },
        components: {
            HeaderTop,
            ShopList
        },
        //不懂，查资料
        computed: {
            ...mapState(['address', 'categorys']),
            /*
            * 根据categorys一维数组生成一个二维数组
            * 小数组中的元素个数最大是8
            * */
            categorysArr() {
                //1.先从当前组件中得到所有食品分类的一维数组
                const {categorys} = this
                //2.准备一个空的二维数组 --categorysArr
                const arr = []
                //3.准备一个小数组--pages(最大长度为8)
                let minArr = []
                //4.遍历categorys得到处理后的二维数组
                categorys.forEach(data => {
                    if (minArr.length === 8) {
                        minArr = []
                    }
                    if (minArr.length === 0) {
                        arr.push(minArr)
                    }
                    minArr.push(data)
                })
                return arr
            }
        },
        data() {
            return {
                baseImageUrl: 'https://fuss10.elemecdn.com'
            }
        },
        watch: {
            //监视 ...mapState(['address', 'categorys'])中的categorys
            categorys(value) { //categorys数组中有数据了
                this.$nextTick(() => {
                    //一旦完成界面更新，立即执行回调
                    new Swiper('.swiper-container', {
                        autoplay: true,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        }
                    })
                })
            }
        }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite //首页
    width 100%

    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px

      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%

        .icon-sousuo
          font-size 25px
          color #fff

      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center

        .header_title_text
          font-size 20px
          color #fff
          display block

      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)

        .header_login_text
          color #fff

  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff

    .swiper-container
      width 100%
      height 100%

      .swiper-wrapper
        width 100%
        height 100%

        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap

          .link_to_food
            width 25%

            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0

              img
                display inline-block
                width 50px
                height 50px

            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666

      .swiper-pagination
        > span.swiper-pagination-bullet-active
          background #02a774

  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff

    .shop_header
      padding 10px 10px 0

      .shop_icon
        margin-left 5px
        color #999

      .shop_header_title
        color #999
        font-size 14px
        line-height 20px
</style>
