document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("btn");
    btn.addEventListener("click", translate, false);
    var obj = {"あ": "－－・－－", "い": "・－", "う": "・・－", "え": "－・－－－", "お": "・－・・・",
        "か": "・－・・", "き": "－・－・・", "く": "・・・－", "け": "－・－－", "こ": "－－－－",
        "さ": "－・－・－", "し": "－－・－・", "す": "－－－・－", "せ": "・－－－・", "そ": "－－－・",
        "た": "－・", "ち": "・・－・", "つ": "・－－・", "て": "・－・－－", "と": "・・－・・",
        "な": "・－・", "に": "－・－・", "ぬ": "・・・・", "ね": "－－・－", "の": "・・－－",
        "は": "－・・・", "ひ": "－－・・－", "ふ": "－－・・", "へ": "・", "ほ": "－・・",
        "ま": "－・・－", "み": "・・－・－", "む": "－", "め": "－・・・－", "も": "－・・－・",
        "や": "・－－", "ゆ": "－・・－－", "よ": "－－",
        "ら": "・・・", "り": "－－・", "る": "－・－－・", "れ": "－－－", "ろ": "・－・－",
        "わ": "－・－", "を": "・－－－", "ん": "・－・－・",
        "(": "・－－－", "（": "・－－－", ")": "・－・－・", "）": "・－・－・",
        "が": "・－・・　・・", "ぎ": "－・－・・　・・", "ぐ": "・・・－　・・", "げ": "－・－－　・・", "ご": "－－－－　・・",
        "ざ": "－・－・－　・・", "じ": "－－・－・　・・", "ず": "－－－・－　・・", "ぜ": "・－－－・　・・", "ぞ": "－－－・　・・",
        "だ": "－・　・・", "ぢ": "・・－・　・・", "づ": "・－－・　・・", "で": "・－・－－　・・", "ど": "・・－・・　・・",
        "ば": "－・・・　・・", "び": "－－・・－　・・", "ぶ": "－－・・　・・", "べ": "・　・・", "ぼ": "－・・　・・",
        "ぱ": "－・・・　・・－－・", "ぴ": "－－・・－　・・－－・", "ぷ": "－－・・　・・－－・", "ぺ": "・　・・－－・", "ぽ": "－・・　・・－－・",
        "1": "・－－－－", "2": "・・－－－", "3": "・・・－－", "4": "・・・・－", "5": "・・・・・", "6": "－・・・・", "7": "－－・・・", "8": "－－－・・", "9": "－－－－・", "0": "－－－－－",
        "１": "・－－－－", "２": "・・－－－", "３": "・・・－－", "４": "・・・・－", "５": "・・・・・", "６": "－・・・・", "７": "－－・・・", "８": "－－－・・", "９": "－－－－・", "０": "－－－－－",
        "A": "・－", "a": "・－", "B": "－・・・", "b": "－・・・", "C": "－・－・", "c": "－・－・", "D": "－・・", "d": "－・・", "E": "・", "e": "・", "F": "・・－・", "f": "・・－・", "G": "－－・", "g": "－－・", "H": "・・・・", "h": "・・・・", "I": "・・", "i": "・・", "J": "・－－－", "j": "・－－－", "K": "－・－", "k": "－・－", "L": "・－・・", "l": "・－・・", "M": "－－", "m": "－－", "N": "－・", "n": "－・", "O": "－－－", "o": "－－－", "P": "・－－・", "p": "・－－・", "Q": "－－・－", "q": "－－・－", "R": "・－・", "r": "・－・", "S": "・・・", "s": "・・・", "T": "－", "t": "－", "U": "・・－", "u": "・・－", "V": "・・・－", "v": "・・・－", "W": "・－－", "w": "・－－", "X": "－・・－", "x": "－・・－", "Y": "－・－－", "y": "－・－－", "Z": "－－・・", "z": "－－・・"};

    function translate() {
        var line = document.getElementById("txt").value;
        var outputline = "";
        for (var i = 0; i < line.length; i++) {
            if (line.charAt(i) in obj) {
                outputline += obj[line.charAt(i)] + "　";
            }
            else
                outputline += "■　";
        }
        outputline = outputline.substr(0, (outputline.length - 1));
        document.getElementById("output").value = outputline;

        var tweet = "https://twitter.com/intent/tweet?hashtags=morse_code&text=" + outputline + "&tw_p=tweetbutton";
        window.open(tweet, 'new', "width=500,height=300");
    }
}, false);