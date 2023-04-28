$(document).ready(function() {
    $('.message a').click(function(){
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });
  
    $('#register-form').submit(function(e) {
      e.preventDefault();
      var username = $('#register-username').val();
      var password = $('#register-password').val();
      var user_data = {username: username, password: password};
      $.getJSON('../../users.json', function(data) {
        data.push(user_data);
        var json_data = JSON.stringify(data);
      /*  $.ajax({
          url: '../../users.json',
          type: '', // or 'PATCH'
          data: json_data,
          contentType: 'application/json',
          success: function() {
            alert('Registration successful!');
          }
        }); */
      });
    });
  
    $('#login-form').submit(function(e) {
      e.preventDefault();
      var username = $('#login-username').val();
      var password = $('#login-password').val();
      $.getJSON('../../users.json', function(data) {
        var user = data.find(function(user) {
          return user.username == username && user.password == password;
        });
        if (user) {
          alert('Login successful!');
          window.location.href = '../home/home.html';
        } else {
          alert('Invalid username or password');
        }
      });
    });

  });