let flagEditorWindow = "MinSize";
let flagPreviewWindow = "MinSize";

function ZoomEditorWindow() {
    if (flagEditorWindow == "MinSize") {
        $("#preview").css("right", "-50%");
        $(".editor").css({ "width": "100%", "height": "90vh" });
        $("#wrap").css("height", "90vh");
        $("#footer").css("bottom", "-6vh");
        $(".btn-zoom").html('<i class="fa fa-window-minimize" aria-hidden="true"></i>');
        flagEditorWindow = "MaxSize";
    }
    else {
        $("#preview").css("right", "0");
        $(".editor").css({ "width": "50%", "height": "84vh" });
        $("#wrap").css("height", "84vh");
        $("#footer").css("bottom", "0");
        $(".btn-zoom").html('<i class="fa fa-window-maximize" aria-hidden="true"></i>');
        flagEditorWindow = "MinSize";
    }
}

function ZoomPreviewWindow() {
    if (flagPreviewWindow == "MinSize") {
        $(".editor").css("left", "-50%");
        $("#preview").css({ "width": "100%", "height": "90vh" });
        $("#wrap").css("height", "90vh");
        $("#footer").css("bottom", "-6vh");
        $(".btn-zoom").html('<i class="fa fa-window-minimize" aria-hidden="true"></i>');
        flagPreviewWindow = "MaxSize";
    }
    else {
        $(".editor").css("left", "0");
        $("#preview").css({ "width": "50%", "height": "84vh" });
        $("#wrap").css("height", "84vh");
        $("#footer").css("bottom", "0");
        $(".btn-zoom").html('<i class="fa fa-window-maximize" aria-hidden="true"></i>');
        flagPreviewWindow = "MinSize";
    }
}


$(document).ready(function () {
    let text = $("#editor").val();
    $("#display").html(marked(text));
    $('#editor').on("input", function () {
        text = $("#editor").val();
        $("#display").html(marked(text));
    });

    $("#btn-editor-window").click(function (e) {
        ZoomEditorWindow();
    });

    $("#btn-preview-window").click(function (e) {
        ZoomPreviewWindow();
    });

    $("#btn-setting").click(function (e) {
        $("#setting-editor").css({ "display": "flex", "opacity": "0" });
        $("#setting-editor").animate({ opacity: '1' }, 200);
    });

    $("#setting-close").click(function (e) {
        $("#setting-editor").animate({ opacity: '0' }, 200, function(){
            $("#setting-editor").css("display", "none");
        });
    });

    $("#select-font").change(function (){
        $("#text-editor").css("font-family", $("#select-font").val());
      });

    $("#text-size").on("input", function () { 
        $("#text-editor").css("font-size", $("#text-size").val() + 'px');
    });

    $("#box-color").on("input", function () {
        $("#text-editor").css("color", $("#box-color").val());
    });

    $("#save-close").click(function (e) { 
        $("#editor").css({"font-family": $("#select-font").val(), "font-size": $("#text-size").val() + 'px', "color": $("#box-color").val()});
        $("#setting-editor").css("display", "none");
    });

    $("#btn-share").click(function (e) {

    });

});