(
    function () {
        const goBtn = document.querySelector(".go");
        const rounderBoard = document.querySelector(".playground img");
        const numberBlock = document.querySelectorAll('.numbers-btn button');
        let deg = 0;
        let degCurr = 0;

        rounderBoard.style.transform = `rotate(${Math.random() * 360 + 1}deg)`;


        goBtn.addEventListener('mousedown', () => {
            playRound();
        })

        function playRound() {

            goBtn.style.pointerEvents = "none";
            deg = Math.floor(1500 + Math.random() * 1500);

            rounderBoard.style.transform = `rotate(${deg}deg)`;
            rounderBoard.style.transition = 'all ease-out 3s';

        }

        rounderBoard.addEventListener('transitionend', () => {
            degCurr = deg % 360;
            rounderBoard.style.transition = 'ease-out 0s';
            rounderBoard.style.transform = `rotate(${degCurr}deg)`;
            goBtn.style.pointerEvents = "auto";
            // console.log(degCurr);

            if (0 < degCurr && 44 > degCurr) {
                console.log("77")
            }
            else if (46 < degCurr && degCurr < 90) {
                console.log("03")
            }
            else if (91 < degCurr && degCurr < 136) {
                console.log("22")
            }
            else if (137 < degCurr && degCurr < 181) {
                console.log("09")
            }
            else if (183 < degCurr && degCurr < 226) {
                console.log("47")
            }
            else if (227 < degCurr && degCurr < 270) {
                console.log("07")
            }
            else if (271 < degCurr && degCurr < 314) {
                console.log("28")
            }
            else if (316 < degCurr && degCurr < 359) {
                console.log("04")
            }
            else {
                console.log("fuck yrr")
            }

        })

        //Right Number Bar
    }
)();

const goBtn = $(".go");
const rounderBoard = $(".playground img");
const numberBlock = $('.numbers-btn button');
const bidValue = $(".bid-num");
const setBtn = $(".final-num");
let deg = 0;
let bid = 0;

//jQuery Starts Here

goBtn.click(function () {
    goBtn.css("pointer-events", "none")
})

numberBlock.click(function () {

    if ($(this).hasClass("none-d")) {
        $("selected").css("transform", "scale(1)");
        numberBlock.removeClass("selected");
        $(this).addClass("selected");

        $("added-bid").css("transform", "scale(0)");
        console.log("Work Done");
    }

    bid = $(this).text();
    console.log(bid)

    // Transformation & Styles
    // $(this).css("transform", "scale(0.6)");
    // $(this).css("border", "2px solid white");
    $(this).addClass("selected");

    numberBlock.addClass("none-d");
    $(this).removeClass("none-d");

    // Setting Bid Number In Selection Box
    bidValue.css("transition", "0.3s ease-in-out")
    bidValue.css("transform", "scale(0.8)");
    bidValue.addClass("added-bid");
    bidValue.html(bid);

    if ($(this).hasClass("red")) {

        bidValue.removeClass("green")
        bidValue.addClass("red")

    } else if ($(this).hasClass("green")) {

        bidValue.removeClass("red")
        bidValue.addClass("green")
    }

})

setBtn.click(function () {
    numberBlock.addClass("set")
})