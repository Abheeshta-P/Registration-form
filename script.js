$(document).ready(function() {
  $('#registrationForm').on('submit', function(event) {
      event.preventDefault();  // Prevent the default form submission

      // Get form data
      var formData = $(this).serialize();

      // Mocking the server response (simulating the PHP process)
      var mockResponse = function() {
          var name = $("#name").val();
          var email = $("#email").val();
          var phone = $("#phone").val();
          var address = $("#address").val();

          // Simulating form validation and success
          if (!name || !email || !phone || !address) {
              return "<p style='color: red;'>All fields are required!</p>";
          } else {
              return "<h3>Registration Successful</h3>" +
                     "<p><strong>Name:</strong> " + name + "</p>" +
                     "<p><strong>Email:</strong> " + email + "</p>" +
                     "<p><strong>Phone:</strong> " + phone + "</p>" +
                     "<p><strong>Address:</strong> " + address + "</p>";
          }
      };

      // Simulate delay as if the data is being processed on the server
      setTimeout(function() {
          var response = mockResponse();
          $('#formResult').html(response).show();
      }, 1000); // Mock delay of 1 second (simulating server processing)
  });
});

  // // Send form data to PHP for processing
  // $.ajax({
  //     type: "POST",
  //     url: "submit_form.php",
  //     data: formData,
  //     success: function(response) {
  //         // Display the response in the result div
  //         $('#formResult').html(response).show();
  //     }
  // });