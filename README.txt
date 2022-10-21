Esse projeto é um estudo com o modulo Sequilize (Node.js), o qual faz conectar o codigo com o banco de dados(MySQL)

para funcionar, requer instalar:
    ## npm i --save express
    ## npm i --save body-parser
    ## npm i --save Sequilize
    ## npm i --save mysql2

______________________________________________

Um codigo legal que aprendi é deslizar suavemente a tela, um scroll suave:

<script>
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset 
        }, 500);
    });
</script>

_____________________________________________

Outro codigo bacana é para fazer um botao chamar uma função css de outro elemento
Exemplo: dou um hover em um botao, ele da zoom em um imagem

<script>
                function zoom(){
        console.log('foi')
        $('#NOME DA imagem').addClass('NOME DA CLASSE CSS')
    }
    function naozoom(){
        $('#NOME DA IMAGEM').removeClass('NOME DA CLASSE CSS')
    }
</script>

depois disso voce vai la no botao e escreve assim na classe do botao:

onmouseover="javascript: zoom();" 
onmouseout="javascript: naozoom();">
