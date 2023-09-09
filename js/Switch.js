$(document).ready(function(){
    $("header .change ul li:nth-child(1),.sub-snav").hover(function(){
        $(".sub-snav").stop(true).animate({top:'76px'})
    },function(){
        $(".sub-snav").stop(true).animate({top:'-500px'},)
    });
    $("header .change ul li:nth-child(1),.sub-snav").hover(function(){
        $(".sub-snav .inner").stop(true).animate({opacity:'1'},1000)
    },function(){
        $(".sub-snav .inner").stop(true).animate({opacity:'0'})
    });

    
    $("header .change ul li:nth-child(2),.sub-onav").hover(function(){
        $(".sub-onav").stop(true).animate({top:'76px'})
    },function(){
        $(".sub-onav").stop(true).animate({top:'-500px'},)
    });
    $("header .change ul li:nth-child(2),.sub-onav").hover(function(){
        $(".sub-onav .inner").stop(true).animate({opacity:'1'},1000)
    },function(){
        $(".sub-onav .inner").stop(true).animate({opacity:'0'})
    });


    $("header .change ul li:nth-child(3),.sub-nnav").hover(function(){
        $(".sub-nnav").stop(true).animate({top:'76px'})
    },function(){
        $(".sub-nnav").stop(true).animate({top:'-500px'},)
    });
    $("header .change ul li:nth-child(3),.sub-nnav").hover(function(){
        $(".sub-nnav .inner").stop(true).animate({opacity:'1'},1000)
    },function(){
        $(".sub-nnav .inner").stop(true).animate({opacity:'0'})
    });


    $("header .change ul li:nth-child(4),.sub-cnav").hover(function(){
        $(".sub-cnav").stop(true).animate({top:'76px'})
    },function(){
        $(".sub-cnav").stop(true).animate({top:'-500px'},)
    });
    $("header .change ul li:nth-child(4),.sub-cnav").hover(function(){
        $(".sub-cnav .inner").stop(true).animate({opacity:'1'},1000)
    },function(){
        $(".sub-cnav .inner").stop(true).animate({opacity:'0'})
    });


    $("header .change ul li:nth-child(5),.sub-gnav").hover(function(){
        $(".sub-gnav").stop(true).animate({top:'76px'})
    },function(){
        $(".sub-gnav").stop(true).animate({top:'-500px'},)
    });
    $("header .change ul li:nth-child(5),.sub-gnav").hover(function(){
        $(".sub-gnav .inner").stop(true).animate({opacity:'1'},1000)
    },function(){
        $(".sub-gnav .inner").stop(true).animate({opacity:'0'})
    });


    $("header .change ul li:nth-child(6),.sub-dnav").hover(function(){
        $(".sub-dnav").stop(true).animate({top:'76px'})
    },function(){
        $(".sub-dnav").stop(true).animate({top:'-500px'},)
    });
    $("header .change ul li:nth-child(6),.sub-dnav").hover(function(){
        $(".sub-dnav .inner").stop(true).animate({opacity:'1'},1000)
    },function(){
        $(".sub-dnav .inner").stop(true).animate({opacity:'0'})
    });


    $("header .change ul li:nth-child(7),.sub-bnav").hover(function(){
        $(".sub-bnav").stop(true).animate({top:'76px'})
    },function(){
        $(".sub-bnav").stop(true).animate({top:'-500px'},)
    });
    $("header .change ul li:nth-child(7),.sub-bnav").hover(function(){
        $(".sub-bnav .inner").stop(true).animate({opacity:'1'},1000)
    },function(){
        $(".sub-bnav .inner").stop(true).animate({opacity:'0'})
    });

    //////////////////////////////////////////////////////////////////////////








$("#option .big .left .bon").on('click',function(){
    $("#option .big .right .dog,#option .big .right .joy,#option .big .right .con,#option .big .right .grip").css({display:'none'})
})
.on('click',function(){
    $("#option .big .right .bon").css({display:'block'})
})
.on('click',function(){
    $("#option .big .left .bon img:last-child").css({display:'none'})
})
.on('click',function(){
    $("#option .big .left .bon img:first-child").css({display:'block'})
})
.on('click',function(){
    $("#option .big .left .dog img,#option .big .left .joy img,#option .big .left .con img,#option .big .left .grip img").filter(":last-child").css({display:'none'})
})
.on('click',function(){
    $("#option .big .left .dog img,#option .big .left .joy img,#option .big .left .con img,#option .big .left .grip img").filter(":first-child").css({display:'block'})
})


$("#option .big .left .dog").on('click',function(){
    $("#option .big .right .bon,#option .big .right .joy,#option .big .right .con,#option .big .right .grip").css({display:'none'})
})
.on('click',function(){
    $("#option .big .right .dog").css({display:'block'})
})
.on('click',function(){
    $("#option .big .left .dog img:first-child").css({display:'none'})
})
.on('click',function(){
    $("#option .big .left .dog img:last-child").css({display:'block'})
})
.on('click',function(){
    $("#option .big .left .joy img,#option .big .left .con img,#option .big .left .grip img").filter(":last-child").css({display:'none'})
})
.on('click',function(){
    $("#option .big .left .joy img,#option .big .left .con img,#option .big .left .grip img").filter(":first-child").css({display:'block'})
})
.on('click',function(){
    $("#option .big .left .bon img").filter(":last-child").css({display:'block'})
})
.on('click',function(){
    $("#option .big .left .bon img").filter(":first-child").css({display:'none'})
})




$("#option .big .left .joy").on('click',function(){
    $("#option .big .right .bon,#option .big .right .dog,#option .big .right .con,#option .big .right .grip").css({display:'none'})
})
.on('click',function(){
    $("#option .big .right .joy").css({display:'block'})
})
.on('click',function(){
    $("#option .big .left .joy img:first-child").css({display:'none'})
})
.on('click',function(){
    $("#option .big .left .joy img:last-child").css({display:'block'})
})
.on('click',function(){
    $("#option .big .left .dog img,#option .big .left .con img,#option .big .left .grip img").filter(":last-child").css({display:'none'})
})
.on('click',function(){
    $("#option .big .left .dog img,#option .big .left .con img,#option .big .left .grip img").filter(":first-child").css({display:'block'})
})
.on('click',function(){
    $("#option .big .left .bon img").filter(":last-child").css({display:'block'})
})
.on('click',function(){
    $("#option .big .left .bon img").filter(":first-child").css({display:'none'})
})



$("#option .big .left .con").on('click',function(){
    $("#option .big .right .bon,#option .big .right .dog,#option .big .right .joy,#option .big .right .grip").css({display:'none'})
})
.on('click',function(){
    $("#option .big .right .con").css({display:'block'})
})
.on('click',function(){
    $("#option .big .left .con img:first-child").css({display:'none'})
})
.on('click',function(){
    $("#option .big .left .con img:last-child").css({display:'block'})
})
.on('click',function(){
    $("#option .big .left .dog img,#option .big .left .joy img,#option .big .left .grip img").filter(":last-child").css({display:'none'})
})
.on('click',function(){
    $("#option .big .left .dog img,#option .big .left .joy img,#option .big .left .grip img").filter(":first-child").css({display:'block'})
})
.on('click',function(){
    $("#option .big .left .bon img").filter(":last-child").css({display:'block'})
})
.on('click',function(){
    $("#option .big .left .bon img").filter(":first-child").css({display:'none'})
})




$("#option .big .left .grip").on('click',function(){
    $("#option .big .right .bon,#option .big .right .dog,#option .big .right .joy,#option .big .right .con").css({display:'none'})
})
.on('click',function(){
    $("#option .big .right .grip").css({display:'block'})
})
.on('click',function(){
    $("#option .big .left .grip img:first-child").css({display:'none'})
})
.on('click',function(){
    $("#option .big .left .grip img:last-child").css({display:'block'})
})
.on('click',function(){
    $("#option .big .left .dog img,#option .big .left .joy img,#option .big .left .con img").filter(":last-child").css({display:'none'})
})
.on('click',function(){
    $("#option .big .left .dog img,#option .big .left .joy img,#option .big .left .con img").filter(":first-child").css({display:'block'})
})
.on('click',function(){
    $("#option .big .left .bon img").filter(":last-child").css({display:'block'})
})
.on('click',function(){
    $("#option .big .left .bon img").filter(":first-child").css({display:'none'})
})



// #option .big .right .bon .btn .ft
// #option .big .right .bon .btn .bk

// #option .big .right .joy .btn .sd


$("#option .big .right .bon .btn .bk").on('click',function(){
    $("#option .big .right .bon img:nth-child(2) ").css({display:'block'})
})
.on('click',function(){
    $("#option .big .right .bon img:nth-child(1)").css({display:'none'})
})
.on('click',function(){
    $("#option .big .right .bon .btn .bk").css({backgroundColor:'#e60012',color:'#fff'})
})
.on('click',function(){
    $("#option .big .right .bon .btn .ft").css({backgroundColor:'#fff',color:'#000'})
})

$("#option .big .right .bon .btn .ft").on('click',function(){
    $("#option .big .right .bon img:nth-child(2) ").css({display:'none'})
})
.on('click',function(){
    $("#option .big .right .bon img:nth-child(1)").css({display:'block'})
})
.on('click',function(){
    $("#option .big .right .bon .btn .ft").css({backgroundColor:'#e60012',color:'#fff'})
})
.on('click',function(){
    $("#option .big .right .bon .btn .bk").css({backgroundColor:'#fff',color:'#000'})
})

    


$("#option .big .right .dog .btn .bk").on('click',function(){
    $("#option .big .right .dog img:nth-child(2) ").css({display:'block'})
})
.on('click',function(){
    $("#option .big .right .dog img:nth-child(1)").css({display:'none'})
})
.on('click',function(){
    $("#option .big .right .dog .btn .bk").css({backgroundColor:'#e60012',color:'#fff'})
})
.on('click',function(){
    $("#option .big .right .dog .btn .ft").css({backgroundColor:'#fff',color:'#000'})
})

$("#option .big .right .dog .btn .ft").on('click',function(){
    $("#option .big .right .dog img:nth-child(2) ").css({display:'none'})
})
.on('click',function(){
    $("#option .big .right .dog img:nth-child(1)").css({display:'block'})
})
.on('click',function(){
    $("#option .big .right .dog .btn .ft").css({backgroundColor:'#e60012',color:'#fff'})
})
.on('click',function(){
    $("#option .big .right .dog .btn .bk").css({backgroundColor:'#fff',color:'#000'})
})

    


$("#option .big .right .joy .btn .bk").on('click',function(){
    $("#option .big .right .joy img:nth-child(2)").css({display:'block'})
})
.on('click',function(){
    $("#option .big .right .joy img:nth-child(1),#option .big .right .joy img:nth-child(3)").css({display:'none'})
})
.on('click',function(){
    $("#option .big .right .joy .btn .bk").css({backgroundColor:'#e60012',color:'#fff'})
})
.on('click',function(){
    $("#option .big .right .joy .btn .ft,#option .big .right .joy .btn .sd").css({backgroundColor:'#fff',color:'#000'})
})

$("#option .big .right .joy .btn .ft").on('click',function(){
    $("#option .big .right .joy img:nth-child(1)").css({display:'block'})
})
.on('click',function(){
    $("#option .big .right .joy img:nth-child(2),#option .big .right .joy img:nth-child(3)").css({display:'none'})
})
.on('click',function(){
    $("#option .big .right .joy .btn .ft").css({backgroundColor:'#e60012',color:'#fff'})
})
.on('click',function(){
    $("#option .big .right .joy .btn .bk,#option .big .right .joy .btn .sd").css({backgroundColor:'#fff',color:'#000'})
})

$("#option .big .right .joy .btn .sd").on('click',function(){
    $("#option .big .right .joy img:nth-child(3)").css({display:'block'})
})
.on('click',function(){
    $("#option .big .right .joy img:nth-child(1),#option .big .right .joy img:nth-child(2)").css({display:'none'})
})
.on('click',function(){
    $("#option .big .right .joy .btn .sd").css({backgroundColor:'#e60012',color:'#fff'})
})
.on('click',function(){
    $("#option .big .right .joy .btn .ft,#option .big .right .joy .btn .bk").css({backgroundColor:'#fff',color:'#000'})
})



$("#option .big .right .con .btn .bk").on('click',function(){
    $("#option .big .right .con img:nth-child(2) ").css({display:'block'})
})
.on('click',function(){
    $("#option .big .right .con img:nth-child(1)").css({display:'none'})
})
.on('click',function(){
    $("#option .big .right .con .btn .bk").css({backgroundColor:'#e60012',color:'#fff'})
})
.on('click',function(){
    $("#option .big .right .con .btn .ft").css({backgroundColor:'#fff',color:'#000'})
})

$("#option .big .right .con .btn .ft").on('click',function(){
    $("#option .big .right .con img:nth-child(2) ").css({display:'none'})
})
.on('click',function(){
    $("#option .big .right .con img:nth-child(1)").css({display:'block'})
})
.on('click',function(){
    $("#option .big .right .con .btn .ft").css({backgroundColor:'#e60012',color:'#fff'})
})
.on('click',function(){
    $("#option .big .right .con .btn .bk").css({backgroundColor:'#fff',color:'#000'})
})

$("#option .big .right .grip .btn .bk").on('click',function(){
    $("#option .big .right .grip img:nth-child(2) ").css({display:'block'})
})
.on('click',function(){
    $("#option .big .right .grip img:nth-child(1)").css({display:'none'})
})
.on('click',function(){
    $("#option .big .right .grip .btn .bk").css({backgroundColor:'#e60012',color:'#fff'})
})
.on('click',function(){
    $("#option .big .right .grip .btn .ft").css({backgroundColor:'#fff',color:'#000'})
})

$("#option .big .right .grip .btn .ft").on('click',function(){
    $("#option .big .right .grip img:nth-child(2) ").css({display:'none'})
})
.on('click',function(){
    $("#option .big .right .grip img:nth-child(1)").css({display:'block'})
})
.on('click',function(){
    $("#option .big .right .grip .btn .ft").css({backgroundColor:'#e60012',color:'#fff'})
})
.on('click',function(){
    $("#option .big .right .grip .btn .bk").css({backgroundColor:'#fff',color:'#000'})
})
    
////////////////////////////////////////////////////////////////////////////


         $("footer .top .right a>img").click(function(){
                $(window).scrollTop(0);
            });

           
            

            $("header i").click(function () {
                $(".redul").stop(true).slideToggle();
            })
            $("header i").click(function () {
                $(".redsch").stop(true).animate({ top: '-300px' })
            });
            $("header>a img").click(function () {
                $(".redul").css({ display: 'none' })
            });
           
        
           
            $("header>a img").click(function () {
                $(".redsch").stop(true).animate({ top: '76px' })
            })
        
            $(".redsch .dot button").click(function () {
                $(".redsch").stop(true).animate({ top: '-300px' })
            });
            $(".redsch .dot p").click(function () {
                $(".redsch").stop(true).animate({ top: '-300px' })
            });

               

           
                
              $(".redul .inner:nth-child(1) button").click(function () {
                $(".redul .inner .blinds").stop(true).slideToggle();
            });
            $(".redul .inner:nth-child(2) button").click(function () {
                $(".redul .inner:nth-child(2) .blindo").stop(true).slideToggle();
            });
            $(".redul .inner:nth-child(3) button").click(function () {
                $(".redul .inner:nth-child(3) .blindn").stop(true).slideToggle();
            });
            $(".redul .inner:nth-child(4) button").click(function () {
                $(".redul .inner:nth-child(4) .blindc").stop(true).slideToggle();
            });
            $(".redul .inner:nth-child(5) button").click(function () {
                $(".redul .inner:nth-child(5) .blindg").stop(true).slideToggle();
            });
            $(".redul .inner:nth-child(6) button").click(function () {
                $(".redul .inner:nth-child(6) .blindd").stop(true).slideToggle();
            });
        
        
            $(".redul .dot button,.redul .dot p").click(function () {
                $(".redul").stop(true).slideToggle();
            });
        
            $(".redul .inner:nth-child(1) button").on('mouseover',function(){
                $(".redul .inner:nth-child(1) .main a,.redul .inner:nth-child(1) .main button").css({color:'#e60012'})
            })
            .on('mouseout',function(){
                $(".redul .inner:nth-child(1) .main a,.redul .inner:nth-child(1) .main button").css({color:'#868686'})
                
            })
        
            $(".redul .inner:nth-child(2) button").on('mouseover',function(){
                $(".redul .inner:nth-child(2) .main a,.redul .inner:nth-child(2) .main button").css({color:'#e60012'})
            })
            .on('mouseout',function(){
                $(".redul .inner:nth-child(2) .main a,.redul .inner:nth-child(2) .main button").css({color:'#868686'})
                
            })
        
            $(".redul .inner:nth-child(3) button").on('mouseover',function(){
                $(".redul .inner:nth-child(3) .main a,.redul .inner:nth-child(3) .main button").css({color:'#e60012'})
            })
            .on('mouseout',function(){
                $(".redul .inner:nth-child(3) .main a,.redul .inner:nth-child(3) .main button").css({color:'#868686'})
                
            })
        
            $(".redul .inner:nth-child(4) button").on('mouseover',function(){
                $(".redul .inner:nth-child(4) .main a,.redul .inner:nth-child(4) .main button").css({color:'#e60012'})
            })
            .on('mouseout',function(){
                $(".redul .inner:nth-child(4) .main a,.redul .inner:nth-child(4) .main button").css({color:'#868686'})
                
            })
        
            $(".redul .inner:nth-child(5) button").on('mouseover',function(){
                $(".redul .inner:nth-child(5) .main a,.redul .inner:nth-child(5) .main button").css({color:'#e60012'})
            })
            .on('mouseout',function(){
                $(".redul .inner:nth-child(5) .main a,.redul .inner:nth-child(5) .main button").css({color:'#868686'})
                
            })
        
            $(".redul .inner:nth-child(6) button").on('mouseover',function(){
                $(".redul .inner:nth-child(6) .main a,.redul .inner:nth-child(6) .main button").css({color:'#e60012'})
            })
            .on('mouseout',function(){
                $(".redul .inner:nth-child(6) .main a,.redul .inner:nth-child(6) .main button").css({color:'#868686'})
                
            })
                    


  


});




