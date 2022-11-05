<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel + Bootstrap</title>
    <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}" />
    <script>src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"</script>
</head>
<body>
    categories
    <div id="app">
    <section id="main-content">
        <section class="wrapper site-min-height center">

            <section id="import">
                <div class="panel">
                    <div class="panel-body">
                        <div class="col-sm-12 panel"></div>
                        <div class="col-sm-2">
                            <span class="listing-detail-follow-suggestion-btn">
                                <button id="import" onclick="initImportItem();" type="button" class="btn btn-primary" data-toggle="modal" href="#myModal4" data-backdrop="static" data-keyboard="false">Importar Categorias</button>
                            </span>
                        </div>
                        <div class="col-sm-2">
                            <span class="listing-detail-follow-suggestion-btn">
                                <button id="vendas" type="button" class="btn btn-primary btn-follow-suggestion" data-toggle="modal" href="#myModal4" data-backdrop="static" data-keyboard="false">Importar Vendas</button>
                            </span>
                        </div>
                        <div class="col-sm-12 panel"></div>
                        <!--vertical center Modal start-->
                        <div class="modal fade modal-dialog-center " id="myModal4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div class="modal-dialog ">
                                <div class="modal-content-wrap">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Importação</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div class="text-center">
                                                <div class="i-circle primary"><i class="fa fa-download"></i></div>
                                                <div class="progress progress-striped active" id="dvProgressBar">
                                                    <div class="progress-bar progress-bar-primary" style="width: 0%">0%</div>
                                                </div>
                                                <div id="dvItemImportMessageDetail"><h4>Estamos importando as categorias.</h4></div>
                                                <p>Isto pode levar algum tempo. Por favor aguarde a conclusão do processo.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- vertical center Modal end -->
                    </div>
                </div>
            </section>
        </section>
    </section>
    </div>

    <script>

        function initImportItem()
        {
            /*$.ajax({
                type: "GET",
                url: "api/v1/delete_anuncios",
                contentType: "application/json"
            })
            .success(function(data) {
	            setTimeout(importItems, 2000);
            })
            .error(function() {
                console.log("erro status");
            });*/
            console.log("aqui");


        }
    </script>
</body>
</html>
