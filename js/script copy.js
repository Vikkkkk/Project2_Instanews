$(document).ready(function() {
  //Selectric
  $(function() {
    $('select').selectric();
  });

  $('#select-section').on('change', function() {
    $('.list').empty();
    $('.load').append(
      '<img class="loadingIcon" src="./Images/assets/ajax-loader.gif">'
    );

    $('header').addClass('mininav');

    let userinput = $(this).val();
    console.log(userinput);

    sayHello(userinput);

    if (userinput == 'sections') {
      // alert('dont select home dumbass!');
      // console.log('hihi');
    }
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

      .always(function() {
        $('.load').remove();
      })

      .done(function(data) {
        const filteredResults = data.results
          .filter(function(value) {
            //     console.log(data.results.multimedia[4]);
            return value.multimedia.length > 1;
          })
          .slice(0, 12);

        // filtering through the data.results Array, and if any object within calle multimedia has more than 0 items in it we
        // return that object. the slice is chained to it, saying we only want 12 results.

        $.each(filteredResults, function(key, value) {
          // console.log();

          $('.list').append(
            ' <li style="background-image: url(' +
              value.multimedia[4].url +
              ');background-size:cover;background-position: 50%;"><a target="_blank" href="' +
              value.url +
              '"><p class="newstext">' +
              value.abstract +
              '</p></a></li>'
          );
        });
      })

      .fail(function() {
        console.log('fail');
      });
  });

  function sayHello(cat) {
    alert(cat);
  }
}); // end doc ready
