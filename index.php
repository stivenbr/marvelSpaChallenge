<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title>Marvel - Developer</title>
        <link rel="stylesheet" href="assets/global/bootstrap-3.3.7-dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="assets/global/bootstrap-3.3.7-dist/css/bootstrap-theme.min.css"/>
        <link rel="stylesheet" href="assets/global/simple-line-icons/css/simple-line-icons.css"/>

        <style type="text/css">
            body{
                background-color: #F4F4F4;
            }

            .form-control{
                background-color: #fff;
                border: 1px solid #e5e5e5;
                border-radius: 3px;
                box-shadow: none;
                color: #333;
                font-size: 14px;
                font-weight: normal;
                transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
            }

            .navbar {
                margin-bottom: 0px;
                -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.4);
                -moz-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.4);
                box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.4);
                z-index: 10;
            }
            .navbar-default{
                background-image: inherit;
                background-color: #2D2727;
                border: 0px;
                border-radius: 0px;
                height: 80px;
            }

            #logo{
                width: 170px;
            }

            .navTop{
                padding-top: 10px; 
            }

            #search{
                padding: 5px;
            }

            #search input{
                height: 50px;
                background-color: #FAFAFA;
            }

            .form-horizontal .has-feedback .form-control-feedback {
                color: #b5b5b5;
                font-size: 22pt;
                right: 15px;
                top: 15px;
                vertical-align: middle;
            }
            
            .section{
                padding-top: 30px;
            }
            
            .titleIcon{
                margin-top: 3px; 
                font-weight: bold
            }
            
        </style>
    </head>
    <body>

        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navTop">
                    <form class="form-horizontal" role="search">
                        <div class="form-group has-feedback">
                            <div class="col-xs-3">
                                <img alt="Marvel" id="logo" src="assets/img/Marvel-logo.png">
                            </div>
                            <div class="col-xs-6" id="search">
                                <input type="text" class="form-control" id="inputSuccess3" placeholder="Search character..." aria-describedby="searchMarvel">
                                <span class="icon-magnifier icons form-control-feedback" aria-hidden="true"></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </nav>

        <div class="container-fuid">
                <div class="col-md-9 col-sm-12 section">
                    <div class="row">
                        <div class="col-sm-6">
                            <img class="img-responsive pull-left " src="assets/icons/characters.png" alt="characters">
                            <h2 class="pull-left titleIcon">Characters</h2>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 hidden-sm section" style="background-color: #EBEBEB;">
                    <div class="row">
                        <div class="col-sm-3">
                            <img class="img-responsive center-block" src="assets/icons/favourites.png" alt="favourites">
                        </div>
                        <div class="col-sm-9">
                            <h2 class="titleIcon">My favourites</h2>
                        </div>
                    </div>
                </div>
        </div>

        <!-- Librerias -->
        <script type="text/javascript" src="assets/global/jquery-3.1.1.min.js"></script>
        <script type="text/javascript" src="assets/global/angular-1.6.0.min.js"></script>
        <script type="text/javascript" src="assets/global/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>

        <!-- Page -->
        <script type="text/javascript" src="assets/js/marvel.js"></script>

    </body>
</html>
