const Index = {
    //轮播图地址
    BANNER : [
       "assets/images/banner/banner-2.jpg",
       "assets/images/banner/banner-3.jpg"
   ],
   //文案
   CULTURE:{
       title:"深圳可昱床垫 始于出口品质",
       context:"可昱床垫是深圳可昱睡眠科技有限公司旗下品牌。深圳可昱睡眠科技有限公司一直以来以出口高端床垫为主，年出口量达十几万张，从2013年开始由外贸进军国内高端市场，现已为数十万用户提供高品质的睡眠。可昱致力于把优质的床垫产品带给广大用户。为了保证高品质的质量，可昱先后在深圳宝安区工厂专门设立睡眠实验室，集研发制造为一体的床垫制造工厂。秉承质量为核心，可昱床垫严格对原材料采购和生产工艺把关，制造符合并高于行业标准的一流产品。工厂机器均采用和进口品牌工厂相同机械，均符合欧美标准的原材料并经过深圳专业检测部门检测。可昱制造的每件床垫产品，承载着品牌声誉和技术精髓，一如既往地为用户提供舒适、健康的睡眠体验"
   },
   HOT_PRODUCTS:[
       {
        id:1,
        url:"assets/images/mattress/mattress_10.jpg",
        title:"xxx",
        type:"床垫"
       },
       {
        id:2,
        url:"assets/images/mattress/mattress_6.jpg",
        title:"xxx",
        type:"床垫"
       },
       {
        id:3,
        url:"assets/images/mattress/mattress_3.jpg",
        title:"xxx",
        type:"床垫"
       },
       {
        id:4,
        url:"assets/images/mattress/mattress_7.jpg",
        title:"xxx",
        type:"床垫"
       }
   ],
   FOOTER_PRODUCT:[
       "assets/images/index_footer/index_fotter_1.jpg",
       "assets/images/index_footer/index_fotter_2.jpg",
       "assets/images/index_footer/index_fotter_3.jpg",
       "assets/images/index_footer/index_fotter_5.jpg",
       "assets/images/index_footer/index_fotter_6.jpg",
       "assets/images/index_footer/index_fotter_7.jpg"
   ]
}

window.onload = function(){
    /*****/
    let banner = "";
    if(Index.BANNER.length > 0){
        for(let i = 0; i < Index.BANNER.length; i++){
            banner = banner + 
            "<div class=\"banner\">"+
                "<div class=\"banner-d\">"+
                    "<img src=\"" + Index.BANNER[i] + "\" alt=\"\" >"+
                    "<div class=\"bg-image-overlay\"></div>"+
                    "<div class=\"nk-gap-3 mt-10\"></div>"+
                "</div>"
            +"</div>";
        }
    }
    // this.document.getElementById("index_banner").innerHTML = banner;
    /*****/
    // this.document.getElementById("about").getElementsByTagName("h2").innerHTML += Index.CULTURE.title;
    /*****/
    let hotProducts = "";
    if(Index.HOT_PRODUCTS.length > 0){
        for(let i = 0; i < Index.HOT_PRODUCTS.length; i++){
            hotProducts = hotProducts + 
            "<div class=\"nk-isotope-item\" data-filter=\"Mockup\">" +
                "<div class=\"nk-portfolio-item nk-portfolio-item-square nk-portfolio-item-info-style-1\">"+
                    "<a href=\"javascript:void(0);\" class=\"nk-portfolio-item-link\"></a>"+
                    "<div class=\"nk-portfolio-item-image\">"+
                        "<div style=\"background-image: url('"+ Index.HOT_PRODUCTS[i].url +"');\"></div>"+
                    "</div>"+
                    "<div class=\"nk-portfolio-item-info nk-portfolio-item-info-center text-xs-center\">"+
                        "<div>"+
                            "<h2 class=\"portfolio-item-title h3\">"+ Index.HOT_PRODUCTS[i].title +"</h2>"+
                            "<div class=\"portfolio-item-category\">"+ Index.HOT_PRODUCTS[i].type +"</div>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>";
        }
    }
    this.document.getElementById("hot_products").innerHTML = hotProducts;
    /** */
    // let = footerProducts = "";
    // if(Index.FOOTER_PRODUCT.length > 0){
    //     for(let i = 0; i < Index.FOOTER_PRODUCT.length; i++){
    //         footerProducts = footerProducts + 
    //        "<div>"+
    //             "<div>"+
    //                 "<div class=\"nk-box-1\">"+
    //                     "<img src=\""+ Index.FOOTER_PRODUCT[i] +"\" alt=\"\" class=\"nk-img-fit\">"+
    //                 "</div>"+
    //             "</div>"+
    //         "</div>"
    //     }
    // }
    // this.document.getElementById("footer_products").innerHTML = footerProducts;
}