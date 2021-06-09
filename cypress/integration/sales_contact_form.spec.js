describe("Sales Contact Form - Email Field", () => {
  // Navigate to https://award.co/demo and assert that the url contains '/demo'
  it("should navigate to the contact form when 'Talk to Sales' link is clicked", () => {
    cy.visit("https://award.co");
    cy.get(".demo").click();
    cy.url().should("include", "/demo");
  });

  // Type a valid email address into the 'Work Email' field and assert that the value matches what was inputted
  it("should display the values that were entered into the 'Work Email' field", () => {
    cy.get(".hs-email .hs-input")
      .clear()
      .type("example1@gmail.com")
      .blur()
      .should("have.value", "example1@gmail.com");
  });

  // Blur the 'Work Email' field and assert that no error message appears
  it("should not display an error message when a valid email address is entered into the 'Work Email' field", () => {
    cy.get(".hs-email .hs-input")
      .focus()
      .blur()
      .should("not.have.class", "error")
      .and("not.have.class", "invalid");
  });

  // Focus then blur the 'Work Email' field and assert that 'Required Field' error message is displayed
  it("should display the 'required field' error message when the 'Work Email' field is left empty", () => {
    cy.get(".hs-email .hs-input").clear().focus().blur();

    cy.get(".hs-email .hs-error-msg").should(
      "have.text",
      "Please complete this required field."
    );
  });

  // Type an invalid email address (example@example.com) into the 'Work Email' field and assert that the 'Invalid Email' error message is displayed
  it("should display the 'invalid email' error message when an invalid email address is entered into the 'Work Email' field", () => {
    cy.get(".hs-email .hs-input").clear().type("example@example.com").blur();

    cy.get(".hs-email .hs-error-msg").should(
      "have.text",
      "Please enter a valid email address."
    );
  });

  // Type a mis-formatted email address (example@.com) into the 'Work Email' field and assert that the 'Incorrect Formatting' error message is displayed
  it("should display the 'incorrect format' error message when an email address with an incorrect format is entered into the 'Work Email' field", () => {
    cy.get(".hs-email .hs-input").clear().type("example@.com").blur();

    cy.get(".hs-email .hs-error-msg").should(
      "have.text",
      "Email must be formatted correctly."
    );
  });
});
