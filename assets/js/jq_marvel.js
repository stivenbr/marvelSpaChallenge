$(function () {

    //------------------------------------------------------------------------//
    //  Variables Globales
    //------------------------------------------------------------------------//
    var _publicKey = "e680285ab76f2b29840abc583f971ba9";
    var _url = 'https://gateway.marvel.com/v1/';
    
    //------------------------------------------------------------------------//
    //  Method's init
    //------------------------------------------------------------------------//
    printCharacters(0);

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
    $("#clickMe").click(function () {

    });

    //------------------------------------------------------------------------//
    //  Method's
    //------------------------------------------------------------------------//
    function printCharacters(offset) {

        // Params Get
        var sUrl = _url + "public/characters";
        var aData = {apikey: _publicKey, limit: 10, offset: offset};

        // Clear Container
        $("#container-characters").empty();

        $.get(sUrl, aData).done(function (msg) {
            var nRow = 0;
            var hContainer = "";

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
                hContainer += "<button type='button' class='btn' data-character='" + aData.id + "'>VIEW MORE</button>";
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
                    hContainer += "<p>" + $aDataComics.name + "</p>";
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
        }).fail(function (err) {
            console.log(err);
        });
    }

});