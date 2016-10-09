var Script = function () {

    //morris chart

    $(function () {

      Morris.Line({
        element: 'date-graph',
        data: [
          {"month": "2011-02", "tweets": 1},
          {"month": "2011-04", "tweets": 1},
          {"month": "2011-10", "tweets": 1},
          {"month": "2011-12", "tweets": 1},
          {"month": "2012-01", "tweets": 2},
          {"month": "2012-03", "tweets": 4},
          {"month": "2012-10", "tweets": 1},
          {"month": "2012-11", "tweets": 1},
          {"month": "2013-01", "tweets": 1},
          {"month": "2013-02", "tweets": 2},
          {"month": "2013-04", "tweets": 3},
          {"month": "2013-08", "tweets": 2},
          {"month": "2013-09", "tweets": 115},
          {"month": "2013-10", "tweets": 5},
          {"month": "2013-11", "tweets": 1},
          {"month": "2013-12", "tweets": 3},
          {"month": "2014-01", "tweets": 2},
          {"month": "2014-02", "tweets": 2},
          {"month": "2014-03", "tweets": 2},
          {"month": "2014-04", "tweets": 9},
          {"month": "2014-05", "tweets": 2},
          {"month": "2014-06", "tweets": 1},
          {"month": "2014-07", "tweets": 10},
          {"month": "2014-08", "tweets": 4},
          {"month": "2014-09", "tweets": 5},
          {"month": "2014-11", "tweets": 2},
          {"month": "2014-12", "tweets": 4},
          {"month": "2015-04", "tweets": 2},
          {"month": "2015-06", "tweets": 2},
          {"month": "2016-01", "tweets": 2},
          {"month": "2016-02", "tweets": 4},
          {"month": "2016-03", "tweets": 2},
          {"month": "2016-04", "tweets": 4},
          {"month": "2016-05", "tweets": 1}
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
          {"month": "2011-02", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2011-04", "anger": 0.0, "disgust": 0.0, "fear": 0.81, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2011-10", "anger": 0.1106, "disgust": 0.0, "fear": 0.27, "joy": 0.0, "sadness": 0.1106, "surprise": 0.0},
          {"month": "2011-12", "anger": 0.0, "disgust": 0.0, "fear": 0.819, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2012-01", "anger": 0.0, "disgust": 0.0, "fear": 0.5117, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2012-03", "anger": 0.0, "disgust": 0.0, "fear": 0.0735, "joy": 0.0, "sadness": 0.1383, "surprise": 0.0},
          {"month": "2012-10", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2012-11", "anger": 0.0, "disgust": 0.0, "fear": 0.405, "joy": 0.3335, "sadness": 0.0, "surprise": 0.0},
          {"month": "2013-01", "anger": 0.0, "disgust": 0.0, "fear": 0.1463, "joy": 0.0, "sadness": 0.0226, "surprise": 0.0},
          {"month": "2013-02", "anger": 0.1146, "disgust": 0.0, "fear": 0.0, "joy": 0.1146, "sadness": 0.0394, "surprise": 0.0142},
          {"month": "2013-04", "anger": 0.0, "disgust": 0.0, "fear": 0.0086, "joy": 0.0059, "sadness": 0.0, "surprise": 0.0},
          {"month": "2013-08", "anger": 0.1146, "disgust": 0.0, "fear": 0.405, "joy": 0.1146, "sadness": 0.0, "surprise": 0.0870},
          {"month": "2013-09", "anger": 0.0631, "disgust": 0.0, "fear": 0.0517, "joy": 0.0205, "sadness": 0.0258, "surprise": 0.0282},
          {"month": "2013-10", "anger": 0.0085, "disgust": 0.0, "fear": 0.0152, "joy": 0.0, "sadness": 0.0243, "surprise": 0.0},
          {"month": "2013-11", "anger": 0.0, "disgust": 0.1945, "fear": 0.019, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2013-12", "anger": 0.0, "disgust": 0.0, "fear": 0.0224, "joy": 0.0, "sadness": 0.2147, "surprise": 0.0},
          {"month": "2014-01", "anger": 0.0, "disgust": 0.0, "fear": 0.4742, "joy": 0.0, "sadness": 0.0197, "surprise": 0.0},
          {"month": "2014-02", "anger": 0.0704, "disgust": 0.0, "fear": 0.0237, "joy": 0.086, "sadness": 0.0, "surprise": 0.0},
          {"month": "2014-03", "anger": 0.1097, "disgust": 0.0, "fear": 0.019, "joy": 0.0, "sadness": 0.0197, "surprise": 0.0},
          {"month": "2014-04", "anger": 0.0, "disgust": 0.0, "fear": 0.0253, "joy": 0.0, "sadness": 0.0684, "surprise": 0.0},
          {"month": "2014-05", "anger": 0.0089, "disgust": 0.0, "fear": 0.4111, "joy": 0.01, "sadness": 0.0, "surprise": 0.01},
          {"month": "2014-06", "anger": 0.0, "disgust": 0.0, "fear": 0.27, "joy": 0.1018, "sadness": 0.0, "surprise": 0.0},
          {"month": "2014-07", "anger": 0.0292, "disgust": 0.0, "fear": 0.1008, "joy": 0.0, "sadness": 0.0, "surprise": 0.0157},
          {"month": "2014-08", "anger": 0.1238, "disgust": 0.0, "fear": 0.2985, "joy": 0.0, "sadness": 0.0, "surprise": 0.0912},
          {"month": "2014-09", "anger": 0.0439, "disgust": 0.0, "fear": 0.1886, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2014-11", "anger": 0.0135, "disgust": 0.0, "fear": 0.2025, "joy": 0.0117, "sadness": 0.0, "surprise": 0.0},
          {"month": "2014-12", "anger": 0.0, "disgust": 0.0, "fear": 0.0284, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2015-04", "anger": 0.0101, "disgust": 0.0, "fear": 0.0063, "joy": 0.018, "sadness": 0.0101, "surprise": 0.0},
          {"month": "2015-06", "anger": 0.1097, "disgust": 0.0, "fear": 0.0095, "joy": 0.0, "sadness": 0.0, "surprise": 0.0155},
          {"month": "2016-01", "anger": 0.1097, "disgust": 0.0, "fear": 0.0095, "joy": 0.0, "sadness": 0.0, "surprise": 0.256},
          {"month": "2016-02", "anger": 0.0363, "disgust": 0.0, "fear": 0.1143, "joy": 0.0, "sadness": 0.0, "surprise": 0.0028},
          {"month": "2016-03", "anger": 0.0245, "disgust": 0.0, "fear": 0.019, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2016-04", "anger": 0.0081, "disgust": 0.0, "fear": 0.1113, "joy": 0.0, "sadness": 0.0167, "surprise": 0.0},
          {"month": "2016-05", "anger": 0.0272, "disgust": 0.0, "fear": 0.1148, "joy": 0.1667, "sadness": 0.0, "surprise": 0.0}
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
