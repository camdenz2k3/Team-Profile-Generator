const Employee = require("../lib/Employee");

describe("Employee", () => {
    it('Has the correct name of employee', () => {
        const name = "billy";
        const id = 1;
        const email = 'billy@gmail.com'

        const employee = new Employee(name, id, email)
        const employeeName = employee.getName();

        expect(employeeName).toBe(name)
    })
    it('Has the correct ID of the employee', () => {
        const name = "billy";
        const id = 1;
        const email = 'billy@gmail.com'

        const employee = new Employee(name, id, email)
        const employeeID = employee.getId();

        expect(employeeID).toBe(id)
    })
    it('Has the correct employee email', () => {
        const name = "billy";
        const id = 1;
        const email = 'billy@gmail.com'

        const employee = new Employee(name, id, email)
        const employeeEmail = employee.getEmail();

        expect(employeeEmail).toBe(email)
    })
    it('Has the correct role', () => {
        const role = "Employee"

        const name = "billy";
        const id = 1;
        const email = 'billy@gmail.com'

        const employee = new Employee(name, id, email)
        const employeeRole = employee.getRole();

        expect(employeeRole).toBe(role)
    })
})