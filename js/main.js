var a=[],b=[],c=[];
var i,j,x,y,s,k,z,text='';
var b_click=0;
var karta;

$(document).ready(function () {
    for(i=0;i<=20;i++){ a[i]=i+1;  }
    z=shuffle(a);
    show_crads(z);
});

function btn1_click(z) {
    text='';
    karta='';
    s=7;
    for(j=0;j<=2;j++)
    for(i=j;i<=15;i+=7){
        if(i!=9){
            b[i]=z[s];
            k=i+9;
            x=i+18;
            if(k>=21){k=k-20;}
            if(x>=21){x=x-20;}
            b[k]=z[s-7];
            b[x]=z[s+7];
            s++;
        }
    }
    show_crads(b);
    b_click++;
    vasha_karta(b_click,karta,b[10]);
}

function btn2_click(z) {
    text='';
    karta='';
    s=0;
    for(j=0;j<=2;j++)
        for(i=j;i<=15;i+=7){
            if(i!=9){
                b[i]=z[s];
                k=i+9;
                x=i+18;
                if(k>=21){k=k-20;}
                if(x>=21){x=x-20;}
                b[k]=z[s+7];
                b[x]=z[s+14];
                s++;
            }
        }
    show_crads(b);
    b_click++;
    vasha_karta(b_click,karta,b[10]);
}

function btn3_click(z) {
    text='';
    karta='';
    s=0;
    for(j=0;j<=2;j++)
        for(i=j;i<=15;i+=7){
            if(i!=9){
                b[i]=z[s];
                k=i+9;
                x=i+18;
                if(k>=21){k=k-20;}
                if(x>=21){x=x-20;}
                b[k]=z[s+14];
                b[x]=z[s+7];
                s++;
            }
        }
    show_crads(b);
    b_click++;
    vasha_karta(b_click,karta,b[10]);
}

function rand() {
    var random=Math.floor(Math.random()*21)+1;
    return random;
}

function vasha_karta (b_click,karta,b) {
    if(b_click==3){
        b_click=0;

        karta+=karta+='<img class="karta" src="cards/'+b+'.png"> ';
        $(".vasha_karta").html('Ваша карта');
        karta+='<hr><a class="btn btn-primary" href="#" onclick="location.reload(); return false;">Обновить страницу</a>'
        $(".fon").html(karta);
    }
}


function show_crads(z) {
    text+='  <a class="btn btn-primary" href="#" onclick="location.reload(); return false;">Перемешать карты</a><hr>';
    s=0;
    var tt='['+z+']';
    for(i=1;i<=3;i++){
        text+='<img onclick="btn'+i+'_click('+tt+')" class="btn'+i+'" src="cards/'+i+'s.png">';
        for(j=1;j<=7;j++){
            text+='<img class="cards" src="cards/'+z[s]+'.png"> ';
            s++;
        }
        text+='<hr>';
    }
    $(".fon").html(text);
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
