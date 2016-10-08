var Script = function () {

    //morris chart

    $(function () {

      Morris.Line({
        element: 'date-graph',
        data: [
          {"month": "2016-01-18", "tweets": 9493},
          {"month": "2016-01-19", "tweets": 2860},
          {"month": "2016-01-20", "tweets": 4932},
          {"month": "2016-01-21", "tweets": 2568},
          {"month": "2016-01-22", "tweets": 459},
          {"month": "2016-01-23", "tweets": 2163},
          {"month": "2016-01-24", "tweets": 12750},
          {"month": "2016-01-25", "tweets": 2368},
          {"month": "2016-01-26", "tweets": 9168},
          {"month": "2016-01-27", "tweets": 3961},
          {"month": "2016-01-28", "tweets": 468},
          {"month": "2016-01-29", "tweets": 6396},
          {"month": "2016-01-30", "tweets": 450},
          {"month": "2016-01-31", "tweets": 5231},
          {"month": "2016-02-01", "tweets": 6266},
          {"month": "2016-02-02", "tweets": 657},
          {"month": "2016-02-03", "tweets": 1520},
          {"month": "2016-02-04", "tweets": 1309},
          {"month": "2016-02-05", "tweets": 1046},
          {"month": "2016-02-06", "tweets": 953},
          {"month": "2016-02-07", "tweets": 847},
          {"month": "2016-02-08", "tweets": 1376},
          {"month": "2016-02-09", "tweets": 255},
          {"month": "2016-02-10", "tweets": 1061},
          {"month": "2016-02-11", "tweets": 1266},
          {"month": "2016-02-12", "tweets": 1180},
          {"month": "2016-02-13", "tweets": 1082},
          {"month": "2016-02-14", "tweets": 1081},
          {"month": "2016-02-15", "tweets": 945},
          {"month": "2016-02-16", "tweets": 1018},
          {"month": "2016-02-17", "tweets": 1041},
          {"month": "2016-02-18", "tweets": 1718},
          {"month": "2016-02-19", "tweets": 1339},
          {"month": "2016-02-20", "tweets": 1394},
          {"month": "2016-02-22", "tweets": 1160},
          {"month": "2016-02-22", "tweets": 177},
          {"month": "2016-02-23", "tweets": 2039},
          {"month": "2016-02-24", "tweets": 2194},
          {"month": "2016-02-25", "tweets": 3869},
          {"month": "2016-02-26", "tweets": 1957},
          {"month": "2016-02-27", "tweets": 1032},
          {"month": "2016-02-28", "tweets": 81}
        ],
        xkey: 'month',
        ykeys: ['tweets'],  //,'sentiment','sascore'
        labels: ['Tweets'], //,'Main Sentiment','S.A. Score'
        xLabelFormat: function (x) {
              var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
              var date = x.getDate();
              var month = x.getMonth();
              var year = x.getFullYear();
              return date + " " + m_names[month] + " " + year; },
        xLabelAngle: 45,
        lineColors: ['#4ECDC4']
      });

      Morris.Bar({
        element: 'sentiment-graph',
        data: [
          {"month": "2016-01", "anger": 0.0213, "disgust": 0.0015, "fear": 0.0352, "joy": 0.0396, "sadness": 0.0148, "surprise": 0.0131},
          {"month": "2016-02", "anger": 0.0182, "disgust": 7.9873, "fear": 0.0369, "joy": 0.0406, "sadness": 0.0123, "surprise": 0.0111}
        ],
        xkey: 'month',
        ykeys: ['anger','disgust','fear','joy','sadness','surprise'],
        labels: ['Anger','Disgust','Fear','Joy','Sadness','Surprise'],
        barColors: ['#ed5565','#ffd777','#ac92ec','#ff865c','#68dff0','#48cfad']
      });

      $('.code-example').each(function (index, el) {
        eval($(el).text());
      });
    });

}();
