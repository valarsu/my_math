/**
 * Created by valarsu on 16-5-20.
 */
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: '数学建模优秀学生专业分布'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '所占比重',
            data: [
                ['应用化学',   12.8],
                ['统计',       15.8],
                {
                    name: '信息与计算科学',
                    y: 20.0,
                    sliced: true,
                    selected: true
                },
                ['农业水利工程',    8.5],
                ['电气工程',     6.2],
                ['其他',  36.7]
            ]
        }]
    });
});				
