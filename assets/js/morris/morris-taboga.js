var Script = function () {

    //morris chart

    $(function () {

      Morris.Line({
        element: 'date-graph',
        data: [
          {"month": "2013-11", "tweets": 165},
          {"month": "2013-12", "tweets": 13},
          {"month": "2014-01", "tweets": 12},
          {"month": "2014-02", "tweets": 30},
          {"month": "2014-03", "tweets": 28},
          {"month": "2014-04", "tweets": 11},
          {"month": "2014-05", "tweets": 1},
          {"month": "2014-06", "tweets": 2},
          {"month": "2014-07", "tweets": 0},
          {"month": "2014-08", "tweets": 9},
          {"month": "2014-09", "tweets": 2},
          {"month": "2014-10", "tweets": 10},
          {"month": "2014-11", "tweets": 3},
          {"month": "2014-12", "tweets": 0},
          {"month": "2015-01", "tweets": 0},
          {"month": "2015-02", "tweets": 1},
          {"month": "2015-03", "tweets": 0},
          {"month": "2015-04", "tweets": 0},
          {"month": "2015-05", "tweets": 0},
          {"month": "2015-06", "tweets": 1},
          {"month": "2015-07", "tweets": 0},
          {"month": "2015-08", "tweets": 0},
          {"month": "2015-09", "tweets": 1},
          {"month": "2015-10", "tweets": 0},
          {"month": "2015-11", "tweets": 1},
          {"month": "2015-12", "tweets": 0},
          {"month": "2016-01", "tweets": 2},
          {"month": "2016-02", "tweets": 2},
          {"month": "2016-03", "tweets": 4},
          {"month": "2016-04", "tweets": 1},
          {"month": "2016-05", "tweets": 2},
          {"month": "2016-06", "tweets": 0},
          {"month": "2016-07", "tweets": 1},
          {"month": "2016-08", "tweets": 0},
          {"month": "2016-09", "tweets": 0},
          {"month": "2016-10", "tweets": 2},
          {"month": "2016-11", "tweets": 8},
          {"month": "2016-12", "tweets": 20},
          {"month": "2017-01", "tweets": 6}
        ],
        xkey: 'month',
        ykeys: ['tweets'],  //,'sentiment','sascore'
        labels: ['Tweets'], //,'Main Sentiment','S.A. Score'
        xLabelFormat: function (x) {
              var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
              var date = x.getDate();
              var month = x.getMonth();
              var year = x.getFullYear();
              return m_names[month] + " " + year; },
        xLabelAngle: 45,
        lineColors: ['#4ECDC4']
      });

      Morris.Line({
        element: 'sentiment-graph',
        data: [
          {"month": "2013-11", "anger": 0.0136, "disgust": 0.0, "fear": 0.0376, "joy": 0.0509, "sadness": 0.0087, "surprise": 0.0097},
          {"month": "2013-12", "anger": 0.0, "disgust": 0.0, "fear": 0.0599, "joy": 0.0, "sadness": 0.1350, "surprise": 0.0},
          {"month": "2014-01", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0408, "sadness": 0.0, "surprise": 0.0},
          {"month": "2014-02", "anger": 0.0283, "disgust": 0.0, "fear": 0.0037, "joy": 0.0139, "sadness": 0.0, "surprise": 0.0},
          {"month": "2014-03", "anger": 0.0, "disgust": 0.0, "fear": 0.0209, "joy": 0.012, "sadness": 0.0, "surprise": 0.0},
          {"month": "2014-04", "anger": 0.0274, "disgust": 0.0, "fear": 0.1131, "joy": 0.0225, "sadness": 0.0225, "surprise": 0.0225},
          {"month": "2014-05", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2014-06", "anger": 0.0, "disgust": 0.0, "fear": 0.1175, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2014-07", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2014-08", "anger": 0.0, "disgust": 0.0, "fear": 0.0235, "joy": 0.014, "sadness": 0.0, "surprise": 0.0},
          {"month": "2014-09", "anger": 0.0, "disgust": 0.0, "fear": 0.1175, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2014-10", "anger": 0.0439, "disgust": 0.0, "fear": 0.0598, "joy": 0.0, "sadness": 0.0, "surprise": 0.0243},
          {"month": "2014-11", "anger": 0.0, "disgust": 0.0, "fear": 0.27, "joy": 0.009, "sadness": 0.0503, "surprise": 0.0},
          {"month": "2014-12", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2015-01", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2015-02", "anger": 0.0, "disgust": 0.0, "fear": 0.0265, "joy": 0.0, "sadness": 0.128125, "surprise": 0.0},
          {"month": "2015-03", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2015-04", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2015-05", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2015-06", "anger": 0.0, "disgust": 0.0, "fear": 0.235, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2015-07", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2015-08", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2015-09", "anger": 0.0, "disgust": 0.0, "fear": 0.025, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2015-10", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2015-11", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2015-12", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2016-01", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2016-02", "anger": 0.0, "disgust": 0.0, "fear": 0.019, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2016-03", "anger": 0.0, "disgust": 0.0, "fear": 0.1175, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2016-04", "anger": 0.0, "disgust": 0.0, "fear": 0.0225, "joy": 0.2835, "sadness": 0.0, "surprise": 0.0},
          {"month": "2016-05", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2016-06", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2016-07", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2016-08", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2016-09", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2016-10", "anger": 0.0, "disgust": 0.0, "fear": 0.1175, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2016-11", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.012, "sadness": 0.0, "surprise": 0.0},
          {"month": "2016-12", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0118, "sadness": 0.0, "surprise": 0.0407},
          {"month": "2017-01", "anger": 0.0, "disgust": 0.0, "fear": 0.0335, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
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
    });

}();
