    // JavaScript code for form validation
    document.getElementById('myForm').addEventListener('submit', function(event){    
      var fieldin = document.getElementById('inputField').value
    // Prevent form from submitting
      let regex = /^[a-zA-Z0-9]*$/;
      if (fieldin === ''){
        alert('Field Required')
        event.preventDefault()
      }
      else if (!regex.test(fieldin)){
        alert('Invalid Format!');
        event.preventDefault()}
      else {
        alert('File Submitted');
      }});

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern
        // Valid input: display confirmation and submit the form

        // Invalid input: display error message