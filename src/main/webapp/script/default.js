/**
 * Created by I309891 on 1/11/2016.
 */

$(document).on("pagecontainershow", function (e, ui) {
    var activePage = $.mobile.pageContainer.pagecontainer("getActivePage");
    var pageID = activePage[0].id;

    switch (pageID) {
        case 'reg_one':
            $("#reg_next").click(
                function () {
                    if (typeof(Storage) !== "undefined") {
                        var user = {};
                        user.email = $("#e-mail").val();
                        user.password = $('#password').val();
                        sessionStorage.setItem("inno_user", JSON.stringify(user));
                        $.mobile.changePage("reg_two.html", {
                            transition: "slide"
                        })
                    } else {

                    }
                }
            );
            break;
        case 'reg_two':
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

    }
});

