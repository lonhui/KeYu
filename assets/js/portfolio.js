const Product = {
    data:[
        {
            id:1,
            url:"assets/images/bedFrame/bedFrame-1.jpg",
            label:"Print",
            title:"产品图XY609",
            type:"床架"
        },
        {
            id:2,
            url:"assets/images/bedFrame/bedFrame-2.jpg",
            label:"Print",
            title:"产品图XY626",
            type:"床架"
        },
        {
            id:3,
            url:"assets/images/bedFrame/bedFrame-3.jpg",
            label:"Print",
            title:"产品图阿雷佐",
            type:"床架"
        },
        {
            id:4,
            url:"assets/images/bedFrame/bedFrame-4.jpg",
            label:"Print",
            title:"产品图拉古萨",
            type:"床架"
        },
        {
            id:5,
            url:"assets/images/bedFrame/bedFrame-5.jpg",
            label:"Print",
            title:"产品图罗马",
            type:"床架"
        },
        {
            id:6,
            url:"assets/images/mattress/mattress_1.jpg",
            label:"Branding",
            title:"产品图1",
            type:"床垫"
        },
        {
            id:7,
            url:"assets/images/mattress/mattress_2.jpg",
            label:"Branding",
            title:"产品图2",
            type:"床垫"
        },
        {
            id:8,
            url:"assets/images/mattress/mattress_3.jpg",
            label:"Branding",
            title:"产品图3",
            type:"床垫"
        },
        {
            id:9,
            url:"assets/images/mattress/mattress_4.jpg",
            label:"Branding",
            title:"产品图4",
            type:"床垫"
        },
        {
            id:10,
            url:"assets/images/mattress/mattress_5.jpg",
            label:"Branding",
            title:"产品图5",
            type:"床垫"
        },
        {
            id:11,
            url:"assets/images/mattress/mattress_6.jpg",
            label:"Branding",
            title:"产品图6",
            type:"床垫"
        },
        {
            id:12,
            url:"assets/images/mattress/mattress_7.jpg",
            label:"Branding",
            title:"产品图7",
            type:"床垫"
        },
        {
            id:13,
            url:"assets/images/mattress/mattress_9.jpg",
            label:"Branding",
            title:"产品图9",
            type:"床垫"
        },
        {
            id:14,
            url:"assets/images/mattress/mattress_10.jpg",
            label:"Branding",
            title:"产品图10",
            type:"床垫"
        },
        {
            id:15,
            url:"assets/images/mattress/mattress_11.jpg",
            label:"Branding",
            title:"产品图11",
            type:"床垫"
        },
        {
            id:16,
            url:"assets/images/mattress/mattress_12.jpg",
            label:"Branding",
            title:"产品图12",
            type:"床垫"
        },
        {
            id:17,
            url:"assets/images/mattress/mattress_13.jpg",
            label:"Branding",
            title:"产品图13",
            type:"床垫"
        },
        {
            id:18,
            url:"assets/images/mattress/mattress_14.jpg",
            label:"Branding",
            title:"产品图14",
            type:"床垫"
        },
       
    ]
 }
 
 window.onload = function(){
     /*****/
     let product = "";
     if(Product.data.length > 0){
         for(let i = 0; i < Product.data.length; i++){
            product = product + 
            "<div class=\"nk-isotope-item\" data-filter=\""+ Product.data[i].label +"\">" +
                "<div class=\"nk-portfolio-item nk-portfolio-item-square nk-portfolio-item-info-style-1\">" +
                    "<a href=\"#\" class=\"nk-portfolio-item-link\"></a>" +
                        "<div class=\"nk-portfolio-item-image\">" +
                           "<div style=\"background-image: url('"+ Product.data[i].url +"');\"></div>" +
                        "</div>" +
                        "<div class=\"nk-portfolio-item-info nk-portfolio-item-info-center text-xs-center\">"+
                            "<div>"+
                                "<h2 class=\"portfolio-item-title h3\">"+  Product.data[i].title +"</h2>"+
                                "<div class=\"portfolio-item-category\">"+  Product.data[i].type +"</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>"
         }
     }
     this.document.getElementById("ProductList").innerHTML = product;
     
 }