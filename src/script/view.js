import HighCharts from 'highcharts'
import datas from './data.json'

function showLineChart() {
    let chart = HighCharts.chart('container',{
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Demo'
        },
        xAxis: {
            categories: datas.map(el => el.date)
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: datas
                        .map(el => el.value)
                        .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / datas.length,
                color: 'gray',
                dashStyle: 'longdash',
                width: 2,
                label: {
                    text: 'average value'
                }
            }]
        },
        plotOptions: {
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: e => {
                            addPlotLine(e)
                            addRect(e, chart)
                        }
                    }
                }
            }
        },
        series: [
            {
                name: '銀行賣出-即期',
                data: datas.map(el => el.value),
                color: 'rgb(254,224,128)'
            }
        ]
    })
}

function addPlotLine(e) {
    console.log(e.point)
    const xAxis = e.point.series.xAxis
    HighCharts.each(xAxis.plotLinesAndBands, p => {
        if(p.id === 'plot') {
            p.destroy()
        }
    })
    xAxis.addPlotLine({
        value: e.point.x,
        width: 5,
        label: {
            text: e.point.category,
            align: 'center',
            rotation: 0,
            style: {
                color: 'white'
            },
            y: 30
        },
        color: 'rgb(43,177,170)',
        id: 'plot'
    })
}

function addRect(e, chart) {
    console.log(e)
    $('.rectLabel').remove()
    chart.renderer.rect(e.point.plotX+17, 63, 70, 20)
        .attr({
            class: 'rectLabel',
            fill: 'rgb(43,177,170)'
        })
        .add()
}

export default {showLineChart}