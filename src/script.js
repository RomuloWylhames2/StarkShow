$(document).ready(() => {
    $('.navbar__menu-btn').on('click', function() {
        $('.navbar__links').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars');
        $(this).find('i').toggleClass('fa-times');
    })
    const slickOptions = {
        autoplay: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Previous</button>;'
    }
    $('.slider').slick(slickOptions);
    const counterOptions = {
        delay: 10,
        time: 1000,
    };

    setInterval(() => {
        const numbersCollection = document.querySelectorAll(".counter__number");

        numbersCollection.forEach((number) => {
            const currentNumber = parseInt(number.innerHTML);
            number.innerHTML = currentNumber + 1;
        });
    }, 1000);

    $(".counter__number").counterUp(counterOptions);

    $('.footer__form-button').on('click', () => {
        const email = $('#email').val();

        const emailOptions = {
            Host: "smtp.yourisp.com",
            Username: "username",
            Password: "password",
            To: 'contatoproficional@gmail.com',
            From: email,
            Subject: "Por favor me adicione na news letter",
            Body: `Olá, eu gostaria de ser adicionado na news letter do site. meu email é ${email}.   Obrigado!`
        }

        email.send(emailOptions).then((message) => {
            alert(message);
        });
    });
});