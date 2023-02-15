const generateHTML = (employeesArray) => {
    const empCardArray = []

    mgmtCard = (mgmt) => {
        return `
        <div class="col-12 col-md-6 col-lg-4">
                <div class="card-header bg-primary text-white">
                    <h5 class="card-title">${mgmt.name}</h5>
                    <h6 class="card-subtitle">${mgmt.role}</h6>
                </div>
                <div class="card-body">
                    <p class="card-text">Employee ID: ${mgmt.id}</p>
                    <p>Email: <a href="mailto:${mgmt.email}" class="card-link">${mgmt.email}</a></p>
                    <p class="card-text">Office Number: ${mgmt.officeNumber}</p>
                </div>
        </div>
        `
    }
    engCard = (eng) => {
        return `
        <div class="col-12 col-md-6 col-lg-4">
                <div class="card-header bg-primary text-white">
                    <h5 class="card-title">${eng.name}</h5>
                    <h6 class="card-subtitle">${eng.role}</h6>
                </div>
                <div class="card-body">
                    <p class="card-text">Employee ID: ${eng.id}</p>
                    <p>Email: <a href="mailto:${eng.email}" class="card-link">${eng.email}</a></p>
                    <p>GitHub: <a href="https://github.com/${eng.github}" class="card-link">${eng.github}</a></p>
                </div>
        </div>
        `
    }
    intCard = (int) => {
        return ` 
        <div class="col-12 col-md-6 col-lg-4">
                <div class="card-header bg-primary text-white">
                    <h5 class="card-title">${int.name}</h5>
                    <h6 class="card-subtitle">${int.role}</h6>
                </div>
                <div class="card-body">
                    <p class="card-text">Employee ID: ${int.id}</p>
                    <p>Email: <a href="mailto:${int.name}" class="card-link">${int.email}</a></p>
                    <p class="card-text">School: ${int.school}</p>
                </div>
        </div>
        `
    }

    employeesArray.forEach(function(teamMember) {
        if (teamMember.getRole() === "Manager") {
            empCardArray.push(mgmtCard(teamMember))
        } else if (teamMember.getRole() === "Engineer") {
            empCardArray.push(engCard(teamMember))
        } else if (teamMember.getRole() === "Intern") {
            empCardArray.push(intCard(teamMember))
        }
    })

    return empCardArray.join('')
}

module.exports = (employeesArray) => {
    return `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Engineering Team Profile</title>
</head>
<body>

    <header class="py-5 bg-info text-white text-center mb-5">
        <h1>My Team</h1>
    </header>

    <div class="container">
        <div class="row g-3">
            ${generateHTML(employeesArray)}
        </div>
    </div>
    
</body>
</html>
    `
}