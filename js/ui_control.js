let devType = null;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    devType = "mobile";
}
else {
    devType = "pc"
    document.addEventListener('DOMContentLoaded', () => {
        const images = new Array();
    
        function preloadImages(...images) {
            images.forEach((image, i) => {
                image = new Image();
                image.src = preloadImages.arguments[i];
            });
        };
        preloadImages(
            './img/design.gif',
            './img/model.gif',
            './img/prod.gif',
            './img/money.gif',
            './img/popup_background.gif'
        );
    });
}
if (devType == "mobile") {
    document.querySelector('.main__items__pc').style.display = "none";
    document.querySelector('.pc__btn').style.display = "none";
    document.querySelector('.pc__me').style.display = "none";
    document.querySelector('.pc__me__set').style.display = "none";
}

function hover(element) {
    let type = element.id;
    element.setAttribute('src', `./img/${type}.gif`);
}
function unhover(element) {
    let type = element.id;
    element.setAttribute('src', `./img/${type}.png`);
}

function goTo(target) {
    const el = document.getElementById(target);
    el.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
}

document.querySelector(".up__btn").style.display = "none";
window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
    document.querySelector(".up__btn").style.display = "";
    } else {
    document.querySelector(".up__btn").style.display = "none";
    }
}

document.querySelector('.popup__sended__request').style.display = "none";
function sendRequest() {
    let msg = document.querySelector('.msg').value;
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    if (msg && name && email) {
        fetch('https://api.telegram.org/bot1070038475:AAGK8MbB_VNFpeYSapXQ1L458o1innmPWkk/' +
            'sendMessage?chat_id=-1001490927690&text=' +
                'Заявка с landing page: ' +
                `Имя => ${name} ` +
                `Адрес эл. почты => ${email} ` +
                `Сообщение => ${msg}`)
        document.querySelector('.background').style.opacity = "0";
        document.querySelector('.up__btn').style.display = "none";
        document.body.style.overflow = "hidden";
        document.querySelector('.popup__sended__request').style.display = "";
        document.querySelector('.msg').value = "";
        document.querySelector('.name').value = "";
        document.querySelector('.email').value = "";
    }
    else {
        function leftFirst() {
            document.querySelector('#contacts').style = "margin-left: 50px;"
        }
        function leftSecond() {
            document.querySelector('#contacts').style = "margin-left: 100px;"
        }
        function rightFirst() {
            document.querySelector('#contacts').style = "margin-left: 50px;"
        }
        function rightSecond() {
            document.querySelector('#contacts').style = ""
        }
        if (!document.querySelector('.msg').value) {
            document.querySelector('.msg').style = "border-color: tomato;";
        }
        if (!document.querySelector('.name').value) {
            document.querySelector('.name').style = "border-color: tomato;";
        }
        if (!document.querySelector('.email').value) {
            document.querySelector('.email').style = "border-color: tomato;";
        }
        function clearColor() {
            document.querySelector('.msg').style = "";
            document.querySelector('.name').style = "";
            document.querySelector('.email').style = "";
        }
        setTimeout(leftFirst, 50);
        setTimeout(leftSecond, 100);
        setTimeout(rightFirst, 150);
        setTimeout(rightSecond, 200);
        setTimeout(clearColor, 600)
    }
}

function closePopup() {
    document.querySelector('.background').style.opacity = "";
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
        document.querySelector(".up__btn").style.display = "";
    } else {
        document.querySelector(".up__btn").style.display = "none";
    }
    document.body.style.overflow = "auto";
    if (document.querySelector('.popup__sended__request')) {
        document.querySelector('.popup__sended__request').style.display = "none";
    }
    if (document.querySelector('.popup__info')) {
        document.querySelector('.popup__info').style.display = "none";
    }
}

