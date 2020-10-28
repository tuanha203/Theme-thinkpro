// sideToggle input NavBar
$(document).ready(() => {
    $('#nav-bar .navbar-toggler').click(() => {
        $('#nav-bar .form-inline').slideToggle(200);
    })
})

// mouse seen navBar // animation cross navbar item and slideToggle menu navBar
let navItems = Array.from(document.querySelectorAll('.nav-item'));

navItems.forEach((item) => {
    item.addEventListener('mouseenter', activeCrossBar)
    item.addEventListener('mouseenter', slideDown)
})

navItems.forEach((item) => {
    item.addEventListener('mouseleave', disableCrossBar)
    item.addEventListener('mouseleave', slideUp)
})


function activeCrossBar(e) {
    let crossBar = e.target.querySelector('.cross-bar__item');
    let widthOfItem = $(e.target.children[0]).width();
    crossBar.style.width = widthOfItem + 'px';
}

function disableCrossBar(e) {
    let crossBar = e.target.querySelector('.cross-bar__item');
    crossBar.style.width = '0px';
}

var checkShortTime; // call function after a period of time
var shortTime = 20; // short time  = 200ms

function slideDown(e) {

    if ($(e.target.querySelector('.nav-bar__menu')).is(':hover') == false) {
        $(e.target.querySelector('.nav-bar__menu')).slideDown(200);
    }
    checkShortTime = 0;
    setTimeout(() => { checkShortTime = 1 }, shortTime);  // set up call function after a period of time 

    // open this menu and display: none others
    Array.from($(e.target).siblings()).forEach((item) => {
        item.lastElementChild.style.display = 'none';
    })
    $('.cover-color').css('display', 'block');
}

function slideUp(e) {
    if (checkShortTime != 0) {                       // check call function after a period of time 
        $(e.target.querySelector('.nav-bar__menu')).slideUp(200);
    }
    $('.cover-color').css('display', 'none');
}

// sticky for catalogue

let offSetTop = $(document.querySelector('.catalogue-wrap')).offset().top;


$(window).scroll(
    function () {
        if ($(window).scrollTop() >= offSetTop) {
            $('.catalogue-wrap').addClass('fixed-col');
        }

        else {
            $('.catalogue-wrap').removeClass('fixed-col');
        }

        if ($(window).scrollTop() >= 750) {
            $('.catalogue-wrap').addClass('stuck-col');
        }
        else {
            $('.catalogue-wrap').removeClass('stuck-col');
        }
    }
)

// check list for catalogue

$('.catalogue h5').click(function () {
    $(this).parent().children('.check-list').toggle(100);
})







