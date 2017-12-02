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
    $('div#container').append(`
        <div class="screen">
            <div class="fa fa-arrows-alt fa-2x"></div>
            <div class="fa fa-compress fa-2x"></div>
        </div>
    `)
    $('.fa-arrows-alt').click(rotateScreen)
    $('.fa-compress').click(straightScreen)
})