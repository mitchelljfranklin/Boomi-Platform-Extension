$(document).ready(function () {
    /*Start of Sheet*/
    //This is the core sheet that is to be used to call functions required for this extension; listeners, functions etc are on others

    //Show \ Hide Header button clicked, enable or disable the header dependent on flow
    $(document).on("click", "#showHeaderbtn", function () {
        var x = document.getElementsByClassName("qm-c-masthead");

        if (headerVisible == false) {
            x[0].classList.add("headerShow");
            $("#showHeaderspan").text("Hide Header");
            headerVisible = true;
        } else {
            x[0].classList.remove("headerShow");
            $("#showHeaderspan").text("Show Header");
            headerVisible = false;
        }
    });








    $(document).on("click", "#gwt-uid-84", function () {
        
        dashboardDays();
        
    });










});