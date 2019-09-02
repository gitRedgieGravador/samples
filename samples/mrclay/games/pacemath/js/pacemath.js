
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
    ans = 0;
    var word = { 1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six" };
    var i = 0, randNUm;
    for (i; i < args.length; ++i) {
        randNUm = getRandomDiceNum();
        document.getElementById(args[i]).setAttribute("src", "images/dice" + word[randNUm] + ".png");
        ans += randNUm;
    }
    console.log("a :" + ans);
    return ans;
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
                    clear();
                }
            }
            else {
                openDiv('failed');
                clear();
            }
        }

        // OUT OF TIME
        if (diff <= 0) {
            display.textContent = "Expired";
            openDiv('lose');
            clear();
        }
    };
    timer();
    var MyInterval = setInterval(timer, 1000);
    function clear(){
        clearInterval(MyInterval);
    }
    
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
var currentlevel = 1, round = 1;
function createIcons(src, id) {
    var parent = document.getElementById('oper');
    var image = document.createElement('img');
    image.setAttribute("src", src);
    image.setAttribute("class", "diceImg");
    image.setAttribute("id", id);
    parent.appendChild(image);
}

window.onload = function () {
    var level = currentlevel;
    if (level == 1) {
        createIcons("images/diceOne.png", "left1");
        createIcons("images/add.png", "opt1");
        createIcons("images/diceTwo.png", "right1");
        update(['left1', 'right1']);
        var display = document.querySelector('#time');
        var time = 21 - round;
        startTimer(time, display);
    }

    $(".btn").click(function () {
        logval(this.id);
        if (currentlevel == 1 || currentlevel == 4) {
            update(['left1', 'right1']);
        } else if (currentlevel == 2 || currentlevel == 5) {
            update(['left1', 'left2', 'right1']);
        } else if (currentlevel == 3 || currentlevel == 6) {
            update(['left1', 'left2', 'right1', 'right2']);
        }

    });
}

function getValue(id) {
    var val = document.getElementById(id).value;
    return val;
}

function increment(id) {
    var next = parseInt(getValue(id)) + 1;
    document.getElementById(id).value = next;

}

function getLevel() {
    var next = getValue('indicator');
    if (next > 6) {
        while (next > 6) {
            next -= 6;
            round += 1;
        }
    }
    currentlevel = next;

}

function ambot() {
    getLevel();
    var level = currentlevel;
    reset();
    if (level == 1) {
        createIcons("images/diceOne.png", "left1");
        createIcons("images/add.png", "opt1");
        createIcons("images/diceTwo.png", "right1");
        var display = document.querySelector('#time');
        var time = 21 - round;
        startTimer(time, display);
        update(['left1', 'right1']);
    } if (level == 2) {
        createIcons("images/diceOne.png", "left1");
        createIcons("images/diceOne.png", "left2");
        createIcons("images/add.png", "opt1");
        createIcons("images/diceTwo.png", "right1");
        var display = document.querySelector('#time');
        var time = 32 - (round + 1);
        startTimer(time, display);
        update(['left1', 'left2', 'right1']);
    } if (level == 3) {
        createIcons("images/diceOne.png", "left1");
        createIcons("images/diceOne.png", "left2");
        createIcons("images/add.png", "opt1");
        createIcons("images/diceTwo.png", "right1");
        createIcons("images/diceOne.png", "right2");
        var display = document.querySelector('#time');
        var time = 43 - (round + 2);
        startTimer(time, display);
        update(['left1', 'left2', 'right1', 'right2']);
    } if (level == 4) {
        createIcons("images/diceOne.png", "left1");
        createIcons("images/multiply.png", "opt1");
        createIcons("images/diceTwo.png", "right1");
        var display = document.querySelector('#time');
        var time = 32 - (round + 1);
        startTimer(time, display);
        update(['left1', 'right1']);
    } if (level == 5) {
        createIcons("images/diceOne.png", "left1");
        createIcons("images/diceOne.png", "left2");
        createIcons("images/multiply.png", "opt1");
        createIcons("images/diceTwo.png", "right1");
        var display = document.querySelector('#time');
        var time = 43 - (round + 2);
        startTimer(time, display);
        update(['left1', 'left2', 'right1']);
    } if (level == 6) {
        createIcons("images/diceOne.png", "left1");
        createIcons("images/diceOne.png", "left2");
        createIcons("images/multiply.png", "opt1");
        createIcons("images/diceTwo.png", "right1");
        createIcons("images/diceOne.png", "right2");
        var display = document.querySelector('#time');
        var time = 62 - (round * 2);
        startTimer(time, display);
        update(['left1', 'left2', 'right1', 'right2']);
    }
}

function reset() {
    $('.diceImg').remove();
    document.getElementById('Rightval').value = 0;
    document.getElementById('r').innerHTML = 0;
    document.getElementById('Wrongval').value = 0;
    document.getElementById('w').innerHTML = 0;
}


