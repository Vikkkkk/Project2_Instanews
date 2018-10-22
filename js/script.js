$(document).ready(function() {
  $('#select-section').on('change', function() {
    $('.list').empty();
    const userinput = $('#select-section option:selected').val();

    let url =
      'https://api.nytimes.com/svc/topstories/v2/' + userinput + '.json';
    url +=
      '?' +
      $.param({
        'api-key': 'e9a1e979e8aa462e9143ac6fbdaa8557'
      });

    $.ajax({
      method: 'GET',
      url: url,
      dataType: 'JSON'
    })
      .done(function(data) {
        // console.log(data);
        // console.log(data.results);

        //loop through data.results
        $.each(data.results, function(key, value) {
          $('.list').append(
            '<li><img src=' +
              value.multimedia[0].url +
              '>' +
              '<a href=' +
              value.url +
              '>' +
              value.title +
              '</a></li>'
          );
        });
      })

      .fail(function() {
        console.log('fail');
      });
  });
});
