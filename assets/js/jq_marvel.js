$(function () {

    //------------------------------------------------------------------------//
    //  Variables Globales
    //------------------------------------------------------------------------//
    var _publicKey = "e680285ab76f2b29840abc583f971ba9";
    var _url = 'https://gateway.marvel.com/v1/';
    var _AddComics = [];

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
        // Events
        $("#bodyMarvel").css("filter", "blur(0px)");
    });

    $("#btnAddFavourites").click(function () {
        var id = $(this).data("comic");
        var img = $(this).data("img");
        var title = $(this).data("title");
        
        _AddComics.push({id:id, title: title, img: img}); 
        
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
        
        // Hide Modal
        $("#mdlComicCharacter").modal("hide");
        
        console.log(_AddComics);
    });

    $("#container-comics").on("click", ".btnDelete", function(){
        var delComic = $(this).data("comic");
        
        $(this).parent().parent().parent().remove();
        
//        $("#container-comics").empty();
//        $.each(_AddComics, function(nIndice, aData){
//            if(aData.id == delComic){
//                _AddComics.splice(nIndice);
//                return true
//            }
//        });
        
    });

    //------------------------------------------------------------------------//
    //  Method's
    //------------------------------------------------------------------------//
    function printCharacters(offset) {

        // Params Get
        var sUrl = _url + "public/characters";
        var aDataGet = {apikey: _publicKey, limit: 10, offset: offset};

        // Clear Container
        $("#container-characters").empty();

        $.get(sUrl, aDataGet).done(function (msg) {
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
                hContainer += "<a type='button' href='"+aData.urls[0].url+"' target='_blank' class='btn' data-character='" + aData.id + "'>VIEW MORE</a>";
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
        }).fail(function (err) {
            console.log(err);
        });
    }

    function printComics() {
        // Params Get
        var sUrl = _url + "public/comics";
        var aDataGet = {apikey: _publicKey, limit: 4, offset: 0};


        // Clear Container Comic
        $("#container-comics").empty();

        var hContainer = "";
        $.get(sUrl, aDataGet).done(function (msg) {

            // Run Comic
            $.each(msg.data.results, function (nIndice, aData) {
                // Image
                hContainer += "<div class='row'>";
                hContainer += "<div class='col-xs-12'>";
                hContainer += "<img src='assets/icons/btn-delete.png' class='btnDelete' data-comic='" + aData.id + "'/>";
                hContainer += "<img class='img-responsive' src='" + aData.thumbnail.path + "." + aData.thumbnail.extension + "' alt='comic'>";
                hContainer += "</div>";
                hContainer += "</div>";
                // Description
                hContainer += "<div class='row'>";
                hContainer += "<div class='col-xs-12'>";
                hContainer += "<h3 class='text-center'>" + aData.title + "</h3>";
                hContainer += "</div>";
                hContainer += "</div>";
                hContainer += "<br />";
            });

            $("#container-comics").html(hContainer);


        }).fail(function (err) {
            alert("Ango anda mal");
            console.log(err);
        });
    }

});