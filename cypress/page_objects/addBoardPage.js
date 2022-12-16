class AddBoard {

    get chooseOrganizationCard () {
        return cy.get(".vs-c-list__oragnisation-item").contains("df");
    }

    get okButton () {
        return cy.get("button").contains("OK");
    }

    get addNewBoardButton() {
        return cy.get(".vs-c-organization-boards__item--add-new");
    }

    get boardTitleInput(){
        return cy.get("input").eq(1);
    }

    get nextButton(){
        return cy.get("button").contains("Next");
    }

    get boardTypeRadioButton(){
        return cy.get(".vs-c-radio-check").eq(1);
    }

    get finishButton(){
        return cy.get("button").contains("Finish");
      }

    addBoard(boardName) {
        this.chooseOrganizationCard.click();
        this.okButton.click();
        this.addNewBoardButton.click();
        this.boardTitleInput.type(boardName)
        this.nextButton.click();
        this.boardTypeRadioButton.click();
        this.nextButton.click();
        this.nextButton.click();
        this.nextButton.click();
        this.finishButton.click();
      }
}

export const addBoard = new AddBoard();
