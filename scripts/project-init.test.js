const project_init = require("./project-init")
// @ponicode
describe("project_init.scripts", () => {
    test("0", () => {
        let callFunction = () => {
            project_init.scripts("callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            project_init.scripts(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
