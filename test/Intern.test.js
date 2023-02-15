const Intern = require("../lib/Intern");

describe("Intern", () => {
    it('Has the correct name of the intern', () => {
        const name = "billy";
        const id = 1;
        const email = 'billy@gmail.com'
        const school = 'Billy University'

        const intern = new Intern(name, id, email, school)
        const internName = intern.getName();

        expect(internName).toBe(name)
    })
    it('Has the correct ID for the intern', () => {
        const name = "billy";
        const id = 1;
        const email = 'billy@gmail.com'
        const school = 'Billy University'

        const intern = new Intern(name, id, email, school)
        const internID = intern.getId();

        expect(internID).toBe(id)
    })
    it('Has the correct email for the intern', () => {
        const name = "billy";
        const id = 1;
        const email = 'billy@gmail.com'
        const school = 'Billy University'

        const intern = new Intern(name, id, email, school)
        const internEmail = intern.getEmail();

        expect(internEmail).toBe(email)
    })
    it("Has the correct intern's school", () => {
        const name = "billy";
        const id = 1;
        const email = 'billy@gmail.com'
        const school = 'Billy University'

        const intern = new Intern(name, id, email, school)
        const internSchool = intern.getSchool();

        expect(internSchool).toBe(school)
    })
    it('Has the correct role', () => {
        const role = "Intern"

        const name = "billy";
        const id = 1;
        const email = 'billy@gmail.com'
        const school = 'Billy University'

        const intern = new Intern(name, id, email, school)
        const internRole = intern.getRole();

        expect(internRole).toBe(role)
    })
})