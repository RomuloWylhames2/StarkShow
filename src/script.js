$(document).ready(() => {
    const slickOptions = {
        autoplay: true,
        autoplay: 4000,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Previous</button>;'
    }
    $('.slider').slick(slickOptions);

    $('.footer__form-button').on('click', () => {
        const email = $('#email').val();
        Email.send({
            Host: "smtp.yourisp.com",
            Username: "username",
            Password: "password",
            To: 'contatoproficional@gmail.com',
            From: email,
            Subject: "Por favor me adicione na news letter",
            Body: `Olá, eu gostaria de ser adicionado na news letter do site. meu email é ${email}.   Obrigado!`
        }).then(
            message => alert(message)
        );
    })
});