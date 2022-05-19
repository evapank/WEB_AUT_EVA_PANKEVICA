import BasePage from "./basePage";

class PracticeFormPage extends BasePage {

    static get url () {
        return '/automation-practice-form';
    }

    static get firstNameInput () {
        return cy.get('input#firstName');
    }
    static get lastNameInput () {
        return cy.get('input#lastName');
    }
    static get emailInput () {
        return cy.get('input#userEmail');
    }
    static get numberInput () {
        return cy.get('input#userNumber');
    }
    static get femaleRadioButton () {
        return cy.get('input#gender-radio-2');
    }
    static get calendar () {
        return cy.get('input#dateOfBirthInput');
    }
    static get birthMonth () {
        return cy.get("option[value='1']");
    }
    static get birthYear () {
        return cy.get("option[value='1930']");
    }
    static get birthDay () {
        return cy.get(".react-datepicker__day--028[aria-label~='February']");
    }
    static get subjectsInput () {
        return cy.get('.subjects-auto-complete__value-container');
    }
    static get checkboxItems () {
        return cy.get('.custom-checkbox');
    }
    static get uploadPicture () {
        return cy.get('input#uploadPicture');
    }
    static get selectState () {
        return cy.get('#state').select('NCR');
    }
    static get selectCity () {
        return cy.get('#city').select('Delhi');
    }
    static get currentAddressInput () {
        return cy.get('#currentAddress');
    }
//

    static get submitButton () {
        return cy.get('#submit');
    }

//tr:nth-child(2) td:nth-child(2)
    static get nameValue () {
        return cy.get('tr:nth-child(1) td:nth-child(2)');
    }
    static get emailValue () {
        return cy.get('tr:nth-child(2) td:nth-child(2)');
    }
    static get numberValue () {
        return cy.get('tr:nth-child(4) td:nth-child(2)');
    }
    static get genderValue () {
        return cy.get('tr:nth-child(3) td:nth-child(2)');
    }
    static get birthValue () {
        return cy.get('tr:nth-child(5) td:nth-child(2)');
    }
    static get subjectsValue () {
        return cy.get('tr:nth-child(6) td:nth-child(2)');
    }
    static get hobbiesValue () {
        return cy.get('tr:nth-child(7) td:nth-child(2)');
    }
    static get pictureValue () {
        return cy.get('tr:nth-child(8) td:nth-child(2)');
    }
    static get addressValue () {
        return cy.get('tr:nth-child(9) td:nth-child(2)');
    }
    static get stateAndCityValue () {
        return cy.get('tr:nth-child(10) td:nth-child(2)');
    }
}
export default PracticeFormPage;
