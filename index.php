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
        
        <!-- Page -->
        <link rel="stylesheet" href="assets/css/components.css"/>
        <link rel="stylesheet" href="assets/css/plugins.css "/>

        <style type="text/css">
            
            /* Font */
            @font-face {
                font-family: TradeGothicBold;
                src: url(assets/fonts/trade-gothic-bold/TradeGothic-Bold.woff);
            }
            
            /* Style */
            body{
                background-color: #F4F4F4;
            }
            
            h1, h2, h3, h4, h5, h6 {
                font-family: TradeGothicBold;
            }

            .form-control{
                background-color: #fff;
                border: 1px solid #DCDCDC;
                border-radius: 0px;
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
                font-size: 18px;
                border-radius: 3px;
            }

            .form-horizontal .has-feedback .form-control-feedback {
                color: #b5b5b5;
                font-size: 22pt;
                right: 15px;
                top: 22px;
                vertical-align: middle;
            }
            
            .section{
                padding-top: 30px;
            }
            
            .titleIcon{
                margin-top: 3px; 
                font-weight: bold;
                font-family: TradeGothicBold;
            }
            
            .selectpicker{
                height: 50px;
            }
            
            .cantainer-character{
                background-color: #FFF;
                padding: 0 15px;
                display: block;
                margin: 20px 0px 20px 20px;
            }
            
            .cantainer-character .characterImage{
                left: -30px;
                top: -15px;
                padding: 0px;
            }
            
            .cantainer-character .characterImage img{
                height: 22rem;
                width: 24rem;
            }
            
            .cantainer-character .characterDescription{
                top: -36px;
                padding: 0;
            }
            
            .cantainer-character p{
                font-size: 14px;
                color: #B9B3B3;
            }
            
            .cantainer-character .characterDescription button{
                background-color: #EB1E23;
                color: #FFF;
                font-weight: bold;
            }
            
            .characterHead{
                padding: 0 10px;
                min-height: 260px;
            }
            
            .characterBody{
                position: relative;
                top: -30px;
                min-height: 135px;
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
        <script type="text/javascript" src="assets/global/bootstrap-select/bootstrap-select.min.js"></script>

        <!-- Page -->
        <script type="text/javascript" src="assets/js/jq_marvel.js"></script>

    </body>
</html>
