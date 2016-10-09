var Script = function () {

    //morris chart

    $(function () {

      Morris.Line({
        element: 'date-graph',
        data: [
          {"month": "2015-08", "tweets": 3},
          {"month": "2015-09", "tweets": 48},
          {"month": "2015-10", "tweets": 77},
          {"month": "2015-11", "tweets": 131},
          {"month": "2015-12", "tweets": 275},
          {"month": "2016-01", "tweets": 259},
          {"month": "2016-02", "tweets": 158},
          {"month": "2016-03", "tweets": 126},
          {"month": "2016-04", "tweets": 60},
          {"month": "2016-05", "tweets": 55},
          {"month": "2016-06", "tweets": 2}
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
          {"month": "2015-08", "anger": 0.0093, "disgust": 0.0, "fear": 0.0071, "joy": 0.0, "sadness": 0.3339, "surprise": 0.0},
          {"month": "2015-09", "anger": 0.0452, "disgust": 0.0, "fear": 0.0695, "joy": 0.0107, "sadness": 0.1267, "surprise": 0.0034},
          {"month": "2015-10", "anger": 0.0396, "disgust": 0.0012, "fear": 0.1051, "joy": 0.0116, "sadness": 0.1156, "surprise": 0.0313},
          {"month": "2015-11", "anger": 0.0438, "disgust": 0.0058, "fear": 0.0842, "joy": 0.0356, "sadness": 0.0732, "surprise": 0.0172},
          {"month": "2015-12", "anger": 0.0340, "disgust": 0.0, "fear": 0.0948, "joy": 0.0239, "sadness": 0.0639, "surprise": 0.0151},
          {"month": "2016-01", "anger": 0.0562, "disgust": 0.0027, "fear": 0.0655, "joy": 0.0310, "sadness": 0.0316, "surprise": 0.0248},
          {"month": "2016-02", "anger": 0.0496, "disgust": 0.0018, "fear": 0.0867, "joy": 0.0391, "sadness": 0.0305, "surprise": 0.0144},
          {"month": "2016-03", "anger": 0.0392, "disgust": 0.0022, "fear": 0.0877, "joy": 0.0222, "sadness": 0.0350, "surprise": 0.0102},
          {"month": "2016-04", "anger": 0.0567, "disgust": 0.0015, "fear": 0.0662, "joy": 0.0685, "sadness": 0.0505, "surprise": 0.0103},
          {"month": "2016-05", "anger": 0.0654, "disgust": 0.0015, "fear": 0.0788, "joy": 0.0241, "sadness": 0.0258, "surprise": 0.0346},
          {"month": "2016-06", "anger": 0.439, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0}
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
