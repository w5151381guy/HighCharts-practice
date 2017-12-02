import view from './view'

function rotateScreen() {
    $('div#container').toggleClass('rotated')
    $('div.highcharts-container ')
        .css('width', '100vh')
        .css('height', '100vw')
    svg = document.getElementsByTagName('svg')[0]
    svg.setAttribute('width', '100vh')
    svg.setAttribute('height', '100vw')
    $('.fa-arrows-alt').hide()
    $('.fa-compress').show()
}

function straightScreen() {
    $('div#container').removeClass('rotated')
    $('div.highcharts-container ')
        .css('width', '100%')
        .css('height', '400px')
    svg = document.getElementsByTagName('svg')[0]
    svg.setAttribute('width', '100%')
    svg.setAttribute('height', '400px')
    $('.fa-arrows-alt').show()
    $('.fa-compress').hide()
}

$(() => {
    view.showLineChart()
    $('div#container').append(`
        <div class="screen">
            <div class="fa fa-arrows-alt fa-2x"></div>
            <div class="fa fa-compress fa-2x"></div>
        </div>
    `)
    $('.fa-arrows-alt').click(rotateScreen)
    $('.fa-compress').click(straightScreen)
})