document.querySelector('.popup__info').style.display = "none";
function show(target) {
    document.querySelector('.up__btn').style.display = "none";
    document.body.style.overflow = "hidden";
    document.querySelector('.popup__info').style.display = "";
    document.querySelector('.popup__info').innerHTML =`
        <img src="./img/close.png" class="close" alt="close" onclick="closePopup()">
    `;
    if (target == 'meFirst') {
        document.querySelector('.popup__info').innerHTML += `
            <img src="./img/me_1.jpg" alt="me" width="100%" height="100%">
        `;
    }
    if (target == 'meSecond') {
        document.querySelector('.popup__info').innerHTML += `
            <img src="./img/me_2.jpg" alt="me" width="100%" height="100%">
        `;
    }
    if (target == 'meThird') {
        document.querySelector('.popup__info').innerHTML += `
            <img src="./img/me_3.jpg" alt="me" width="100%" height="100%">
        `;
    }
    
    if (target =='design') {
        function initFirst() {
            document.querySelector('.popup__info').innerHTML += `
                <h3 class="popup__inner">
                    Разработка фирменного стиля
                    <br>
                    <img class="down" src="./img/down_right.png" alt="down" height="25px" width="25px">
                </h3>
                
            `;
        }
        function initSecond() {
            document.querySelector('.popup__info').innerHTML += `
                <h3 class="popup__inner">
                    Индивидуальный подход
                    <br>
                    <img class="down" src="./img/down_left.png" alt="down" height="25px" width="25px">
                </h3>
            `;
        }
        function initThird() {
            document.querySelector('.popup__info').innerHTML += `
                <h3 class="popup__inner">
                    Гибкая ценовая политика
                    <br>
                    <img class="down" src="./img/goal.png" alt="down" height="45px" width="55px">
                </h3>
            `;
        }
        setTimeout(initFirst, 500);
        setTimeout(initSecond, 1000);
        setTimeout(initThird, 1500);
    }
    if (target =='model') {
        function initFirst() {
            document.querySelector('.popup__info').innerHTML += `
                <h3 class="popup__inner">Адаптивная верстка
                    <br>
                    <img class="down" src="./img/down_left.png" alt="down" height="25px" width="25px">
                </h3>
            `;
        }
        function initSecond() {
            document.querySelector('.popup__info').innerHTML += `
                <h3 class="popup__inner">
                    Проработка интерфейса по концепции mobile first
                    <br>
                    <img class="down" src="./img/down_right.png" alt="down" height="25px" width="25px">
                </h3>
            `;
        }
        function initThird() {
            document.querySelector('.popup__info').innerHTML += `
                <h3 class="popup__inner">
                    Корректировки и правки на всех этапах разработки
                    <br>
                    <img class="down" src="./img/goal.png" alt="down" height="45px" width="55px">
                </h3>
            `;
        }
        setTimeout(initFirst, 500);
        setTimeout(initSecond, 1000);
        setTimeout(initThird, 1500);
    }
    if (target =='prod') {
        function initFirst() {
            document.querySelector('.popup__info').innerHTML += `
                <h3 class="popup__inner">
                    Быстрый деплой на production сервер
                    <br>
                    <img class="down" src="./img/down_right.png" alt="down" height="25px" width="25px">
                </h3>
            `;
        }
        function initSecond() {
            document.querySelector('.popup__info').innerHTML += `
                <h3 class="popup__inner">
                    Развертывание в вашей инфраструктуре или в облаке
                    <br>
                    <img class="down" src="./img/down_left.png" alt="down" height="25px" width="25px">
                </h3>
            `;
        }
        function initThird() {
            document.querySelector('.popup__info').innerHTML += `
                <h3 class="popup__inner">
                    Поддержка после внедрения
                    <br>
                    <img class="down" src="./img/goal.png" alt="down" height="45px" width="55px">
                </h3>
            `;
        }
        setTimeout(initFirst, 500);
        setTimeout(initSecond, 1000);
        setTimeout(initThird, 1500);
    }
    if (target =='money') {
        function initFirst() {
            document.querySelector('.popup__info').innerHTML += `
                <h3 class="popup__inner">
                    Выбор оптимального тарифа на облачные ресурсы
                    <br>
                    <img class="down" src="./img/down_left.png" alt="down" height="25px" width="25px">
            </h3>
            `;
        }
        function initSecond() {
            document.querySelector('.popup__info').innerHTML += `
                <h3 class="popup__inner">
                    Минимизация затрат на сопровождение после внедрения
                    <br>
                    <img class="down" src="./img/down_right.png" alt="down" height="25px" width="25px">
                </h3>
            `;
        }
        function initThird() {
            document.querySelector('.popup__info').innerHTML += `
                <h3 class="popup__inner">
                    Скидки постоянным клиентам
                    <br>
                    <img class="down" src="./img/goal.png" alt="down" height="45px" width="55px">
                </h3>
            `;
        }
        setTimeout(initFirst, 500);
        setTimeout(initSecond, 1000);
        setTimeout(initThird, 1500);
    }
}
