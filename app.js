//Carrossel
var balls = document.querySelector('.balls');
    var quant = document.querySelectorAll('.slides .image');
    var atual = 0;
    var imagem = document.getElementById('atual');
    var next = document.getElementById('next');
    var voltar = document.getElementById('voltar');
    var rolar = true;

    for(let i=0; i < quant.lenght; i++){
        var div = document.createElement('div');
        div.id = i;
        balls.appendChild(div);
    }
    document.getElementById('0').classList.add('imgAtual');

    var pos = document.querySelectorAll('.balls div');

    for(let i=0; i<pos.length; i++){
        pos[i].addEventListener('click', ()=>{
            atual = pos[i].id;
            rolar = false;
            slide();
        })
    }

    voltar.addEventListener('click', ()=>{
        atual--;
        rolar = false;
        slide();
    })
    next.addEventListener('click', ()=>{
        atual++;
        rolar = false;
        slide();
    })

    function slide(){
        if(atual >= quant.length){
            atual = 0;
        }
        else if(atual < 0){
            atual = quant.length-1;
        }
        document.querySelector('.imgAtual').classList.remove('imgAtual');
        imagem.style.marginLeft = -1600*atual+'px';
        document.getElementById(atual).classList.add('imgAtual');
    }
    setInterval(()=>{
        if(rolar){
            atual++;
            slide();
        } 
        else{
            rolar = true;
        }   
        
    },4000);


//Popup produtos

var popupViews = document.querySelectorAll('.popup-view01');
var popupBtns = document.querySelectorAll('.card01');
var closeBtns = document.querySelectorAll('.popup-view01 .btn-close');

var popup = function(popupClick){
    popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
    popupBtn.addEventListener("click", () => {
        popup(i);
    });
});

closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        popupViews.forEach((popupView) => {
            popupView.classList.remove('active');
        });
    });
});

var popupViews2 = document.querySelectorAll('.popup-view02');
var popupBtns2 = document.querySelectorAll('.card02');
var closeBtns2 = document.querySelectorAll('.popup-view02 .btn-close');

var popup2 = function(popupClick2){
    popupViews2[popupClick2].classList.add('active2');
}

popupBtns2.forEach((popupBtn2, i) => {
    popupBtn2.addEventListener("click2", () => {
        popup2(i);
    });
});

closeBtns2.forEach((closeBtn2) => {
    closeBtn2.addEventListener("click2", () => {
        popupViews2.forEach((popupView2) => {
            popupView2.classList.remove('active2');
        });
    });
});

var popupViews3 = document.querySelectorAll('.popup-view03');
var popupBtns3 = document.querySelectorAll('.card03');
var closeBtns3 = document.querySelectorAll('.popup-view03 .btn-close');

var popup3 = function(popupClick3){
    popupViews3[popupClick3].classList.add('active3');
}

popupBtns3.forEach((popupBtn3, i) => {
    popupBtn3.addEventListener("click3", () => {
        popup3(i);
    });
});

closeBtns3.forEach((closeBtn3) => {
    closeBtn3.addEventListener("click3", () => {
        popupViews3.forEach((popupView3) => {
            popupView3.classList.remove('active3');
        });
    });
});

var popupViews4 = document.querySelectorAll('.popup-view04');
var popupBtns4 = document.querySelectorAll('.card04');
var closeBtns4 = document.querySelectorAll('.popup-view04 .btn-close');

var popup4 = function(popupClick4){
    popupViews4[popupClick4].classList.add('active4');
}

popupBtns4.forEach((popupBtn4, i) => {
    popupBtn4.addEventListener("click4", () => {
        popup4(i);
    });
});

closeBtns4.forEach((closeBtn4) => {
    closeBtn4.addEventListener("click4", () => {
        popupViews4.forEach((popupView4) => {
            popupView4.classList.remove('active4');
        });
    });
});