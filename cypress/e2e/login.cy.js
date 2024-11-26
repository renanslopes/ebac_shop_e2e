import loginPage from '../support/page_objects/loginPage';

describe('Funcionalidade Login', () => {

    context('Em caso de login com sucesso', () => {

        beforeEach('Acessando o site', () => {

            cy.visit('minha-conta/')

        })

        it('Login com credenciais corretas.', () => {

            loginPage.login('teste@mail.com','teste')
            
        });

    });
})

// })