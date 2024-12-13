$(document).ready(function() {
  $('#registrationForm').on('submit', function(event) {
      event.preventDefault();  // Prevent the default form submission

      // Get form data
      var formData = $(this).serialize();

      // Send form data to PHP for processing
      $.ajax({
          type: "POST",
          url: "submit_form.php",
          data: formData,
          success: function(response) {
              // Display the response in the result div
              $('#formResult').html(response).show();
          }
      });
  });
});
