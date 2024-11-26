class LoginPage {

    login(login,senha){
        
        cy.get(pageObjects.fieldLogin).type(login)
        cy.get(pageObjects.fieldPass).type(senha)
        cy.get(pageObjects.submitButton).click()


    }

}

const pageObjects = {

    fieldLogin: '#username',
    fieldPass: '#password',
    submitButton: 'input[name=login]'
}

export default new LoginPage()