$(function () {
    if ($("div").children(".title").length >= 300) {
        var len = 300;
    } else {
        var len = $("div").children(".title").length;
    }
    var pages = Math.ceil(len / 30);
    pagination(1);
    var html = "<ul class=\"pagination\">\n" +
        "    <li onclick='pagination(0)'><p class='entity-button-style'>prev</p></li>    ";
    for (var i = 1; i <= pages; i++) {
        html = html + "<li onclick='pagination(" + i + ")'><p class='entity-button-style'>" + i + "</p></li>"
    }


    html = html + "<li onclick='pagination(999)'><p class='entity-button-style'>next</p></li>\n" +
        "</ul>";


    $("#pagination").html(html);

    //获取li的所有宽度
    var width2 = 0;

    for (let j = 0; j < $('.nav_item2').length; j++) {
        width2 += $('.nav_item2').eq(j).outerWidth(true);
    }
    $('.nav_mine2').width(width2 + 30);  //width只是内容的宽度，需要加上padding的宽度


});

function pagination(page) {
    var title_num = 30;
    if (page == 0) {
        var current_page = parseInt($("#current-page").val()) - 1;
        $("#current-page").val(current_page);
        $(".title:visible").hide();
        for (var i = (current_page - 1) * title_num; i <= current_page * title_num; i++) {
            $(".title:eq(" + i + ")").show();
        }

    } else if (page == 999) {
        var current_page1 = parseInt($("#current-page").val()) + 1;
        $("#current-page").val(current_page1);
        $(".title:visible").hide();
        for (var z = (current_page1 - 1) * title_num; z <= current_page1 * title_num; z++) {
            $(".title:eq(" + z + ")").show();
        }

    } else {
        $(".title:visible").hide();
        for (var j = (page - 1) * title_num; j <= page * title_num; j++) {
            $(".title:eq(" + j + ")").show();
        }
        $("#current-page").val(page)
    }

}