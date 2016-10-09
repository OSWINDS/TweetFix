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

    Morris.Line({
      element: 'sentiment-graph',
      data: [
        {"month": "2015-12", "anger": 0.0171, "disgust": 1.4507, "fear": 0.1236, "joy": 0.0316, "sadness": 0.0175, "surprise": 0.0144},
        {"month": "2016-01", "anger": 0.0163, "disgust": 3.4988, "fear": 0.1112, "joy": 0.0311, "sadness": 0.0342, "surprise": 0.0110},
        {"month": "2016-02", "anger": 0.0196, "disgust": 4.7671, "fear": 0.1307, "joy": 0.0344, "sadness": 0.0232, "surprise": 0.0107},
        {"month": "2016-03", "anger": 0.0205, "disgust": 6.5680, "fear": 0.1253, "joy": 0.0351, "sadness": 0.0212, "surprise": 0.0100},
        {"month": "2016-04", "anger": 0.0177, "disgust": 5.3430, "fear": 0.1397, "joy": 0.0338, "sadness": 0.0224, "surprise": 0.0113},
        {"month": "2016-05", "anger": 0.0153, "disgust": 5.2803, "fear": 0.1187, "joy": 0.0301, "sadness": 0.0233, "surprise": 0.0099},
        {"month": "2016-06", "anger": 0.0174, "disgust": 3.3191, "fear": 0.1170, "joy": 0.0452, "sadness": 0.0166, "surprise": 0.0106}
      ],
      xkey: 'month',
      ykeys: ['anger','disgust','fear','joy','sadness','surprise'],
      labels: ['Anger','Disgust','Fear','Joy','Sadness','Surprise'],
      xLabelFormat: function (x) {
            var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
            var date = x.getDate();
            var month = x.getMonth();
            var year = x.getFullYear();
            return m_names[month] + " " + year; },
      xLabelAngle: 45,
      lineColors: ['#ed5565','#ffd777','#ac92ec','#ff865c','#68dff0','#48cfad']
    });

    $('.code-example').each(function (index, el) {
      eval($(el).text());
    });

}();
