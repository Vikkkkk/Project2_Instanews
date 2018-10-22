$(document).ready(function() {
  $('#select-section').on('change', function() {
    // event.preventDefault();

    let url = 'https://api.nytimes.com/svc/topstories/v2/home.json';
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
          $('.list').append('<li>' + value.title + '</li>');
        });
      })

      .fail(function() {
        console.log('fail');
      });
  });
});
