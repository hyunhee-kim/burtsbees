$(function(){

			var menuGnb =$("#gnb li");
			var menuLnb =$("#lnb li");
			var	ht =$(window).height();
			var wd = $(window).width();
			var nav_current =0;

//윈도우 사이즈 조절했을때 메뉴 활성화
			var ht = $(window).height();

			 $("#wrapper").height(ht);

            $(window).resize(function() {
                var ht = $(window).height();
                $("#wrapper").height(ht);
            });

// nav GNB 클릭시 호버활성화--------------------------------
			menuGnb.click(function(){
				var gnb =$(this).index();
				menuGnb.removeClass("active");
			    menuGnb.eq(gnb).addClass("active");
			})


// nav GNB 클릭시 스르륵 이동---------------------------
			menuGnb.click(function(e){
				var wd=$("section").width();
				var tg=$(this);
				e.preventDefault();
				var i=tg.index();
				var nowLeft=i*wd;
				menuGnb.removeClass("active");
				tg.addClass("active");
				$("html, body").animate({"scrollLeft":nowLeft},500);
			})
			
// nav LNB 클릭시 스르륵 이동---------------------------
			menuLnb.eq(0).click(function(e){
				var wd=$("section").width();
				var tg=$(this);
				e.preventDefault();
				$("html, body").animate({"scrollLeft":wd},500);
			})
			menuLnb.eq(1).click(function(e){
				var wd=$("section").width();
				var tg=$(this);
				e.preventDefault();
				$("html, body").animate({"scrollLeft":wd*2},500);
			})
			menuLnb.eq(3).click(function(e){
				var wd=$("section").width();
				var tg=$(this);
				e.preventDefault();
				$("html, body").animate({"scrollLeft":wd*3},500);
			})
			menuLnb.eq(4).click(function(e){
				var wd=$("section").width();
				var tg=$(this);
				e.preventDefault();
				$("html, body").animate({"scrollLeft":wd*4},500);
			})
			menuLnb.eq(5).click(function(e){
				var wd=$("section").width();
				var tg=$(this);
				e.preventDefault();
				$("html, body").animate({"scrollLeft":wd*5},500);
			})

//스크롤시 해당 컨텐츠의 메뉴 활성화------------------------------------


// <<메인페이지>>
//로그인창 띄우기--------------------------------------------
			var login_modal_box =$(".login_modal_box");
			var login_modal =$(".login_modal");
			var id_txt =$("#login");
			var pas_txt =$("#pas");
			var login_btn =$(".login_btn");
			var sign_up_btn =$(".sign_up_btn");
			var main_screen =$(".screen");
			var login_Xbtn =$(".login_Xbtn");
			var main_sns_btn =$(".sns_box .sns");
			var body =$("body");

			var main_sign_up_modal_box =$(".main_sign_up_modal_box");
			var main_sign_up_modal1 =$(".main_sign_up_modal1");
			var main_sign_up_modal2 =$(".main_sign_up_modal2");
			var id_check =$("#id_check");
			var overlap_check =$("#overlap_check");
			var sign_up_pas =$("#sign_up_pas");
			var pas_re_check =$("#pas_re_check");
			var phon_num =$("#phon_num");
			var email =$("#email");
			var certification_tel =$("#certification_tel");
			var certification_e_mail =$("#certification_e_mail");
			var agree1 =$("#agree1");
			var agree2 =$("#agree2");
			var main_sign_up_btn2 =$(".sign_up_btn2");
			var main_sign_up_Xbtn =$(".sign_up_Xbtn");
			var sign_up_screen=$(".screen0");


			login_modal_box.hide();
			login_modal.hide();
			id_txt.hide();
			pas_txt.hide();
			login_btn.hide();
			sign_up_btn.hide();
			main_screen.hide();
			login_Xbtn.hide();

			main_sign_up_modal_box.hide();
			main_sign_up_modal1.hide();
			main_sign_up_modal2.hide();
			id_check.hide();
			overlap_check.hide();
			sign_up_pas.hide();
			pas_re_check.hide();
			phon_num.hide();
			email.hide();
			certification_tel.hide();
			certification_e_mail.hide();
			agree1.hide();
			agree2.hide();
			main_sign_up_btn2.hide();
			main_sign_up_Xbtn.hide();
			sign_up_screen.hide();

//로그인 이미지 클릭시------------------------------------
			main_sns_btn.eq(3).click(function(){
				login_modal_box.show();
				login_modal.show();
				id_txt.show();
				pas_txt.show();
				login_btn.show();
				sign_up_btn.show();
				main_screen.show();
				login_Xbtn.show();

				body.addClass("scroll_stop");
			})
//로그인버튼 클릭시------------------------------			
			login_btn.click(function(){
				alert("환영합니다!");
				login_modal_box.hide();
				login_modal.hide();
				id_txt.hide();
				pas_txt.hide();
				login_btn.hide();
				sign_up_btn.hide();
				main_screen.hide();
				login_Xbtn.hide();
			})
//회원가입 버튼 클릭시----------------------------			
			sign_up_btn.click(function(){
				
				main_sign_up_modal_box.show();
				main_sign_up_modal1.show();
				main_sign_up_modal2.show();
				id_check.show();
				overlap_check.show();
				sign_up_pas.show();
				pas_re_check.show();
				phon_num.show();
				email.show();
				certification_tel.show();
				certification_e_mail.show();
				agree1.show();
				agree2.show();
				main_sign_up_btn2.show();
				main_sign_up_Xbtn.show();
				sign_up_screen.show();	
				body.addClass("scroll_stop");	
			})

			overlap_check.click(function(){
					alert("사용가능합니다.");
				})
			certification_tel.click(function(){
					alert("인증이 완료 되었습니다.");
				})
			certification_e_mail.click(function(){
					alert("이메일 인증이 완료 되었습니다.");
				})

//회원가입하기 버튼 클릭시 ----------------------			
			main_sign_up_btn2.click(function(){
					alert("축하합니다.\n 회원가입이 완료 되었습니다.");
					alert("로그인창으로 이동합니다.");

					main_sign_up_modal_box.hide();
					main_sign_up_modal1.hide();
					main_sign_up_modal2.hide();
					id_check.hide();
					overlap_check.hide();
					sign_up_pas.hide();
					pas_re_check.hide();
					phon_num.hide();
					email.hide();
					certification_tel.hide();
					certification_e_mail.hide();
					agree1.hide();
					agree2.hide();
					main_sign_up_btn2.hide();
					main_sign_up_Xbtn.hide();
					sign_up_screen.hide();
					body.removeClass("scroll_stop");
				})
//회원가입창 닫기--------------------------------------
			main_sign_up_Xbtn.click(function(){
				main_sign_up_modal_box.hide();
				main_sign_up_modal1.hide();
				main_sign_up_modal2.hide();
				id_check.hide();
				overlap_check.hide();
				sign_up_pas.hide();
				pas_re_check.hide();
				phon_num.hide();
				email.hide();
				certification_tel.hide();
				certification_e_mail.hide();
				agree1.hide();
				agree2.hide();
				main_sign_up_btn2.hide();
				main_sign_up_Xbtn.hide();
				sign_up_screen.hide();
				body.removeClass("scroll_stop");
			})

			sign_up_screen.click(function(){
				main_sign_up_modal_box.hide();
				main_sign_up_modal1.hide();
				main_sign_up_modal2.hide();
				id_check.hide();
				overlap_check.hide();
				sign_up_pas.hide();
				pas_re_check.hide();
				phon_num.hide();
				email.hide();
				certification_tel.hide();
				certification_e_mail.hide();
				agree1.hide();
				agree2.hide();
				main_sign_up_btn2.hide();
				main_sign_up_Xbtn.hide();
				sign_up_screen.hide();
				body.removeClass("scroll_stop");
			})


//로그인창 닫기------------------------------------------			
			login_Xbtn.click(function(){
				login_modal_box.hide();
				login_modal.hide();
				id_txt.hide();
				pas_txt.hide();
				login_btn.hide();
				sign_up_btn.hide();
				main_screen.hide();
				login_Xbtn.hide();

				body.removeClass("scroll_stop");
			})
			main_screen.click(function(){
				login_modal_box.hide();
				login_modal.hide();
				id_txt.hide();
				pas_txt.hide();
				login_btn.hide();
				sign_up_btn.hide();
				main_screen.hide();
				login_Xbtn.hide();

				body.removeClass("scroll_stop");
			})


//캐릭터 움직임. 
			$(window).scroll(function(){
				var main_cha_box = $(".main_parent");
				var brand_cha_box = $(".brand_cha_parent");
				var mr_burt = $(".burt_parent .burt");
				var ing_cha = $(".ing_cha");
				var honey_box =$(".honey_box_02");
				var review_lamp =$(".bg_lamp");
				var cos_lamp =$(".street_lamp");
				var review_sign =$(".sign");
				var movie_board = $(".movie_board");

				if($(this).scrollLeft()>=1800){
               		mr_burt.animate({"bottom":"-1%"},800,"linear");
               	}

           		if($(this).scrollLeft()>=1900){
               		main_cha_box.animate({"opacity":"0"},500,"linear");
               		brand_cha_box.animate({"opacity":"1"},2500,"linear");
               	}

               	if($(this).scrollLeft()>=3500){
               		ing_cha.addClass("on");
               	}else{
               		ing_cha.removeClass("on");
               	}

               	if($(this).scrollLeft()>=4000){
               		honey_box.addClass("ani");
               	}else{
               		honey_box.removeClass("ani");
               	}

               	if($(this).scrollLeft()>=7000){
               		movie_board.addClass("ani");
               	}else{
               		movie_board.removeClass("ani");
               	}

               	if($(this).scrollLeft()>=7500){
               		review_lamp.addClass("ani");
               	}else{
               		review_lamp.removeClass("ani");
               	}
               	if($(this).scrollLeft()>=7500){
               		review_sign.addClass("ani");
               	}else{
               		review_sign.removeClass("ani");
               	}
               	if($(this).scrollLeft()>=9000){
               		cos_lamp.addClass("ani");
               	}else{
               		cos_lamp.removeClass("ani");
               	}


        	})

// 메인  캐로셀 ----------------------------------------
			var main_carousel_img =$(".main_gallery li");
			var main_carousel_prev_btn =$(".main_left_btn");
			var main_carousel_next_btn =$(".main_right_btn");
			var main_sns_btn =$(".sns_box .sns");
			var current = 0;
			var i=0;


			main_sns_btn.eq(0).click(function(){
			window.open("about:blank").location.href="https://ko-kr.facebook.com/burtsbeeskorea"
			})
			main_sns_btn.eq(1).click(function(){
			window.open("about:blank").location.href="https://www.instagram.com/burtsbeeskr/?hl=ko"
			})
			main_sns_btn.eq(2).click(function(){
			window.open("about:blank").location.href="https://www.youtube.com/c/BurtsBeesKorea/videos"
			})

		
// 메인 왼쪽버튼 클릭시---------------------------------
			main_carousel_prev_btn.click(function(){	
			var currentImg = main_carousel_img.eq(current);
		    var nextImg = main_carousel_img.eq(current=current-1);

		    currentImg.stop().css({"left":"0"}).animate({"left":"100%"});
			nextImg.stop().css({"left":"-100%"}).animate({"left":"0"});

			if(current==-4){
					current=0;
				}
			})
// 메인 오른쪽버튼 클릭시---------------------------------
			main_carousel_next_btn.click(function(){
			var currentImg = main_carousel_img.eq(current);
		    var nextImg = main_carousel_img.eq(current=current+1);

		    currentImg.stop().css({"left":"0"}).animate({"left":"-100%"});
			nextImg.stop().css({"left":"100%"}).animate({"left":"0"});

				if(current==3){
					current=-1;
				}
			})

// <<브랜드페이지>>
// 브랜드 캐로셀 버튼클릭시 넘어가는거----------------------
			var brand_carousel_img =$(".brand_gallery li");
			var brand_carousel_btn =$(".brand_btn_set li");
			var brand_current = 0;
			var brand_i = 0;

// 브랜드 상단  케로셀 버튼 클릭시--------------------------------------
			brand_carousel_btn.click(function(){
				var tg =$(this);
				var brand_i = tg.index();

				if(brand_current == brand_i){
					return 0;
					//함수를 호출하지 않겠다는 약속. --> 동작하지 않겠다.
				}
				
				//함수호출
				move(brand_i);

				function move(brand_i){
					var currentImg = brand_carousel_img.eq(brand_current);
					var nextImg = brand_carousel_img.eq(brand_i);
					currentImg.css("left",0).animate({"left":"-100%"} );
					nextImg.css("left","100%").animate({"left":0});
					brand_current = brand_i;
				}
				brand_carousel_btn.removeClass("brand_active");
				tg.addClass("brand_active");
			})

		// 	brand_carousel_img.eq(current).css("left",0);
		// 	setInterval(function(){
		// 	var prev =brand_carousel_img.eq(current);
		// 	prev.css("left",0).animate({"left":"-100%"},6000);
		// 	//위쪽 커렌트는 0

		// 	current = current+1;
		// 	//커렌트 1로 바꿈
		// 	if(current==3) current=0;
		// 		//커렌트가 3이 될때 커렌트는 0이된다.
			
		// 	var next =brand_carousel_img.eq(current);
		// 	next.css("left","100%").animate({"left":0},6000);

		// },12000);

// <<성분페이지>>
//성분모달 시작 ---------------------------------------
			var fruit1 =$(".lemon");
			var fruit2 =$(".pomeranate");
			var fruit3 =$(".mango");
			var fruit4 =$(".orange");
			var flower1 =$(".bee_flower");
			var flower2 =$(".lavender");
			var flower3 =$(".sunflower");	
			var tree_up2 =$(".shea_butter");
			var tree_up1 =$(".bee_house");
			var ing_modal_contents =$(".ing_content");
			var ing_modal_bg_box =$(".ing_modal_list_box");
			var ing_modal_btn =$(".ing_modal_Xbtn");
			var ing_modal_screen =$(".screen1");
			var ing_tab_img =$(".ing_content1");
			var ing_tab_btn =$(".ing_story1_tab li");
			var ing_tab_Xbtn =$(".ing_Tab_Xbtn");
			var ing_tab_box =$(".ing_story1_tab")

			ing_modal_bg_box.hide();
			ing_modal_contents.hide();
			ing_modal_screen.hide();
			ing_tab_img.hide();
			ing_tab_btn.hide();
			ing_tab_Xbtn.hide();
			ing_tab_box.hide();

			tree_up1.click(function(){
				ing_tab_img.hide();
				ing_tab_img.eq(0).show();
				ing_tab_btn.show();
				ing_modal_screen.show();
				ing_tab_Xbtn.show();
				ing_tab_box.show();

				body.addClass("scroll_stop");
			})
			
			ing_tab_btn.click(function(){
				var i =$(this).index();

				ing_tab_img.hide();
				ing_tab_img.eq(i).show();

				ing_tab_btn.removeClass("ing_active");
				ing_tab_btn.eq(i).addClass("ing_active");
				
			})

			tree_up2.click(function(){
				ing_modal_bg_box.show();
				ing_modal_contents.eq(0).show();
				ing_modal_screen.show();
				body.addClass("scroll_stop");
			})
			fruit1.click(function(){
				ing_modal_bg_box.show();
				ing_modal_contents.eq(1).show();
				ing_modal_screen.show();
				body.addClass("scroll_stop");
			})
			fruit2.click(function(){
				ing_modal_bg_box.show();
				ing_modal_contents.eq(2).show();
				ing_modal_screen.show();
				body.addClass("scroll_stop");
			})
			fruit3.click(function(){
				ing_modal_bg_box.show();
				ing_modal_contents.eq(3).show();
				ing_modal_screen.show();
				body.addClass("scroll_stop");
			})
			fruit4.click(function(){
				ing_modal_bg_box.show();
				ing_modal_contents.eq(4).show();
				ing_modal_screen.show();
				body.addClass("scroll_stop");
			})
			flower1.click(function(){
				ing_modal_bg_box.show();
				ing_modal_contents.eq(5).show();
				ing_modal_screen.show();
				body.addClass("scroll_stop");
			})
			flower2.click(function(){
				ing_modal_bg_box.show();
				ing_modal_contents.eq(6).show();
				ing_modal_screen.show();
				body.addClass("scroll_stop");
			})
			flower3.click(function(){
				ing_modal_bg_box.show();
				ing_modal_contents.eq(7).show();
				ing_modal_screen.show();
				body.addClass("scroll_stop");
			})

// 성분컨텐츠 모달창 닫기버튼
			ing_tab_Xbtn.click(function(){
				ing_tab_btn.hide();
		 		ing_tab_img.hide();
		 		ing_tab_Xbtn.hide();
		 		ing_modal_screen.hide();
		 		ing_tab_box.hide();
		 		body.removeClass("scroll_stop");
			})	

			ing_modal_btn.click(function(){
		 		ing_modal_bg_box.hide();
		 		ing_modal_contents.hide();
		 		ing_modal_screen.hide();
		 		body.removeClass("scroll_stop");
			})
			ing_modal_screen.click(function(){
				ing_modal_screen.hide();
				ing_modal_bg_box.hide();
		 		ing_modal_contents.hide();
		 		ing_tab_btn.hide();
		 		ing_tab_img.hide();
		 		ing_tab_Xbtn.hide();
		 		ing_tab_box.hide();
		 		body.removeClass("scroll_stop");
			});

//<<이벤트 페이지>>
// 이벤트 캐로셀 --------------------------------------------------
			var event_carousel_img =$(".event_gallery li");
			var event_carousel_prev_btn =$(".event_left");
			var event_carousel_next_btn =$(".eventright");
			var event_current = 0;
			var event_i=0; 
			var event_modal_list_box =$(".event_modal_list_box");
 			var event_modal_list =$(".event_modal_list");
 			var event_gallery =$(".event_gallery");
 			var event_modal_inside_box1 =$(".event_carousel_box2");	
 			var event_modal_inside_box2 =$(".event_carousel2");	
 			var event_modal_img =$(".event_gallery2 li");
 			var event_modal_Xbtn =$(".event_modal_Xbtn");
			var event_modal_screen =$(".screen3");
			var event_modal_prev_btn =$(".event_left_btn");
			var event_modal_next_btn =$(".event_right_btn");
			var event_modal_inside_btn =$(".event_btn_set1 li");

			var event_tab_btn =$(".event_tab_box li");
			var event_tab_box =$(".event_tab_box");
			var event_tab_story =$(".event_tab");
			var event_modal_map =$(".event_in_map");

			var event_modal_info_btn3 =$(".event_signUp_btn");
			var event_modal_list_box2 =$(".event_modal_list_box2");
			var event_modal_list2 =$(".event_modal_list2");
			var event_modal2_in_content1 =$(".event_story2");
			var event_modal2_in_content2 =$("#event_url");
			var event_modal2_in_content_btn =$(".event_url_btn");
			var event_modal_Xbtn2 =$(".event_modal_Xbtn2");

			var event_modal_list_box3 =$(".event_modal_list_box3");
			var event_modal_list3 =$(".event_modal_list3");
			var event_modal3_in_content1 =$(".event_story3");
			var event_modal_Xbtn3 =$(".event_modal_Xbtn3");

// 이벤트 캐로셀 왼쪽버튼 클릭시 ---------------------------------
			event_carousel_prev_btn.click(function(){	
				var e_ca_le = event_gallery.css("left");
				if(e_ca_le == "0px"){
					return 0;
				}
				
			event_gallery.stop().css({"left":"-50%"}).animate({"left":"0%"});
			})

// 이벤트 캐로셀 오른쪽 버튼 클릭시 ---------------------------------
			event_carousel_next_btn.click(function(){
				var e_ca_ri = event_gallery.css("right");
				// alert(e_ca_ri);
				if(e_ca_ri == "-7.01565px"){
					return 0;
				}

			    event_gallery.stop().css({"left":"0%"}).animate({"left":"-50%"});
			})


//이벤트 캐로셀 클릭시 뜨는 모달창 1번.------------------------------------
				event_modal_list_box.hide();
 				event_modal_list.hide();
 				event_modal_inside_box1.hide();
 				event_modal_inside_box2.hide();
 				event_modal_img.hide();
 				event_modal_Xbtn.hide();
				event_modal_screen.hide();
				event_modal_prev_btn.hide();
				event_modal_next_btn.hide();
				event_modal_inside_btn.hide();
				event_tab_btn.hide();
				event_tab_box.hide();
				event_tab_story.hide();
				event_modal_info_btn3.hide();
				event_modal_map.hide();

				event_carousel_img.eq(0).click(function(){
					event_modal_list_box.show();
 					event_modal_list.show();
 					event_modal_inside_box1.show();
 					event_modal_inside_box2.show();
 					event_modal_img.show();
 					event_modal_Xbtn.show();
					event_modal_screen.show();
					event_modal_prev_btn.show();
					event_modal_next_btn.show();
					event_modal_inside_btn.show();
					event_tab_btn.show();
					event_tab_box.show();
					event_tab_story.hide();
					event_tab_story.eq(0).show();
					event_modal_info_btn3.show();
					event_modal_map.show()
					body.addClass("scroll_stop");
				})

				event_tab_btn.click(function(){
				var i =$(this).index();

				event_tab_story.hide();
				event_tab_story.eq(i).show();

				event_tab_btn.removeClass("active");
				event_tab_btn.eq(i).addClass("active");
				
			})


// 이벤트 모달 하단 케로셀 버튼 클릭시--------------------------------------
			event_modal_inside_btn.click(function(){
				var tg =$(this);
				var event_i = tg.index();

				if(event_current == event_i){
					return 0;
					//함수를 호출하지 않겠다는 약속. --> 동작하지 않겠다.
				}
				
				//함수호출
				move(event_i);

				function move(event_i){
					var currentImg = event_modal_img.eq(event_current);
					var nextImg = event_modal_img.eq(event_i);
					currentImg.css("left","2.5%").animate({"left":"-100%"} );
					nextImg.css("left","100%").animate({"left":"2.5%"});
					event_current = event_i;
				}
				event_modal_inside_btn.removeClass("event_btn_active");
				tg.addClass("event_btn_active");
			})

//이벤트 모달창 하단 작성하러가기 버튼 클릭시 ------------------------------
			event_modal_info_btn3.click(function(){
			window.open("about:blank").location.href="https://docs.google.com/forms/d/e/1FAIpQLSf4mWibiwVVlK2Vs65I4XZRxs2HTb5-DRhxgcXRwPOeN6xD7Q/viewform?usp=sf_link"
			})

// 이벤트 모달창 닫기버튼
			event_modal_Xbtn.click(function(){
		 		event_modal_list_box.hide();
 				event_modal_list.hide();
 				event_modal_inside_box1.hide();
 				event_modal_inside_box2.hide();
 				event_modal_img.hide();
 				event_modal_Xbtn.hide();
				event_modal_screen.hide();
				event_modal_prev_btn.hide();
				event_modal_next_btn.hide();
				event_modal_inside_btn.hide();
				event_modal_info_btn3.hide();
				event_modal_map.hide();
				event_tab_btn.hide();
				event_tab_box.hide();
				event_tab_story.hide();
				body.removeClass("scroll_stop");
			})
			event_modal_screen.click(function(){
				event_modal_list_box.hide();
 				event_modal_list.hide();
 				event_modal_inside_box1.hide();
 				event_modal_inside_box2.hide();
 				event_modal_img.hide();
 				event_modal_Xbtn.hide();
				event_modal_screen.hide();
				event_modal_prev_btn.hide();
				event_modal_next_btn.hide();
				event_modal_inside_btn.hide();
				event_modal_info_btn3.hide();
				event_modal_map.hide();
				event_tab_btn.hide();
				event_tab_box.hide();
				event_tab_story.hide();
				body.removeClass("scroll_stop");
			});

            //이벤트 모달 2번째 창 구현--------------------------------------
			event_modal_list_box2.hide();
			event_modal_list2.hide();
			event_modal2_in_content1.hide();
			event_modal2_in_content2.hide();
			event_modal2_in_content_btn.hide();
			event_modal_Xbtn2.hide();

			event_carousel_img.eq(1).click(function(){
				event_modal_screen.show();
				event_modal_list_box2.show();
				event_modal_list2.show();
				event_modal2_in_content1.show();
				event_modal2_in_content2.show();
				event_modal2_in_content_btn.show();
				event_modal_Xbtn2.show();
				body.addClass("scroll_stop");
			})


//참여버튼 클릭시 알러트창 -----------------------------------------
			event_modal2_in_content_btn.click(function(){
				alert("로그인 후 참여 가능합니다.");
			})

            //모달창 닫기------------------------------------------------------
			event_modal_Xbtn2.click(function(){
				event_modal_screen.hide();
				event_modal_list_box2.hide();
				event_modal_list2.hide();
				event_modal2_in_content1.hide();
				event_modal2_in_content2.hide();
				event_modal2_in_content_btn.hide();
				event_modal_Xbtn2.hide();
				body.removeClass("scroll_stop");
			})
			event_modal_screen.click(function(){
				event_modal_screen.hide();
				event_modal_list_box2.hide();
				event_modal_list2.hide();
				event_modal2_in_content1.hide();
				event_modal2_in_content2.hide();
				event_modal2_in_content_btn.hide();
				event_modal_Xbtn2.hide();
				body.removeClass("scroll_stop");
			})


//이벤트 모달 3번째 창 구현--------------------------------------
			event_modal_list_box3.hide();
			event_modal_list3.hide();
			event_modal3_in_content1.hide();
			event_modal_Xbtn3.hide();


			event_carousel_img.eq(2).click(function(){
				event_modal_screen.show();
				event_modal_list_box3.show();
				event_modal_list3.show();
				event_modal3_in_content1.show();
				event_modal_Xbtn3.show();
				body.addClass("scroll_stop");
			})

//모달창 닫기------------------------------------------------------
			event_modal_Xbtn3.click(function(){
				event_modal_screen.hide();
				event_modal_list_box3.hide();
				event_modal_list3.hide();
				event_modal3_in_content1.hide();
				event_modal_Xbtn3.hide();
				body.removeClass("scroll_stop");
			})
			event_modal_screen.click(function(){
				event_modal_screen.hide();
				event_modal_list_box3.hide();
				event_modal_list3.hide();
				event_modal3_in_content1.hide();
				event_modal_Xbtn3.hide();
				body.removeClass("scroll_stop");
			})
// <<리뷰페이지>>
//리뷰 캐로셀----------------------------------------------------
            var review_carousel_img =$(".review_gallery li");
			var review_carousel_prev_btn =$(".brick_left");
			var review_carousel_next_btn =$(".brick_right");
			var current = 0;
			var i=0;

//리뷰 왼쪽버튼 클릭시---------------------------------
			review_carousel_prev_btn.click(function(){	
			var currentImg = review_carousel_img.eq(current);
		    var nextImg = review_carousel_img.eq(current=current-1);

		    currentImg.stop().css({"left":"0"}).animate({"left":"100%"});
			nextImg.stop().css({"left":"-100%"}).animate({"left":"0"});

			if(current==-2){
					current=0;
				}
			})
//리뷰 오른쪽버튼 클릭시---------------------------------
			review_carousel_next_btn.click(function(){
			var currentImg = review_carousel_img.eq(current);
		    var nextImg = review_carousel_img.eq(current=current+1);

		    currentImg.stop().css({"left":"0"}).animate({"left":"-100%"});
			nextImg.stop().css({"left":"100%"}).animate({"left":"0"});

				if(current==1){
					current=-1;
				}
			})
//리뷰 모달
			var review_modal_content1 =$(".review_story1");
			var review_modal_content2 =$(".review_story2");
			var review_modal_list =$(".review_modal_list");
			var review_modal_btn =$(".review_modal_Xbtn");
			var review_modal_screen =$(".screen2");
			var review_modal_in_btn =$(".review_write_btn");
			var review_modal_review_box =$(".review_modal_list2");
			var review_modal_review_box_btn =$(".review_modal_Xbtn2");
			var review_modal_review1 =$("#review_txt1");
			var review_modal_review2 =$("#star");
			var review_modal_review3 =$("#cos_select");
			var review_modal_review4 =$("#review_file");
			var review_modal_review5 =$("#review_txt2");
			var review_modal_review_done =$(".review_done");
			var review_modal_screen2 =$(".screen4");

			review_modal_content1.hide();
			review_modal_content2.hide();
			review_modal_screen.hide();
			review_modal_in_btn.hide();
			review_modal_btn.hide();
			review_modal_list.hide();


			review_carousel_img.eq(0).click(function(){
				review_modal_content1.show();
				review_modal_screen.show();
				review_modal_in_btn.show();
				review_modal_btn.show();
				review_modal_list.show();
				body.addClass("scroll_stop");
			})

			review_carousel_img.eq(1).click(function(){
				review_modal_content2.show();
				review_modal_screen.show();
				review_modal_btn.show();
				review_modal_list.show();
				body.addClass("scroll_stop");
			})

// 리뷰컨텐츠 모달창 닫기버튼
			review_modal_btn.click(function(){
		 		review_modal_content1.hide();
				review_modal_content2.hide();
		 		review_modal_screen.hide();
		 		review_modal_in_btn.hide();
		 		review_modal_btn.hide();
		 		review_modal_list.hide();
		 		body.removeClass("scroll_stop");
			})
			review_modal_screen.click(function(){
				review_modal_screen.hide();
				review_modal_btn.hide();
		 		review_modal_content1.hide();
				review_modal_content2.hide();
				review_modal_in_btn.hide();
				review_modal_list.hide();
				body.removeClass("scroll_stop");
			});			

//<<리뷰컨텐츠 모달안 리뷰쓰기창>>----------------------------------------
			review_modal_review_box.hide();
			review_modal_review_box_btn.hide();
			review_modal_review1.hide();
			review_modal_review2.hide();
			review_modal_review3.hide();
			review_modal_review4.hide();
			review_modal_review5.hide();
			review_modal_review_done.hide();
			review_modal_screen2.hide();


//리뷰쓰러가기 버튼 클릭시 모달창 구현 ----------------------------------------
			review_modal_in_btn.click(function(){
				review_modal_review_box.show();
				review_modal_review_box_btn.show();
				review_modal_review1.show();
				review_modal_review2.show();
				review_modal_review3.show();
				review_modal_review4.show();
				review_modal_review5.show();
				review_modal_review_done.show();
				review_modal_screen2.show();
				body.addClass("scroll_stop");
			})


//리뷰컨텐츠 모달안 작성완료 버튼----------------------------------------
			review_modal_review_done.click(function(){
				alert("참여 감사합니다.")
				review_modal_review_box.hide();
				review_modal_review_box_btn.hide();
				review_modal_review1.hide();
				review_modal_review2.hide();
				review_modal_review3.hide();
				review_modal_review4.hide();
				review_modal_review5.hide();
				review_modal_review_done.hide();
				review_modal_screen2.hide();
				body.removeClass("scroll_stop");
			})
			

//리뷰컨텐츠 모달안 리뷰쓰기창 닫기----------------------------------------
			review_modal_review_box_btn.click(function(){
				review_modal_review_box.hide();
				review_modal_review_box_btn.hide();
				review_modal_review1.hide();
				review_modal_review2.hide();
				review_modal_review3.hide();
				review_modal_review4.hide();
				review_modal_review5.hide();
				review_modal_review_done.hide();
				review_modal_screen2.hide();
				body.removeClass("scroll_stop");
			})

			review_modal_screen2.click(function(){
				review_modal_review_box.hide();
				review_modal_review_box_btn.hide();
				review_modal_review1.hide();
				review_modal_review2.hide();
				review_modal_review3.hide();
				review_modal_review4.hide();
				review_modal_review5.hide();
				review_modal_review_done.hide();
				review_modal_screen2.hide();
				body.removeClass("scroll_stop");
			})

                //리뷰 전광판 효과------------------------------------
				var movie_screenShot = $(".movie_board_box");
				var movie_screenShot_btn = $(".movie_board_btn");
				

				movie_screenShot_btn.click(function(){
				$(this).hide();
				movie_screenShot.hide();

				$("#movie_bee")[0].contentWindow.postMessage(
					'{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
			    })	


// <<제품페이지>>
// 제품 모달 시작------------------------------------------------
			var cos_modal_screen =$(".screen5");
			var cosmetic_img_01 =$(".cosmetic_box_01 li");
			var cosmetic_img_02 =$(".cosmetic_box_02 li");
			var cos_modal_btn =$(".cos_Xbtn");
			var cos_done_Btn =$(".review_done1");
			var footer =$(".footer");

			var cos_modal_contents1 =$(".cos_tab_contents1");
			var cos_tab_btn1 =$(".cos_modal_list_box1 li");
			var cos_tab_box1 =$(".cos_modal_list_box1");
			var cos_tab_box_son1 =$(".cos_modal_list1");

			var cos_modal_contents2 =$(".cos_tab_contents2");
			var cos_tab_btn2 =$(".cos_modal_list_box2 li");
			var cos_tab_box2 =$(".cos_modal_list_box2");
			var cos_tab_box_son2 =$(".cos_modal_list2");

			var cos_modal_contents3 =$(".cos_tab_contents3");
			var cos_tab_btn3 =$(".cos_modal_list_box3 li");
			var cos_tab_box3 =$(".cos_modal_list_box3");
			var cos_tab_box_son3 =$(".cos_modal_list3");

			var cos_modal_contents4 =$(".cos_tab_contents4");
			var cos_tab_btn4 =$(".cos_modal_list_box4 li");
			var cos_tab_box4 =$(".cos_modal_list_box4");
			var cos_tab_box_son4 =$(".cos_modal_list4");

			var cos_modal_contents5 =$(".cos_tab_contents5");
			var cos_tab_btn5 =$(".cos_modal_list_box5 li");
			var cos_tab_box5 =$(".cos_modal_list_box5");
			var cos_tab_box_son5 =$(".cos_modal_list5");

 			var review_more1 =$(".review_more1");
 			var review_more2 =$(".review_more2");
 			var review_more3 =$(".review_more3");
 			var review_more4 =$(".review_more4");
 			var review_more5 =$(".review_more5");
 			var review_more6 =$(".review_more6");
 			var review_more7 =$(".review_more7");
 			var review_more8 =$(".review_more8");
 			var review_more9 =$(".review_more9");
 			var review_more10 =$(".review_more10");


			cos_modal_btn.hide();
			cos_modal_screen.hide();
			footer.show();

			cos_modal_contents1.hide();
			cos_tab_btn1.hide();
			cos_tab_box1.hide();
			cos_tab_box_son1.hide();

			cos_modal_contents2.hide();
			cos_tab_btn2.hide();
			cos_tab_box2.hide();
			cos_tab_box_son2.hide();

			cos_modal_contents3.hide();
			cos_tab_btn3.hide();
			cos_tab_box3.hide();
			cos_tab_box_son3.hide();

			cos_modal_contents4.hide();
			cos_tab_btn4.hide();
			cos_tab_box4.hide();
			cos_tab_box_son4.hide();

			cos_modal_contents5.hide();
			cos_tab_btn5.hide();
			cos_tab_box5.hide();
			cos_tab_box_son5.hide();

// 제품컨텐츠BEST_tab(1) 구현-------------------------------------------------
			cosmetic_img_01.eq(0).click(function(){
				cos_modal_btn.show();
				cos_modal_screen.show();
				cos_modal_contents1.show();
				cos_tab_btn1.show();
				cos_tab_box1.show();
				cos_tab_box_son1.show();
				cos_modal_contents1.hide();
				cos_modal_contents1.eq(0).show();
				body.addClass("scroll_stop");
				footer.hide();
			})

			cos_tab_btn1.click(function(){
				var i =$(this).index();

				cos_modal_contents1.hide();
				cos_modal_contents1.eq(i).show();

				cos_tab_btn1.removeClass("cos_tab1_active");
				cos_tab_btn1.eq(i).addClass("cos_tab1_active");

				cos_tab_box_son1.scrollTop(0);
			})

			review_more1.click(function(){
			 	cos_tab_box_son1.scrollTop(2500);	
			})
			review_more2.click(function(){
			 	cos_tab_box_son1.scrollTop(3850);	
			})
			

			
// 제품컨텐츠BEST_tab(2) 구현-------------------------------------------------
			cosmetic_img_01.eq(1).click(function(){
				cos_modal_btn.show();
				cos_modal_screen.show();
				cos_modal_contents2.show();
				cos_tab_btn2.show();
				cos_tab_box2.show();
				cos_tab_box_son2.show();
				cos_modal_contents2.hide();
				cos_modal_contents2.eq(0).show();
				body.addClass("scroll_stop");
				footer.hide();
			})

			cos_tab_btn2.click(function(){
				var i =$(this).index();

				cos_modal_contents2.hide();
				cos_modal_contents2.eq(i).show();

				cos_tab_btn2.removeClass("cos_tab2_active");
				cos_tab_btn2.eq(i).addClass("cos_tab2_active");

				cos_tab_box_son2.scrollTop(0);
			})	

			review_more3.click(function(){
			 	cos_tab_box_son2.scrollTop(3700);	
			})
			review_more4.click(function(){
			 	cos_tab_box_son2.scrollTop(3550);	
			})

// 제품컨텐츠BEST_tab(3) 구현-------------------------------------------------
			cosmetic_img_01.eq(2).click(function(){
				cos_modal_btn.show();
				cos_modal_screen.show();
				cos_modal_contents3.show();
				cos_tab_btn3.show();
				cos_tab_box3.show();
				cos_tab_box_son3.show();
				cos_modal_contents3.hide();
				cos_modal_contents3.eq(0).show();
				body.addClass("scroll_stop");
				footer.hide();
			})

			cos_tab_btn3.click(function(){
				var i =$(this).index();

				cos_modal_contents3.hide();
				cos_modal_contents3.eq(i).show();

				cos_tab_btn3.removeClass("cos_tab3_active");
				cos_tab_btn3.eq(i).addClass("cos_tab3_active");

				cos_tab_box_son3.scrollTop(0);
			})

			review_more5.click(function(){
			 	cos_tab_box_son3.scrollTop(3450);	
			})
			review_more6.click(function(){
			 	cos_tab_box_son3.scrollTop(2920);	
			})

// 제품컨텐츠BEST_tab(4) 구현-------------------------------------------------
			cosmetic_img_02.eq(0).click(function(){
				cos_modal_btn.show();
				cos_modal_screen.show();
				cos_modal_contents4.show();
				cos_tab_btn4.show();
				cos_tab_box4.show();
				cos_tab_box_son4.show();
				cos_modal_contents4.hide();
				cos_modal_contents4.eq(0).show();
				body.addClass("scroll_stop");
				footer.hide();
			})

			cos_tab_btn4.click(function(){
				var i =$(this).index();

				cos_modal_contents4.hide();
				cos_modal_contents4.eq(i).show();

				cos_tab_btn4.removeClass("cos_tab4_active");
				cos_tab_btn4.eq(i).addClass("cos_tab4_active");

				cos_tab_box_son4.scrollTop(0);
			})		

			review_more7.click(function(){
			 	cos_tab_box_son4.scrollTop(2650);	
			})
			review_more8.click(function(){
			 	cos_tab_box_son4.scrollTop(4450);	
			})	
			review_more9.click(function(){
			 	cos_tab_box_son4.scrollTop(3350);	
			})					
			
// 제품컨텐츠pet_tab(5) 구현-------------------------------------------------
			cosmetic_img_02.eq(1).click(function(){
				cos_modal_btn.show();
				cos_modal_screen.show();
				cos_modal_contents5.show();
				cos_tab_btn5.show();
				cos_tab_box5.show();
				cos_tab_box_son5.show();
				cos_modal_contents5.hide();
				cos_modal_contents5.eq(0).show();
				body.addClass("scroll_stop");
				footer.hide();
			})

			cos_tab_btn5.click(function(){
				var i =$(this).index();

				cos_modal_contents5.hide();
				cos_modal_contents5.eq(i).show();

				cos_tab_btn5.removeClass("cos_tab5_active");
				cos_tab_btn5.eq(i).addClass("cos_tab5_active");

				cos_tab_box_son5.scrollTop(0);
			})

			review_more10.click(function(){
			 	cos_tab_box_son5.scrollTop(3420);	
			})


//제품 모달안 리뷰작성후-----------------------------
			cos_done_Btn.click(function(){
				alert("참여 감사합니다.")
				cos_modal_btn.hide();
				cos_modal_screen.hide();

				cos_modal_contents1.hide();
				cos_tab_btn1.hide();
				cos_tab_box1.hide();
				cos_tab_box_son1.hide();

				cos_modal_contents2.hide();
				cos_tab_btn2.hide();
				cos_tab_box2.hide();
				cos_tab_box_son2.hide();

				cos_modal_contents3.hide();
				cos_tab_btn3.hide();
				cos_tab_box3.hide();
				cos_tab_box_son3.hide();

				cos_modal_contents4.hide();
				cos_tab_btn4.hide();
				cos_tab_box4.hide();
				cos_tab_box_son4.hide();

				cos_modal_contents5.hide();
				cos_tab_btn5.hide();
				cos_tab_box5.hide();
				cos_tab_box_son5.hide();
				body.removeClass("scroll_stop");
			})

// 제품 컨텐츠 스크린창 닫기버튼----------------------------
			cos_modal_screen.click(function(){
				cos_modal_btn.hide();
				cos_modal_screen.hide();

				cos_modal_contents1.hide();
				cos_tab_btn1.hide();
				cos_tab_box1.hide();
				cos_tab_box_son1.hide();

				cos_modal_contents2.hide();
				cos_tab_btn2.hide();
				cos_tab_box2.hide();
				cos_tab_box_son2.hide();

				cos_modal_contents3.hide();
				cos_tab_btn3.hide();
				cos_tab_box3.hide();
				cos_tab_box_son3.hide();

				cos_modal_contents4.hide();
				cos_tab_btn4.hide();
				cos_tab_box4.hide();
				cos_tab_box_son4.hide();

				cos_modal_contents5.hide();
				cos_tab_btn5.hide();
				cos_tab_box5.hide();
				cos_tab_box_son5.hide();
				body.removeClass("scroll_stop");
				footer.show();
			})

// 제품 컨텐츠 모달창 닫기버튼----------------------------			
			cos_modal_btn.click(function(){
				cos_modal_btn.hide();
				cos_modal_screen.hide();

				cos_modal_contents1.hide();
				cos_tab_btn1.hide();
				cos_tab_box1.hide();
				cos_tab_box_son1.hide();

				cos_modal_contents2.hide();
				cos_tab_btn2.hide();
				cos_tab_box2.hide();
				cos_tab_box_son2.hide();

				cos_modal_contents3.hide();
				cos_tab_btn3.hide();
				cos_tab_box3.hide();
				cos_tab_box_son3.hide();

				cos_modal_contents4.hide();
				cos_tab_btn4.hide();
				cos_tab_box4.hide();
				cos_tab_box_son4.hide();

				cos_modal_contents5.hide();
				cos_tab_btn5.hide();
				cos_tab_box5.hide();
				cos_tab_box_son5.hide();
				body.removeClass("scroll_stop");
				footer.show();
			})


//가로 스크롤 구현
			var wrapper = $("#wrapper");
			var body =$("html,body");

			body.on("mousewheel",function(event, delta){
				if ($(".login_modal_box").css("display") == "block" || $(".ing_story1_tab").css("display") == "block" || $(".ing_modal_list_box").css("display") == "block" || $(".event_modal_list_box").css("display") == "block" || $(".event_modal_list_box2").css("display") == "block"  || $(".event_modal_list_box3").css("display") == "block"  || $(".review_modal_list").css("display") == "block"  || $(".cos_modal_list_box1").css("display") == "block"  || $(".cos_modal_list_box2").css("display") == "block"  || $(".cos_modal_list_box3").css("display") == "block"  || $(".cos_modal_list_box4").css("display") == "block"  || $(".cos_modal_list_box5").css("display") == "block"  ) {
                    return 0;
                }
				if(delta>0){
			  		var left =$(window).scrollLeft();
			  		var wd = $(window).width();
			  		var leftMore = left-200;
			  		//이동거리 조절
			  		$("html,body").stop().animate({"scrollLeft":leftMore},100,"linear");
			  			//반응하는 속도를 조절
				}
				else if(delta<0){
					// 마우스 휠이 내려졌을 때 실행할 구문.
					var left =$(window).scrollLeft();
					var wd = $(window).width();
					var leftMore = left+200;
					$("html,body").stop().animate({"scrollLeft":leftMore},100,"linear");

				}

			})
//스크롤시 해당 컨텐츠의 메뉴활성화	
			$(window).scroll(function(){
				var scroll_move_Left = $(window).scrollLeft();
				var wd = $(window).width();
				var menuGnb =$("#gnb li");
				// alert(scroll_move_Top);
				if(scroll_move_Left>=0 && scroll_move_Left<wd){
					menuGnb.removeClass("active");
					menuGnb.eq(0).addClass("active");	
				}
				else if(scroll_move_Left>=wd && scroll_move_Left<wd*2){
					menuGnb.removeClass("active");
					menuGnb.eq(1).addClass("active");	
				}
				else if(scroll_move_Left>=wd*2 && scroll_move_Left<wd*3){
					menuGnb.removeClass("active");
					menuGnb.eq(2).addClass("active");	
				}
				else if(scroll_move_Left>=wd*3 && scroll_move_Left<wd*4){
					menuGnb.removeClass("active");
					menuGnb.eq(3).addClass("active");	
				}
				else if(scroll_move_Left>=wd*4 && scroll_move_Left<wd*5){
					menuGnb.removeClass("active");
					menuGnb.eq(4).addClass("active");	
				}
				else{
					menuGnb.removeClass("active");
					menuGnb.eq(5).addClass("active");	
				}
			})	

		})