let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
let quotes;

function randomQuote() {
    return Math.floor(Math.random() * quotes.length);
}

function randomColor() {
    return Math.floor(Math.random() * colors.length);
}

function printQuote() {
    let indexQuote = randomQuote();
    let text = $(".text");
    let textNone = $(".text-none");
    let heightQuote = $("#quote");

    textNone.html("<i class='fa fa-quote-left'> </i> " + quotes[indexQuote].text);
    text.animate({ opacity: '0' }, 500, function () {
        text.html("<i class='fa fa-quote-left'> </i> " + quotes[indexQuote].text);
        text.animate({ opacity: '1' }, 500);
    });

    let author = $(".author");
    let authorNone = $(".author-none");
    authorNone.text("~" + quotes[indexQuote].author);
    author.animate({ opacity: '0' }, 500, function () {
        author.text("~" + quotes[indexQuote].author);
        author.animate({ opacity: '1' }, 500);
    });

    let heightNone = $("#quote-none").height() + "px";
    heightQuote.animate({ height: heightNone}, 500);
}

function changeColor() {
    let indexColor = randomColor();
    let elements = $("#wrapper");
    $(".text").css("color", colors[indexColor]);
    $(".author").css("color", colors[indexColor]);
    $("#tweet-quote").css('transition', 'background 1s').css("background", colors[indexColor]);
    $("#facebook-quote").css('transition', 'background 1s').css("background", colors[indexColor]);
    $("#new-quote").css('transition', 'background 1s').css("background", colors[indexColor]);
    elements.css('transition', 'background 1s').css('background', colors[indexColor]);
}

function getData() {
    $.ajax({
        url: "https://raw.githubusercontent.com/levankhanh0398/FileExplorer/master/quote.json", 
        async: true, 
        success: function (result) {
            quotes = JSON.parse(result);
            printQuote();
            changeColor();
        },
        error: function () {
            alert("The server is not responding");
        },
        timeout: 3000
    });
}

$(document).ready(function () {
    getData();
    $('[data-toggle="tooltip"]').tooltip();
    $("#new-quote").click(function () {
        printQuote();
        changeColor();
    });
});