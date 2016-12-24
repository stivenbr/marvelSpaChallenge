<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title>Marvel - Developer</title>
        <link rel="stylesheet" href="assets/global/bootstrap-3.3.7-dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="assets/global/bootstrap-3.3.7-dist/css/bootstrap-theme.min.css"/>
        <link rel="stylesheet" href="assets/global/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="assets/global/simple-line-icons/simple-line-icons.min.css"/>
        <link rel="stylesheet" href="assets/global/bootstrap-select/bootstrap-select.min.css"/>
        <link rel="stylesheet" href="assets/global/simplePagination.js-master/simplePagination.css"/>

        <!-- Page -->
        <link rel="stylesheet" href="assets/css/components.css"/>
        <link rel="stylesheet" href="assets/css/plugins.css "/>

        <!-- Page Developer -->
        <link rel="stylesheet" href="assets/css/marvel.css" />

    </head>
    <body>

        <!-- Head -->
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navTop">
                    <form class="form-horizontal" type="get" role="search">
                        <div class="form-group has-feedback">
                            <div class="col-xs-3 hidden-xs">
                                <img alt="Marvel" id="logo" src="assets/img/Marvel-logo.png">
                            </div>
                            <div class="col-sm-6 col-xs-12" id="divSearch">
                                <input type="text" class="form-control" id="search" name="search" placeholder="Search character..." aria-describedby="searchMarvel">
                                <span class="icon-magnifier icons form-control-feedback" aria-hidden="true"></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </nav>

        <!-- Body -->
        <div class="container-fuid" id="bodyMarvel">
            <div class="col-md-9 col-sm-12 section">
                <div class="row">
                    <div class="col-sm-6">
                        <img class="img-responsive pull-left " src="assets/icons/characters.png" alt="characters">
                        <h2 class="pull-left titleIcon">Characters</h2>
                    </div>
                    <div class="col-sm-offset-2 col-sm-4">
                        <select class="form-control bs-select" name="sortBy" id="sortBy">
                            <option value="">Sort By</option>
                            <option value="">Sort By1</option>
                            <option value="">Sort By2</option>
                            <option value="">Sort By3</option>
                            <option value="">Sort By4</option>
                            <option value="">Sort By5</option>
                            <option value="">Sort By6</option>
                        </select>
                    </div>
                </div>
                <br />
                <div id="container-characters">
                </div>
                <div class="row text-center" id="pageNavigation">
                </div>
            </div>
            <div class="col-md-3 hidden-xs hidden-sm section" style="background-color: #EBEBEB;">
                <div class="row">
                    <div class="col-sm-3">
                        <img class="img-responsive center-block" src="assets/icons/favourites.png" alt="favourites">
                    </div>
                    <div class="col-sm-9">
                        <h2 class="titleIcon">My favourites</h2>
                    </div>
                </div>
                <br />
                <div id="container-comics">
                </div>
            </div>
        </div>

        <!-- Modal Character -->
        <div class="modal fade" id="mdlComicCharacter" tabindex="-1" role="dialog" aria-labelledby="characterModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-xs-12">
                                <button type="button" class="btn btn-link pull-right" data-dismiss="modal">
                                    <img src="assets/icons/btn-close.png" alt="Close" />
                                </button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-5">
                                <img class="img-responsive" src="" alt="comic">
                            </div>
                            <div class="col-xs-7">
                                <h2></h2>
                                <p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn" id="btnAddFavourites">
                            <img src="assets/icons/btn-favourites-default.png" alt="Favourites" /> 
                            ADD TO FAVOURITES
                        </button>
                        <button class="btn">
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Librerias -->
        <script type="text/javascript" src="assets/global/jquery-3.1.1.min.js"></script>
        <script type="text/javascript" src="assets/global/angular-1.6.0.min.js"></script>
        <script type="text/javascript" src="assets/global/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="assets/global/bootstrap-select/bootstrap-select.min.js"></script>
        <script type="text/javascript" src="assets/global/simplePagination.js-master/jquery.simplePagination.js"></script>

        <!-- Page -->
        <script type="text/javascript" src="assets/js/jq_marvel.js"></script>

    </body>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-xs-6">
                    <h5>
                        Grabaility 2016 - Todos los derechos reservados 
                    </h5>
                </div>
                <div class="col-xs-6">
                    <img src="assets/icons/grability-logo.png" class="img-responsive pull-right" alt="Logo" />
                </div>
            </div>
        </div>
    </footer>
</html>
