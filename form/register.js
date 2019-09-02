$(document).ready(function () {
    $("#btnSubmit").attr("disabled", true);
    $("#divLogin").hide();
    var password = false;
    var passwordStatus = "";
    var database = {};
    $("form").submit(function (event) {
        saveData();
        $("#feedback").text("");
        $("#btnSubmit").attr("disabled", true);
        $("#btnSubmit").removeClass("btn-success");
        $("#btnSubmit").addClass("btn-primary");
        event.preventDefault();
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
    });

    var saveData = function () {
        let fname = $("#inputfname").val();
        let lname = $("#inputlname").val();
        let name = fname + " " + lname;
        let email = $("#inputEmail4").val();
        let password = $("#inputPassword4").val();
        let address = $("#inputAddress").val();

        database[email] = [name, email, password, address];
        $("input").val("");
    }

    $("#navLogin").click(function () {
        $("#divFrom").hide();
        $("#divLogin").show();
        $(this).addClass("active");
        $("#navSignup").removeClass("active");
    });

    $("#navSignup").click(function () {
        $("#divFrom").show();
        $("#divLogin").hide();
        $(this).addClass("active");
        $("#navLogin").removeClass("active");

    });

    $("#btnLogin").click(function () {
        let key = $("#loginEmail").val();
        let loginPass = $("#loginPassword").val();
        if (key != null && loginPass != null && key != "" && loginPass != "") {
            if (loginPass == database[key][2]) {
                console.log("Success!");
                console.log("Name: " + database[key][0]);
                console.log("email : " + key);
                console.log("password: " + database[key][2]);
                console.log("Address: " + database[key][3])
            } else {
                alert("Incorrect email or password !");
                //console.log(loginPass + " vs " + database[key][2]);
            }
        }
    });

    $("#inputPassword4").keyup(function () {
        var passVal = $("#inputPassword4").val();
        var passLen = $("#inputPassword4").val().length;
        var list = passVal.split("");
        var num = 0, upper = 0, lower = 0, special = 0;
        var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-="
        var isSymbol = function (charToCheck) {
            for (let i = 0; i < specialChars.length; i++) {
                if (charToCheck.indexOf(specialChars[i]) > -1) {
                    return true
                }
            }
            return false;
        }
        for (let i = 0; i < passLen; ++i) {
            let ch = list[i];
            if (isSymbol(ch)) {
                special = 1;
            }
            if (!isNaN(ch * 1)) {
                num = 1;
            } else if (ch == ch.toUpperCase()) {
                upper = 1;
            } else if (ch == ch.toLowerCase()) {
                lower = 1;
            }
        }
        if (passLen < 8) {
            passwordStatus = " password is too short!";
            $("#feedback").css({ "color": "red" });
        } else {
            if (passLen > 16) {
                passwordStatus = " password is too long!";
                $("#feedback").css({ "color": "red" });
            } else if (num + upper + lower + special == 4) {
                passwordStatus = " Strong password"
                $("#feedback").css({ "color": "green" });
                password = true;
            } else {
                passwordStatus = " Weak password!";
                $("#feedback").css({ "color": "red" });
            }
        }
        if (!password) {
            $("#feedback").text(passwordStatus);
        } else {
            $("#feedback").text(passwordStatus);
            $("#btnSubmit").attr("disabled", false);
            $("#btnSubmit").removeClass("btn-primary");
            $("#btnSubmit").addClass("btn-success");
        }
    });
});
