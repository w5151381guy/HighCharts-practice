import view from './view'

function rotateScreen() {
    $('div#container').css('transform', 'rotate(90deg)')
    $('.fa-arrows-alt').hide()
    $('.fa-compress').show()
}

function straightScreen() {
    $('div#container').css('transform', 'rotate(0deg)')
    $('.fa-arrows-alt').show()
    $('.fa-compress').hide()
}

$(() => {
    view.showLineChart()
    $('.fa-arrows-alt').click(rotateScreen)
    $('.fa-compress').click(straightScreen)
})