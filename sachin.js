
document.addEventListener('DOMContentLoaded', function () {
        var myChart = Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Comparison'
    },
    subtitle: {
        text: 'Source: stats.espncricinfo.com'
    },
    xAxis: {
        categories: [
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'RUNS'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} runs</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'SR Tendulkar',
        data: [18426]

    }, {
        name: 'KC Sangakkara',
        data: [14234]

    }, {
        name: 'RT Ponting',
        data: [13704]

    }, {
        name: 'ST Jayasuriya',
        data: [13430]

    },  {
        name: 'DPMD Jayawardene',
        data: [12650]

    }, {
        name: 'Inzamam-ul-Haq',
        data: [11739]

    }, {
        name: 'JH Kallis',
        data: [11579]

    }
    ]
});
    });




document.addEventListener('DOMContentLoaded', function () {
    var myChart2 = Highcharts.chart('century', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Total Numbers of Century'
    },
    subtitle: {
        text: 'Source: <a href="https://en.wikipedia.org/wiki/List_of_cricketers_by_number_of_international_centuries_scored" target="_blank">wikipedia.com</a>'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Number of centuries'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b><br/>'
    },

    series: [
        {
            name: "Players",
            colorByPoint: true,
            data: [
                {
                    name: "Sachin Tendulkar",
                    y: 51
                },
                {
                    name: "Virat Kohli",
                    y: 43
                },
                {
                    name: "Ricky Ponting",
                    y: 30

                },
                {
                    name: "Sanath Jayasuriya",
                    y: 28
                },
                {
                    name: "Hasmin Amla",
                    y: 27
                },
                {
                    name: "Rohit Sharma",
                    y: 27
                },
                {
                    name: "Kumar Sangakkara",
                    y: 26
                }
            ]
        }
    ]
    
});
});

