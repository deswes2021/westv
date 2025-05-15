var its,itc,itk,ito;
var itu = 'https://raw.githubusercontent.com/deswes2021/westv/main/script/indexk.js';
var itp = 'https://corsproxy.io/?';
var itx = 'https://raw.githubusercontent.com/deswes2021/westv/main/script/knales.js';
var d1,d2,d3,d4,d5;

$(document).on('contextmenu', function(ex){ ex.preventDefault();/*-*/return false; });
$(document).on('keydown', function(ex){
    ex.preventDefault();
    return false;
});

$(window).on('load', function(ex){
    $('body').css({ backgroundColor: 'black', margin: '0px', padding: '0px' });
    var op = window.location.href.split('#')[1]||'menu';
    getk(op);
    return false;
});

function getk(op) {
    fetch(itx).then(response => { 
        if (!response.ok) { console.log('CONEXION PERDIDA'); }
        else { return response.text(); }
    })
    .then(data => { parsek(op,data); })
    .catch((oe) => console.log('NO SE PUEDE OBTENER LISTA'));
    return false;
}

function parsek(op, data) {
    $('body').empty();
    $('body').append('<div id="main"></div>');
    $('#main').css({
        position: 'absolute', backgroundColor: 'silver', margin: '0px', padding: '0px', overflow:'hidden',
        left: '5px', top: '5px', right: '5px', bottom: '5px', textAlign: 'center',
        overflowY: 'scroll', scrollbarWidth: 'none' 
    });
    const lineas = data.trim().split('\n');
    itk = [];
    itc = 0;
    for (let i = 0; i < lineas.length; i += 2) {
        const info = lineas[i];
        const rl = lineas[i + 1] || '';
        const logoMatch = info.match(/tvg-logo="([^"]+)"/);
        const tipoMatch = info.match(/tvg-title="([^"]+)"/);
        const urlMatch = rl.match(/(http[^\s"]+)/);
        const logo = logoMatch ? logoMatch[1] : '';
        const tipo = tipoMatch ? tipoMatch[1] : '';
        const url = urlMatch ? urlMatch[1] : '';
        if(url){
            itc++;
            $('#main').append('<input type="image" class="knls" '+
            'id="'+itc+'"'+
            'src="'+logo+'"'+
            'url="'+url+'"'+
            'style="width:280px; height:160px; margin:5px; padding:0px; border-radius:10px;'+
            'border:10px solid black"'+
            '>');    
        }
    }
    
    return false;
}
