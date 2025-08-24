const goBtn = document.querySelector(".go");
const rounderBoard = document.querySelector(".playground img");
const numberBlock = document.querySelectorAll(".numbers-btn button");
const bidValue = $(".bid-num");
const setBtn = $(".final-num");

let bid = 0;
let deg = 0;
let degCurr = 0;

function playRound() {
    if(bid ===0){
        Swal.fire({
            title: "BID NOT SELECTED",
            text: "Please Select A BID!",
            icon: "warning"
        });
        return
    }
  goBtn.style.pointerEvents = "none";
  deg = Math.floor(1500 + Math.random() * 1500);

  rounderBoard.style.transform = `rotate(${deg}deg)`;
  rounderBoard.style.transition = "all ease-out 3s";
    getResult()
}

function getResult() {
  rounderBoard.addEventListener("transitionend", () => {
    degCurr = deg % 360;
    rounderBoard.style.transition = "ease-out 0s";
    rounderBoard.style.transform = `rotate(${degCurr}deg)`;
    goBtn.style.pointerEvents = "auto";
    let res = ""
    if (0 < degCurr && 44 > degCurr) {
      res = "77";
    } else if (46 < degCurr && degCurr < 90) {
      res = "03";
    } else if (91 < degCurr && degCurr < 136) {
      res = "22";
    } else if (137 < degCurr && degCurr < 181) {
      res = "09";
    } else if (183 < degCurr && degCurr < 226) {
      res = "47";
    } else if (227 < degCurr && degCurr < 270) {
      res = "07";
    } else if (271 < degCurr && degCurr < 314) {
      res = "28";
    } else if (316 < degCurr && degCurr < 359) {
      res = "04";
    } else {
      res = "retry";
    }

    console.log(res)
    makeResult(res)
  });
}

goBtn.addEventListener("mousedown", () => {
    playRound()
});

numberBlock.forEach(function(btn) {
  btn.addEventListener("click", function() {
    if ($(this).hasClass("none-d")) {
      $(".selected").css("transform", "scale(1)");
      $(numberBlock).removeClass("selected");
      $(this).addClass("selected");

      $(".added-bid").css("transform", "scale(0)");
      console.log("Work Done");
    }

    bid = $(this).text();
    console.log(bid);

    $(this).addClass("selected");

    $(numberBlock).addClass("none-d");
    $(this).removeClass("none-d");

    // Setting Bid Number In Selection Box
    bidValue.css("transition", "0.3s ease-in-out");
    bidValue.css("transform", "scale(0.8)");
    bidValue.addClass("added-bid");
    bidValue.html(bid);

    if ($(this).hasClass("red")) {
      bidValue.removeClass("green");
      bidValue.addClass("red");
    } else if ($(this).hasClass("green")) {
      bidValue.removeClass("red");
      bidValue.addClass("green");
    }
  });
});

goBtn.click(function () {
  goBtn.css("pointer-events", "none");
});



setBtn.click(function () {
  numberBlock.addClass("set");
});

function makeResult(r){
    if(r === 'retry'){
        alert("try again")
    }

    if (parseFloat(r) === parseFloat(deg)){
        Swal.fire({
            title: "BID NOT SELECTED",
            text: "Please Select A BID!",
            icon: "success"
        });
    }
    else{
        Swal.fire({
            title: "You Lose!",
            text: "you lost your fu*in Money Burh!",
            icon: "failed"
        });
    }
}