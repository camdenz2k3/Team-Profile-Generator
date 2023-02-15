const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it('Has the correct name of the engineer', () => {
        const name = "billy";
        const id = 1;
        const email = 'billy@gmail.com'
        const github = 'billy'

        const engineer = new Engineer(name, id, email, github)
        const engineerName = engineer.getName();

        expect(engineerName).toBe(name)
    })
    it('Has the correct ID for the engineer', () => {
        const name = "billy";
        const id = 1;
        const email = 'billy@gmail.com'
        const github = 'billy'

        const engineer = new Engineer(name, id, email, github)
        const engineerID = engineer.getId();

        expect(engineerID).toBe(id)
    })
    it('Has the correct email for the engineer', () => {
        const name = "billy";
        const id = 1;
        const email = 'billy@gmail.com'
        const github = 'billy'

        const engineer = new Engineer(name, id, email, github)
        const engineerEmail = engineer.getEmail();

        expect(engineerEmail).toBe(email)
    })
    it('Has the correct GitHub username for the engineer', () => {
        const name = "billy";
        const id = 1;
        const email = 'billy@gmail.com'
        const github = 'billy'

        const engineer = new Engineer(name, id, email, github)
        const engineerGithub = engineer.getGithub();

        expect(engineerGithub).toBe(github)
    })
    it('Has the correct role', () => {
        const role = "Engineer"

        const name = "billy";
        const id = 1;
        const email = 'billy@gmail.com'
        const github = 'billy'

        const engineer = new Engineer(name, id, email, github)
        const engineerRole = engineer.getRole();

        expect(engineerRole).toBe(role)
    })
})