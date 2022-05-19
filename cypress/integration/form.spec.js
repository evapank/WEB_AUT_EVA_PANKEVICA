import PracticeFormPage from "../../cypress/pageObjects/practiceFormPage";

context("Practice Form Page", () => {
    context("Practice Form scenarios", () => {
        beforeEach(() => {
            PracticeFormPage.visit();
        });

      it("practice Form page fills", () => {
        cy.fixture("formData").then(data =>{
            PracticeFormPage.firstNameInput.type(data.firstName)
            PracticeFormPage.lastNameInput.type(data.lastName)
            PracticeFormPage.emailInput.type(data.email)
            PracticeFormPage.numberInput.type(data.number)
            PracticeFormPage.femaleRadioButton.click()
            PracticeFormPage.calendar.click()
            PracticeFormPage.birthMonth.click()
            PracticeFormPage.birthYear.click()
            PracticeFormPage.birthDay.click()
            PracticeFormPage.currentAddressInput.type(data.currentAddress)
            PracticeFormPage.subjectsInput.type(data.subjects)
            PracticeFormPage.checkboxItems.contains(data.hobbies).click()
            PracticeFormPage.uploadPicture.click().selectFile('../../cypress/files/picture.jpg')
            PracticeFormPage.selectState.click()
            PracticeFormPage.selectCity.click()

            PracticeFormPage.submitButton.click()

            PracticeFormPage.nameValue.should("be.visible").should("contain",data.firstName).and("contain",data.lastName)
            PracticeFormPage.emailValue.should("be.visible").should("contain",data.email)
            PracticeFormPage.genderValue.should("be.visible").should("contain", "Female")
            PracticeFormPage.numberValue.should("be.visible").should("contain",data.number)
            PracticeFormPage.birthValue.should("be.visible").should("contain", "28 February,1930")
            PracticeFormPage.subjectsValue.should("be.visible").should("contain",data.subjects)
            PracticeFormPage.hobbiesValue.should("be.visible").should("contain",data.hobbies)
            PracticeFormPage.pictureValue.should("be.visible").should("contain","../../cypress/files/picture.jpg")
            PracticeFormPage.addressValue.should("be.visible").should("contain",data.currentAddress)
            PracticeFormPage.stateAndCityValue.should("be.visible").should("contain",data.stateAndCity)
            
      });
      });

      
    });
});


