/**
 * Created by I309891 on 1/11/2016.
 */
var user = {};
var imageToCrop;
var cropedImage;
var cropper;

$(document).on("pagecontainershow", function (e, ui) {
    var activePage = $.mobile.pageContainer.pagecontainer("getActivePage");
    var pageID = activePage[0].id;

    switch (pageID) {
        case "crop":
            //$("#img-crop").attr("src", imageToCrop);
            break;
        case 'reg_one':
            break;
        case 'reg_three':
            $("#reg_done").click(
                function () {
                    if (typeof(Storage) !== "undefined") {
                        var user = $.parseJSON(sessionStorage.getItem("inno_user"));
                        user.firstname = $("#fname").val();
                        user.lastname = $("#Lname").val();
                        user.department = $("#department").val();
                        user.phone = $("#phone").val();
                        sessionStorage.setItem("inno_user", JSON.stringify(user));

                        $.ajax({
                            url: "../../ajax/user/register",
                            method: "POST",
                            data: JSON.stringify(user),
                            dataType: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function () {
                                alert("success");
                            },
                            statusCode: {
                                417: function () {
                                    alert("error");
                                }
                            }
                        });
                    } else {

                    }
                }
            );
            break;
        case 'reg_two_done':

    }
});

$(document).on("pagecreate", "#crop", function(event) {
    //var pageID = data.toPage[0].id;
    //switch (pageID){
    //    case 'crop':
    $("#img-crop").attr("src", imageToCrop);
    var Cropper = window.Cropper;
    var console = window.console || { log: function () {} };
    var container = document.querySelector('.img-container');
    var image = container.getElementsByTagName("img").item(0);
    var options = {
        aspectRatio: 1,
        minContainerWidth: 600,
        minContainerHeight: 800,
        build: function () {
            console.log('build');
        },
        built: function () {
            console.log('built');
        },
        cropstart: function (data) {
            console.log('cropstart', data.action);
        },
        cropmove: function (data) {
            console.log('cropmove', data.action);
        },
        cropend: function (data) {
            console.log('cropend', data.action);
        },
        crop: function (data) {

        },
        zoom: function (data) {
            console.log('zoom', data.ratio);
        }
    };
    cropper = new Cropper(image, options);
    //cropper.zoomTo(1);
    //}
});

$(document).on("pagecreate", "#reg_two", function(event) {
    if(cropedImage) {
        $("#user_head").attr("src", cropedImage);
    }
});

function reg_next() {
    switch (event.target.id) {
        case 'reg_one_next':
            user.email = $("#e-mail").val();
            user.password = $('#password').val();
            $.mobile.changePage("reg_two.html", {
                transition: "slide"
            })
            break;
        case 'reg_two_next':
            if(cropedImage) {
                user.head = cropedImage;
                $.mobile.changePage("reg_three.html",
                    {
                        transition: "slide"
                    }
                );
            }
            break;
        case 'reg_three_done':
            user.firstname = $("#fname").val();
            user.lastname = $("#Lname").val();
            user.department = $("#department").val();
            user.phone = $("#phone").val();
            $.ajax({
                url: "../../ajax/user/register",
                method: "POST",
                data: JSON.stringify(user),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function () {
                    alert("success");
                },
                statusCode: {
                    417: function () {
                        alert("error");
                    }
                }
            });
            break;
    }
};

function uploadAvatar() {
    var head = $("#input_head").prop("files")[0];
    var fr = new FileReader();

    fr.onload = function() {
        imageToCrop = fr.result;
        $.mobile.changePage("../cropimg.html", {
            transition: "slide",
            changeHash: false
        })
    };

    fr.readAsDataURL(head);
}

function uploadSkip() {
    user.head = 'default'
    $.mobile.changePage("reg_three.html",
        {
            transition: "slide"
        }
    );
}


function cropConfirm() {
    if(cropper) {
        cropedImage = cropper.getCroppedCanvas().toDataURL();
    }
    $.mobile.changePage("register/reg_two.html",
        {
            transition: "slide",
            reverse: "true",
            changeHash: false
        }
    );
}