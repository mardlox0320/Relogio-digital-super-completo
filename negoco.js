 const hours = document.querySelector("#horas");
 const minutes = document.querySelector('#minutos');
 const seconds = document.querySelector('#segundos');
 const date = document.querySelector('#day');
 const week = document.querySelector('#week');
 const Mês = document.querySelector('#month');
 const year = document.querySelector('#year');
 const mili = document.querySelector('#milisegundos');

 const clock = setInterval(function time() {
    let bagui = new Date();
    let horas = bagui.getHours();
    let minutos = bagui.getMinutes();
    let segundos = bagui.getSeconds();
    let dia = bagui.getDate();
    let diaSemana = bagui.getDay();
    let mes = bagui.getMonth();
    let ano = bagui.getFullYear();
    let milli = bagui.getMilliseconds();

    if (horas < 10) horas = '0' + horas;
    if (minutos < 10) minutos = '0' + minutos;
    if (segundos < 10) segundos = '0' + segundos;
    if (dia < 10) dia = '0' + dia;
    switch(diaSemana) {
        case 0:
            diaSemana = 'Domingo';
            break;
        case 1:
            diaSemana = 'Segunda-feira';
            break;
        case 2:
            diaSemana = 'Terça-feira';
            break;
        case 3:
            diaSemana = 'Quarta-feira';
            break;
        case 4:
            diaSemana = 'Quinta-feira';
            break;
        case 5:
            diaSemana = 'Sexta-feira';
            break;
        case 6:
            diaSemana = 'Sábado';
            break;
    }
    switch(mes) {
        case 0:
            mes = 'Janeiro(1)';
            break;
        case 1:
            mes = 'Fevereiro(2)';
            break;
        case 2:
            mes = 'Março(3)';
            break;
        case 3:
            mes = 'Abril(4)';
            break;
        case 4:
            mes = 'Maio(5)';
            break;
        case 5:
            mes = 'Junho(6)';
            break;
        case 6:
            mes = 'Julho(7)';
            break;
        case 7:
            mes = 'Agosto(8)';
            break;
        case 8:
            mes = 'Setembro(9)';
            break;
        case 9:
            mes = 'Outubro(10)';
            break;
        case 10:
            mes = 'Novembro(11)';
            break;
        case 11:
            mes = 'Dezembro(12)';
            break;
    }

    hours.textContent = horas;
    minutes.textContent = minutos;
    seconds.textContent = segundos;
    date.textContent = dia;
    week.textContent = diaSemana;
    Mês.textContent = mes;
    year.textContent = ano;
    mili.textContent = milli;
} )