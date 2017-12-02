import view from './view'

function rotateScreen() {
    $('div#container')
        .css('transform-origin', 'bottom left')
        .css('transform', 'rotate(90deg)')
        .css('top', '-100vw')
        .css('height', '100vw')
        .css('width', '100vh')
    $('.fa-arrows-alt').hide()
    $('.fa-compress').show()
}

function straightScreen() {
    $('div#container')
        .css('transform-origin', 'bottom left')
        .css('transform', 'rotate(0deg)')
        .css('top', '0')
        .css('height', '400px')
        .css('width', '100%')
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