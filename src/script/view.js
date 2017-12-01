import HighCharts from 'highcharts'
import datas from './data.json'

function showLineChart() {
    HighCharts.chart('container',{
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
            labels: {
                format: '{value}'
            }
        },
        series: [
            {
                name: '銀行賣出-即期',
                data: datas.map(el => el.value)
            }
        ]
    })
}

export default {showLineChart}