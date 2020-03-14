const Blog = {
    QuestionAndAnswer:[
        {
            id:1,
            question:"床垫使用过一段时间后，出现了人体压痕怎么办?",
            answer:"一张舒适的床垫皆经过特别设计，所使用的材料都在一定程度上会有形变的范围，在经过一段时间的使用之后，会因为材料的压力感应以及空气被挤压掉等综合原因，产生人体压痕。此时请别担心，这是品质较好的床垫所出现的正常现象，这便意味着床垫垫层已经自然的顺应消费者的身形，绝非弹簧凹陷。人体压痕若在床垫总高度的10%的范围内是正常的，这说明产品符合人体工程学设计，并且在一定程度上提高了床软垫的舒适度。如要平衡这些凹痕，可定期翻动床垫。"
        },
        {
             id:2,
             question:"床垫弄湿或弄脏了怎么办?",
             answer:"正常情况下，我们会在床垫上铺上床罩，所以弄脏床垫一般不会发生。但是弄湿床垫就有可能了，不管是果汁、饮料或小朋友尿床等流质的东西，水分会渗透床罩流到床垫上，如果真的发生了，请赶快用一块干抹布，用压摁的方式迅速吸干水分，同时将床垫竖立一会儿，让它晾干避免水分一直渗透到床底。市面上有销售床垫专用的保洁垫，如果能在床垫上先铺保洁垫，再铺床罩就更好了。"
        },
        {
            id:3,
            question:"为什么床垫会下陷?",
            answer:"造成床垫下陷的因素很多，这包含了使用承托力欠佳的床架、不正确的排骨架床架、损坏变形的床架，或是已受损的弹簧床架。请使用正确的床架，好的床架可增加上垫的弹性及舒适度，并且减少弹簧下陷的机会。"
        }
    ]
 }
 
 window.onload = function(){
     /*****/
     let questionAndAnswer = "";
     if(Blog.QuestionAndAnswer.length > 0){
         for(let i = 0; i < Blog.QuestionAndAnswer.length; i++){
            questionAndAnswer = questionAndAnswer + 
             "<div class=\"nk-isotope-item\" data-filter=\"Design\">" +
                 "<div class=\"nk-blog-post\" style=\"margin-top: 25px\">" +
                     "<div class=\"nk-post-thumb\">" +
                         "<a href=\"javascript:void(0);\">" +
                             "<img src=\"\" alt=\"\" class=\"nk-img-stretch\">" +
                         "</a>" +
                             "<div class=\"nk-post-category\"><a href=\"javascript:void(0);\">"+ (Blog.QuestionAndAnswer[i].id > 10 ?"0"+Blog.QuestionAndAnswer[i].id:Blog.QuestionAndAnswer[i].id) +"</a></div>" +
                     "</div>" +
                     "<h2 class=\"nk-post-title h4\"><a href=\"javascript:void(0);\">"+ Blog.QuestionAndAnswer[i].question +"</a></h2>" +
                     "<div class=\"nk-post-text\">" +
                         "<p>"+ Blog.QuestionAndAnswer[i].answer +"</p>" +
                     "</div>" +
                 "</div>" +
             "</div>" 
         }
     }
     this.document.getElementById("QuestionAndAnswer").innerHTML = questionAndAnswer;
     
 }