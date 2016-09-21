var Script = function () {

    //morris chart

    $(function () {

      Morris.Line({
        element: 'hero-graph',
        data: [
             {"month": "2016-01", "tweets": 12342},
             {"month": "2016-02", "tweets": 10000},
             {"month": "2016-03", "tweets": 9700},
             {"month": "2016-04", "tweets": 8420},
             {"month": "2016-05", "tweets": 9682},
             {"month": "2016-06", "tweets": 11018}
        ],
        xkey: 'month',
        ykeys: ['tweets'],
        labels: ['Tweets'],
        xLabelFormat: function (x) {
              var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun");
              var date = x.getDate();
              var month = x.getMonth();
              var year = x.getFullYear();
              return m_names[month] + " " + year; },
        xLabelAngle: 45,
        lineColors: ['#4ECDC4']
      });

      $('.code-example').each(function (index, el) {
        eval($(el).text());
      });
    });

}();


//
// Morris.Bar({
//   element: 'hero-bar',
//   data: [
//     {device: 'iPhone', geekbench: 136},
//     {device: 'iPhone 3G', geekbench: 137},
//     {device: 'iPhone 3GS', geekbench: 275},
//     {device: 'iPhone 4', geekbench: 380},
//     {device: 'iPhone 4S', geekbench: 655},
//     {device: 'iPhone 5', geekbench: 1571}
//   ],
//   xkey: 'device',
//   ykeys: ['geekbench'],
//   labels: ['Geekbench'],
//   barRatio: 0.4,
//   xLabelAngle: 35,
//   hideHover: 'auto',
//   barColors: ['#ac92ec']
// });
