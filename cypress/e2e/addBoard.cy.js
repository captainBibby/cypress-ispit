/// <reference types="Cypress"/>

import { addBoard } from '../page_objects/addBoardPage'
import { faker } from '@faker-js/faker';

let boardName = faker.lorem.words(1);

describe('add new board to organization test', () => {
    
    before("login test", () => {
        cy.loginViaBackend();
        cy.visit("/my-organizations");
        cy.url().should("not.include", "login");
    })

    it ("create a new board in organization", () => {
        
        cy.intercept(
            "POST",
            "https://cypress-api.vivifyscrum-stage.com/api/v2/boards")
            .as("successfullyCreatedBoard");

        addBoard.addBoard(boardName);

        cy.wait("@successfullyCreatedBoard").then ((interception) => {
            cy.log(JSON.stringify(interception.response.body));
            expect(interception.response.statusCode).eq(201);
            expect(interception.response.body.name).eq(boardName);
            expect(interception.response.body.organization_id).eq("23696");
            expect(interception.response.body.type).eq("kanban_board");
            expect(interception.response.body.owner_id).eq(2809);
        })

        cy.url().should("include", "boards");
    });
});
