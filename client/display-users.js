function getUsers() {
    $.ajax({
        url: 'http://localhost:4000/api/users',
        type: 'GET',
        success: function(users) {
            const usersTable = $('#usersTable');
            usersTable.empty();

            // Create the table header
            usersTable.append(`
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Login ID</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            `);

            const tableBody = usersTable.find('tbody');

            // Populate the table with user data
            users.forEach(user => {
                tableBody.append(`
                    <tr>
                        <td>${user.firstName}</td>
                        <td>${user.lastName}</td>
                        <td>${user.email}</td>
                        <td>${user.mobileNo}</td>
                        <td>${user.address.street}</td>
                        <td>${user.address.city}</td>
                        <td>${user.address.state}</td>
                        <td>${user.address.country}</td>
                        <td>${user.loginId}</td>
                    </tr>
                `);
            });
        },
        error: function(error) {
            alert('Error fetching users: ' + error.responseJSON.error);
        }
    });
}

$(document).ready(function() {
    getUsers();
});
