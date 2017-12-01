import HighCharts from 'highcharts'
import datas from './data.json'

function showLineChart() {
    const dataValues = datas.map(el => el.value)
    const average = dataValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / datas.length
    const maxValue = Math.max(...dataValues)
    const minValue = Math.min(...dataValues)

    let chart = HighCharts.chart('container',{
        chart: {
            type: 'spline'
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
                value: average,
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
                allowPointSelect: true,
                cursor: 'pointer',
                point: {
                    events: {
                        click: e => {
                            addPlotLine(e)
                            addRect(e, chart)    
                        }
                    }
                },
                marker: {
                    states: {
                        select: {
                            fillColor: 'white',
                            lineColor: 'rgb(254,224,128)'
                        }
                    },
                }
            }
        },
        series: [
            {
                name: '銀行賣出-即期',
                data: dataValues.map(el => {
                    if(el === maxValue) {
                        return {
                            y: el,
                            color: 'red'                      
                        }
                    }
                    if(el === minValue) {
                        return {
                            y: el, 
                            color: 'rgb(43,177,170)'
                        }
                    }
                    return el
                }),
                color: 'rgb(254,224,128)'
            },
            {
                name: `平均：${average.toFixed(2)}`,
                color: 'gray',
                dashStyle: 'shortdash',
                marker: {
                    enabled: false
                }
            },
            {
                name: `最高：${maxValue}`,
                color: 'red',
                marker: {
                    symbol: 'circle'
                }
            },
            {
                name: `最低：${minValue}`,
                color: 'rgb(43,177,170)',
                marker: {
                    symbol: 'circle'
                }
            }
        ]
    })
}

function addPlotLine(e) {
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
    $('.rectLabel').remove()
    chart.renderer.rect(e.point.plotX+18, 63, 70, 20)
        .attr({
            class: 'rectLabel',
            fill: 'rgb(43,177,170)',
            rx: 5,
            ry: 5
        })
        .add()
    chart.series[0].update({name: `銀行賣出-即期：${e.point.y}`})
    chart.redraw()
}

export default {showLineChart}