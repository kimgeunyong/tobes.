$("document").ready(function(){

    AOS.init();
  
    var typingBool = false;
    var typingIdx = 0;
    var liIndex = 0;
    var liLength = $(".main-typ>ul>li").length;
    // 타이핑될 텍스트를 가져온다 
    var typingTxt = $(".main-typ>ul>li").eq(liIndex).text();
    typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
    if (typingBool == false) { // 타이핑이 진행되지 않았다면 
        typingBool = true;
        var tyInt = setInterval(typing, 100); // 반복동작 
    }
    function typing() {
        $(".typing ul li").removeClass("on");
        $(".typing ul li").eq(liIndex).addClass("on");
        if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
            $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
            typingIdx++;
        } else {
            if (liIndex < liLength - 1) {
                //다음문장으로  가기위해 인덱스를 1증가
                liIndex++;
                //다음문장을 타이핑하기위한 셋팅
                typingIdx = 0;
                typingBool = false;
                typingTxt = $(".main-typ>ul>li").eq(liIndex).text();

                //다음문장 타이핑전 1초 쉰다
                clearInterval(tyInt);
                //타이핑종료

                setTimeout(function () {
                    //1초후에 다시 타이핑 반복 시작
                    tyInt = setInterval(typing, 100);
                }, 1000);
            } else if (liIndex == liLength - 1) {

                //마지막 문장까지 써지면 반복종료
                clearInterval(tyInt);
            }
        }
    }

    // window.onscroll = function() {myFunction()};

    // function myFunction() {
    //   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    //   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //   var scrolled = (winScroll / height) * 100;
    //   document.getElementById("myBar").style.width = scrolled + "%";
    // }



    // window.onkeydown = (e) => console.log(e);
    // window.addEventListener("keydown", (e) => console.log(e));

    $(window).scroll(function () {

        if ($(this).scrollTop() > 0) {
            $(".header-list").addClass("on");
            $(".header-list .logo img").attr("src", "img/tobes-logo2.png");
            // $(".header .gnb").addClass("on");
            $(".side").addClass("on");
        } else {
            $(".header-list").removeClass("on");
            $(".header-list .logo img").attr("src", "img/tobes-wlogo2.png");
            // $(".header .gnb").removeClass("on");
            $(".side").removeClass("on");
        }
    })

    $(".top-btn").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })
})