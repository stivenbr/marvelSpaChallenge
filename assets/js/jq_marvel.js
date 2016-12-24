$(function () {

    //------------------------------------------------------------------------//
    //  Variables Globales
    //------------------------------------------------------------------------//
    var _publicKey = "e680285ab76f2b29840abc583f971ba9";
    var _url = 'https://gateway.marvel.com/v1/';
    var _AddComics = [];
    var _AddCharacters = [];
    var _sShearch = getParameterByName("search") || "";
    var _sOffSet = getParameterByName("offset") || 1;

    //------------------------------------------------------------------------//
    //  Method's init
    //------------------------------------------------------------------------//

    // Search
    $("#search").val(_sShearch);

    // Offset
    if (Math.floor(_sOffSet) != _sOffSet || !$.isNumeric(_sOffSet)) {
        alert("Paginator no integer");
        window.location = "index.php";
        return false;
    }

    // Local Storage
    if (localStorage["_AddComics"]) {
        _AddComics = JSON.parse(localStorage["_AddComics"]);
        $.each(_AddComics, function (nIndice, aData) {
            printComic(aData.id, aData.title, aData.img);
        });
    }

    if (localStorage["_AddCharacters"] && _sShearch == "" && _sOffSet == "") {
        _AddCharacters = JSON.parse(localStorage["_AddCharacters"]);
        if (_AddCharacters.data.results.length > 1) {
            printCharacters(_AddCharacters);
        } else {
            getPrintCharacters(_sOffSet);
        }
    } else {
        getPrintCharacters(_sOffSet);
    }




    //------------------------------------------------------------------------//
    //  Eventos Librerias
    //------------------------------------------------------------------------//
    $('.bs-select').selectpicker({
        iconBase: 'fa',
        tickIcon: 'fa-check'
    });

    //------------------------------------------------------------------------//
    //  Eventos
    //------------------------------------------------------------------------//
    $('#mdlComicCharacter').on('show.bs.modal', function (event) {

        // Var
        var button = $(event.relatedTarget); // Button that triggered the modal
        var comic = button.data('comic'); // Extract info from data-* attributes
        var modal = $(this);

        // Events
        $("#bodyMarvel").css("filter", "blur(20px)");

        // Get
        var sUrl = comic;
        var aDataGet = {apikey: _publicKey};

        $.get(sUrl, aDataGet).done(function (msg) {
            var aData = msg.data.results[0];

            var img = aData.thumbnail.path + "." + aData.thumbnail.extension;
            var title = aData.title;
            var button2 = "<img src='assets/icons/shopping-cart-primary.png' alt='Buy' /> BUY FOR $" + aData.prices[0].price;

            modal.find("h2").text(aData.title);
            modal.find("p").text(aData.description);
            modal.find("img").eq(1).attr("src", img);
            modal.find("button").eq(1).data("comic", aData.id).data("img", img).data("title", title);
            modal.find("button").eq(2).html(button2);
        }).fail(function (err) {
            console.log(err);
        });

    });

    // Hide fond blur modal
    $('#mdlComicCharacter').on('hide.bs.modal', function (event) {
        $("#bodyMarvel").css("filter", "blur(0px)"); // Clear filter
    });

    $("#btnAddFavourites").click(function () {
        var id = $(this).data("comic");
        var img = $(this).data("img");
        var title = $(this).data("title");
        var bComic = true;

        // Comic no repead
        $.each(_AddComics, function (nIndice, aData) {
            if (aData.id == id) {
                alert("Comic already selected");
                bComic = false;
                return false;
            }
        });
        if (!bComic)
            return false;

        // Set Items Comic
        if (_AddComics.length < 3) {

            _AddComics.push({id: id, title: title, img: img});
            localStorage.setItem("_AddComics", JSON.stringify(_AddComics));

            // Print Comic
            printComic(id, title, img);

            // Hide Modal
            $("#mdlComicCharacter").modal("hide");


        } else {
            alert("You can only select 3 comics");
        }
    });

    // Delete Comic
    $("#container-comics").on("click", ".btnDelete", function () {
        var delComic = $(this).data("comic");

        // Remove Html
        $(this).parent().parent().parent().remove();

        for (var aData in _AddComics) {
            if (_AddComics[aData].id == delComic) {
                _AddComics.splice(aData, 1);
            }
        }

        // Update LocalStorage
        localStorage.setItem("_AddComics", JSON.stringify(_AddComics));

    });


    //------------------------------------------------------------------------//
    //  Method's
    //------------------------------------------------------------------------//

    function getPrintCharacters(offset) {

        // Params localStorage
        var sSetOffSet = (offset - 1) + "0";

        // Params Get
        var sUrl = _url + "public/characters";
        var aDataGet = {apikey: _publicKey, limit: 10, offset: sSetOffSet};

        // Valid
        if (_sShearch != "")
            aDataGet["name"] = _sShearch;

        // Clear Container
        $("#container-characters").empty();

        $.get(sUrl, aDataGet).done(function (msg) {

            // Save LocalStorage
            localStorage.setItem("_AddCharacters", JSON.stringify(msg));
            printCharacters(msg);

        }).fail(function (err) {
            console.log(err);
        });
    }

    function printCharacters(msg) {
        // Var Character
        var nRow = 0;
        var hContainer = "";
        
        var items = (msg.data.total / 10);

        // Config Navigation
        $('#pageNavigation').pagination({
            items: items,
            itemOnPage: 2,
            edges: 2,
            currentPage: _sOffSet,
            prevText: "<i class='fa fa-angle-left' aria-hidden='true'></i>",
            nextText: "<i class='fa fa-angle-right' aria-hidden='true'></i>",
            onInit: function () {
                $("#pageNavigation").find("ul").addClass("pagination").addClass("pagination-lg");
            },
            onPageClick: function (page, evt) {
                $("#pageNavigation").find("ul").addClass("pagination").addClass("pagination-lg");
                window.location = "index.php?offset=" + page;
            }
        });

        // Run Characters
        $.each(msg.data.results, function (nIndice, aData) {
            // Open Row
            hContainer += (nRow++ == 0) ? "<div class='row'>" : "";

            // Open Container
            hContainer += "<div class='col-xs-12 col-sm-6'>"; // Reserved columns to character
            hContainer += "<div class='cantainer-character'>"; // Container character

            // Head
            hContainer += "<div class='row characterHead'>";
            hContainer += "<div class='col-xs-12 col-sm-6 characterImage'>";
            hContainer += "<img class='img-responsive img-circle' src='" + aData.thumbnail.path + "." + aData.thumbnail.extension + "' alt='Character' />";
            hContainer += "</div>";
            hContainer += "<div class='col-xs-12 col-sm-6 characterDescription'>";
            hContainer += "<h3>" + aData.name + "</h3>";
            var sDescription = aData.description;
            if (sDescription.length >= 217) {
                sDescription = sDescription.substring(0, 217) + " ...";
            } else if (sDescription.length == 0) {
                sDescription = "- No description -";
            }
            hContainer += "<p>" + sDescription + "</p>";
            hContainer += "<a type='button' href='" + aData.urls[0].url + "' target='_blank' class='btn' data-character='" + aData.id + "'>VIEW MORE</a>";
            hContainer += "</div>";
            hContainer += "</div>";

            // Body
            hContainer += "<div class='characterBody'>";
            hContainer += "<h4>Related comics</h4>";
            // Body Print 4 comincs
            var nRowComic = 0;
            $.each(aData.comics.items, function (nIndiceComics, $aDataComics) {
                // Open Row Comics
                hContainer += (nRowComic++ == 0) ? "<div class='row'>" : "";

                // Print comics
                hContainer += "<div class='col-xs-12 col-sm-6'>";
                hContainer += "<a href='#' data-toggle='modal' data-target='#mdlComicCharacter' data-comic='" + $aDataComics.resourceURI + "'>" + $aDataComics.name + "</a>";
                hContainer += "</div>";

                // Close Row Comics
                if (nRowComic == 2) {
                    hContainer += "</div>";
                    nRowComic = 0;
                }

                if (nIndiceComics == 3)
                    return false; // Close bucle
            });
            // Close Row number odd
            hContainer += (nRowComic > 0) ? "</div>" : "";
            hContainer += "</div>"; // End body Comics

            // End Container
            hContainer += "</div>";
            hContainer += "</div>";

            // Close Row
            if (nRow == 2) {
                hContainer += "</div>";
                nRow = 0;
            }
        });

        // Close Row number odd
        hContainer += (nRow > 0) ? "</div>" : "";

        $("#container-characters").html(hContainer);
    }

    function printComic(id, title, img) {
        var hContainer = "";
        hContainer += "<div class='containerComic'>";
        hContainer += "<div class='row'>";
        hContainer += "<div class='col-xs-12'>";
        hContainer += "<img src='assets/icons/btn-delete.png' class='btnDelete' data-comic='" + id + "'/>";
        hContainer += "<img class='img-responsive' src='" + img + "' alt='comic'>";
        hContainer += "</div>";
        hContainer += "</div>";
        // Description
        hContainer += "<div class='row'>";
        hContainer += "<div class='col-xs-12'>";
        hContainer += "<h3 class='text-center'>" + title + "</h3>";
        hContainer += "</div>";
        hContainer += "</div>";
        hContainer += "</div>";
        hContainer += "<br />";

        $("#container-comics").append(hContainer);
    }

    function getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
});