"use strict";

$(document).ready(function() {

    var Continue = $('#continue_btn');
    var openNav = $('#opennav');
    var closeNav = $('.closebtn');

    Continue.on('click', function() {
        $(this).parent().hide();
        $('#content_web_layers').show();
        $('#front-end-developer-do').hide();
        $('#back-end-developer-do').hide();
        $('#fullstack-developer-do').hide();
    });

    openNav.on('click', function() {
        $('#mySidenav').css({
            'width': '200px'
        });
        $('#main').css({
            'margin-left': '200px',
            'opacity': '0.1'
        });
        $('#header').css({
            'font-size': '24px'
        })
        $('#opennav').hide();
    });

    closeNav.on('click', function() {
        $('#mySidenav').css({
            'width': '0'
        });
        $('#main').css({
            'margin-left': '0',
            'opacity': '1'
        });
        $('#body').css({
            'background': 'white'
        });
        $('#opennav').show();
    });

    $('#front-dev').on('click', function() {
        $('#Developer').hide();
        $('#header_container').hide();
        $('#front-end-developer-do').show().addClass('w3-animate-top');
    });
    $('#back-dev').on('click', function() {
        $('#Developer').hide();
        $('#header_container').hide();
        $('#back-end-developer-do').show().addClass('w3-animate-top');
    });
    $('#full-dev').on('click', function() {
        $('#Developer').hide();
        $('#header_container').hide();
        $('#fullstack-developer-do').show().addClass('w3-animate-top');
    });
    $('#btn_prev').on('click', function() {
        $('#Developer').show();
        $('#header_container').show();
        $(this).parent().hide();
    });
    $('#btn_next').on('click', function() {
        $(this).parent().hide();
        $('#back-end-developer-do').show().addClass('w3-animate-top');
    });
    $('#btn_prev_from_backend').on('click', function() {
        $(this).parent().hide();
        $('#front-end-developer-do').show().addClass('w3-animate-top');
    });
    $('#btn_next_from_backend').on('click', function() {
        $(this).parent().hide();
        $('#main').show();
        $('#fullstack-developer-do').show().addClass('w3-animate-top');
    });
    $('#btn_prev_from_fullstack').on('click', function() {
        $(this).parent().hide();
        $('#back-end-developer-do').show().addClass('w3-animate-top');
    });

    $('#black').on('click', function() {
        $('body').removeClass('w3-light-grey');
        $('body').removeClass('w3-red');
        $('body').removeClass('w3-blue');
        $('body').removeClass('w3-green');
        $('body').removeClass('w3-pink');
        $('body').addClass('w3-black');
    });
    $('#red').on('click', function() {
        $('body').removeClass('w3-black');
        $('body').removeClass('w3-light-grey');
        $('body').removeClass('w3-blue');
        $('body').removeClass('w3-green');
        $('body').removeClass('w3-pink');
        $('body').addClass('w3-red');
    });
    $('#blue').on('click', function() {
        $('body').removeClass('w3-light-grey');
        $('body').removeClass('w3-black');
        $('body').removeClass('w3-green');
        $('body').removeClass('w3-pink');
        $('body').removeClass('w3-red');
        $('body').addClass('w3-blue');
    });
    $('#green').on('click', function() {
        $('body').removeClass('w3-light-grey');
        $('body').removeClass('w3-black');
        $('body').removeClass('w3-pink');
        $('body').removeClass('w3-red');
        $('body').removeClass('w3-blue');
        $('body').addClass('w3-green');
    });
    $('#pink').on('click', function() {
        $('body').removeClass('w3-light-grey');
        $('body').removeClass('w3-black');
        $('body').removeClass('w3-green');
        $('body').removeClass('w3-red');
        $('body').removeClass('w3-blue');
        $('body').addClass('w3-pink');
    });
    $('#light_grey').on('click', function() {
        $('body').removeClass('w3-black');
        $('body').removeClass('w3-pink');
        $('body').removeClass('w3-red');
        $('body').removeClass('w3-blue');
        $('body').removeClass('w3-green');
        $('body').addClass('w3-light-grey');
    });

    setTimeout(function() {
        $('.loader_bg').fadeToggle();
        $('#page').show();
        $('#footer').hide();
        $('#header_container').hide();
        setTimeout(function() {
            $('#page').fadeToggle();
            $('#main').show();
            $('#footer').show();
            $('#header_container').show();
        }, 3000)
    }, 3000);
})


function func(evt, tabs) {
    var i, tablinks;
    var x = document.getElementsByClassName('lists');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName("tab_link");

    for (i = 0; i < x.length; i++) {
        tablinks[i].classList.remove("w3-yellow");
    }
    document.getElementById(tabs).style.display = 'block';
    document.getElementById('front-end-developer-do').style.display = 'none';
    document.getElementById('back-end-developer-do').style.display = 'none';
    document.getElementById('fullstack-developer-do').style.display = 'none';
    document.getElementById('content_web_layers').style.display = 'none';

    $('#mySidenav').css({
        'width': '0'
    });
    $('#main').css({
        'margin-left': '0',
        'opacity': '1'
    });
    $('#body').css({
        'background': 'white'
    });
    $('#opennav').show();

    evt.currentTarget.classList.add("w3-yellow");
}

function accordion(id) {
    document.getElementById(id).classList.toggle('w3-show');
    document.getElementById(id).previousElementSibling.classList.toggle("w3-indigo");
}

function closePage() {
    $('#mySidenav').css({
        'width': '0'
    });
    $('#main').css({
        'margin-left': '0',
        'opacity': '1'
    });
    $('#body').css({
        'background': 'white'
    });
    $('#opennav').show();
    $('#modal').show();
}

function yes() {
    $('#main').hide();
    $('#header_container').hide();
    $('#page2').show();
    setTimeout(function() {
        window.close();
    }, 3000)
}

function cancel() {
    $('#modal').hide();
}
