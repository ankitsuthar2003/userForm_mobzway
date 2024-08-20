
  
// function saveUser() {
//   const user = {
//       firstName: $('#firstName').val(),
//       lastName: $('#lastName').val(),
//       mobileNo: $('#mobileNo').val(),
//       email: $('#email').val(),  // Use `emailId` to match your schema
//       address: {
//           street: $('#street').val(),
//           city: $('#city').val(),
//           state: $('#state').val(),
//           country: $('#country').val()
//       },
//       loginId: $('#loginId').val(),
//       password: $('#password').val()
//   };

//   $.ajax({
//       url: 'http://localhost:4000/api/users',
//       type: 'POST',
//       contentType: 'application/json',
//       data: JSON.stringify(user),
//       success: function(response) {
//           alert('User saved successfully');
//           // Clear the form
//           $('form')[0].reset();
//           // Redirect to the user display page
//           window.location.href = 'display-users.html';
//          // getUsers();
//       },
//       error: function(jqXHR) {
//           const errorResponse = jqXHR.responseJSON || {};
//           let errorMessage = "Error saving user:\n";
//           if (errorResponse.errors) {
//               for (const key in errorResponse.errors) {
//                   if (errorResponse.errors.hasOwnProperty(key)) {
//                       errorMessage += `${errorResponse.errors[key].message}\n`;
//                   }
//               }
//           } else {
//               errorMessage += errorResponse.message || 'Unknown error';
//           }
//           alert(errorMessage);
//       }
//   });
// }

//   // function getUsers() {
//   //   $.ajax({
//   //     url: 'http://localhost:4000/api/users',
//   //     type: 'GET',
//   //     success: function(users) {
//   //       const usersDiv = $('#users');
//   //       usersDiv.empty();
//   //       users.forEach(user => {
//   //         usersDiv.append(`<p>${user.firstName} ${user.lastName}</p>`);
//   //       });
//   //     },
//   //     error: function(error) {
//   //       alert('Error fetching users: ' + error.responseJSON.error);
//   //     }
//   //   });
//   // }
  
//   // $(document).ready(function() {
//   //   getUsers();
//   // });
// const baseURL = window.location.origin.includes('localhost')
//   ? 'http://localhost:4000'
//   : window.location.origin;

// function saveUser() {
//   const user = {
//       firstName: $('#firstName').val(),
//       lastName: $('#lastName').val(),
//       mobileNo: $('#mobileNo').val(),
//       email: $('#email').val(),
//       address: {
//           street: $('#street').val(),
//           city: $('#city').val(),
//           state: $('#state').val(),
//           country: $('#country').val()
//       },
//       loginId: $('#loginId').val(),
//       password: $('#password').val()
//   };

//   $.ajax({
//       url: `${baseURL}/api/users`,
//       type: 'POST',
//       contentType: 'application/json',
//       data: JSON.stringify(user),
//       success: function(response) {
//           alert('User saved successfully');
//           // Clear the form
//           $('form')[0].reset();
//           // Redirect to the user display page
//           window.location.href = 'display-users.html';
//       },
//       error: function(jqXHR) {
//           const errorResponse = jqXHR.responseJSON || {};
//           let errorMessage = "Error saving user:\n";
//           if (errorResponse.errors) {
//               for (const key in errorResponse.errors) {
//                   if (errorResponse.errors.hasOwnProperty(key)) {
//                       errorMessage += `${errorResponse.errors[key].message}\n`;
//                   }
//               }
//           } else {
//               errorMessage += errorResponse.message || 'Unknown error';
//           }
//           alert(errorMessage);
//       }
//   });
// }




const baseURL = window.location.origin.includes('localhost')
   ? 'http://localhost:4000'
  : window.location.origin;

function saveUser() {
    $('.error-message').text('');
    const user = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        mobileNo: $('#mobileNo').val(),
        email: $('#email').val(),
        address: {
            street: $('#street').val(),
            city: $('#city').val(),
            state: $('#state').val(),
            country: $('#country').val()
        },
        loginId: $('#loginId').val(),
        password: $('#password').val()
    };

    $.ajax({
       url: `${baseURL}/api/users`,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(user),
        success: function(response) {
            // Clear the form and error messages
            $('form')[0].reset();
            $('.error-message').text('');
            alert('User saved successfully');
            window.location.href = 'display-users.html';
        },
        error: function(jqXHR) {
            const errorResponse = jqXHR.responseJSON || {};
            if (errorResponse.errors) {
                // Clear previous error messages
                $('.error-message').text('');
                // Display errors under the corresponding fields
                for (const key in errorResponse.errors) {
                    if (errorResponse.errors.hasOwnProperty(key)) {
                        $(`#${key}Error`).text(errorResponse.errors[key].message);
                    }
                }
            } else {
                alert(errorResponse.message || 'Unknown error');
            }
        }
    });
}
