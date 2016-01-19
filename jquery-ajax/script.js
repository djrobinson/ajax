
$('#call').on('click', function(){

  var title = $('#title').val().split(' ').join('+');
  var plot = $('#plot').val();
  var responseType = $('#id').val();

  $.ajax({
    url: 'https://www.omdbapi.com/?t=' + title +'&y=&plot=' + plot + '&r=' + responseType,
    method: "GET",
    success: function(data) {
      console.log(data);
    }
  });
});

// another way to call
// var url = ...url info

// $.get(url, funciton(data){
//   console.log(data)
// })