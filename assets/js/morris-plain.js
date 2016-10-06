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
