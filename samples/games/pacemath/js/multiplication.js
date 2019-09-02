var ans;
function logval(id) {
    var x = document.getElementById(id).value;
    if (parseInt(x) == parseInt(ans)) {
        var y = parseInt(document.getElementById('Rightval').value) + 1;
        document.getElementById('Rightval').value = y;
        document.getElementById('r').innerHTML = y;
    } else {
        var z = parseInt(document.getElementById('Wrongval').value) + 1;
        document.getElementById('Wrongval').value = z;
        document.getElementById('w').innerHTML = z;
    }
}

function getInitial(args) {
    var num = Cicon(args)
    var initial;
    if (num <= 12) {
        initial = 1;
    } else if (num % 12 == 0) {
        initial = num - 6;
    } else {
        while (num % 12 != 0) {
            num -= 1;
            initial = num;
        }
    } return initial;

}


function Cicon(args) {
    ans = 1;
    var word = { 1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six" };
    var i = 0, randNUm;
    var left = 0, right = 0;
    if (args.length == 2){
        for (i; i < args.length; ++i) {
            randNUm = getRandomDiceNum();
            document.getElementById(args[i]).setAttribute("src", "images/dice" + word[randNUm] + ".png");
            ans *= randNUm;
            
        }console.log("a :" + ans);
        return ans;

    }else {
        for (i; i < args.length; ++i) {
            randNUm = getRandomDiceNum();
            document.getElementById(args[i]).setAttribute("src", "images/dice" + word[randNUm] + ".png");
            if (i < 2){
                left += randNUm;
            }else{
                right += randNUm;
            }
            ans = left * right;
        }
        console.log("a :" + ans);
        return ans;
    }
}

function getRandomDiceNum() {
    var nums = [1, 2, 3, 4, 5, 6];
    var diceNum = nums[Math.floor(Math.random() * nums.length)];
    return diceNum;
}


function update(args) {

    var firstValue = getInitial(args);
    var i;
    for (i = 1; i <= 12; ++i) {
        var id = "choice" + i;
        document.getElementById(id).value = firstValue;
        document.getElementById(id).innerHTML = firstValue;
        firstValue += 1;
    }
    rotate();

}

function startTimer(duration, display) {
    var startTime = duration;
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;


        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        var ave = (startTime - diff) / 10;

        display.textContent = minutes + ":" + seconds;
        var x = document.getElementById('Rightval').value;
        var y = document.getElementById('Wrongval').value;
        var z = document.getElementsByTagName("h2")[0].getAttribute("id");

        if ((parseInt(x) + parseInt(y)) >= 10) {
            if (parseInt(x) >= 8) {
                openDiv('win');
                if (z == "average") {
                    document.getElementById('average').textContent = 'Average Speed: ' + ave + " seconds";
                    document.getElementById('average').setAttribute("id", "swalla");
                }
            }
            else {
                openDiv('failed');
            }
        }

        // OUT OF TIME
        if (diff <= 0) {
            display.textContent = "Expired";
            openDiv('lose');
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

function rotate() {
    var tmpAnimation = 0;
    $(".btn").click(function () {
        var element = $(".diceImg");
        tmpAnimation = tmpAnimation + 90;

        $({ degrees: tmpAnimation - 90 }).animate({ degrees: tmpAnimation }, {
            duration: 200,
            step: function (now) {
                element.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            }
        });
    });
}

function openDiv(id) {
    document.getElementById(id).style.height = "100%";
} 