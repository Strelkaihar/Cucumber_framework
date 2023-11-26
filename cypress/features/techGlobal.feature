@Regression
Feature: Interaction with the TechGlobal Training Frontend

    @HtmlElements
    Scenario: Validate HTML Elements card, Register and Sign In Buttons
        Given user navigates to 'https://techglobal-training.com/frontend'
        When user click on the 'Html Elements' card
        Then user should see the 'Html Elements' page heading
        Then the URL should contain 'elements'
        When user click on the 'Register' button
        Then the text under it should be 'You clicked on “Register”'
        When user click on the 'Sign in' button
        Then the text under it should be 'You clicked on “Sign in”'

    @Smoke
    Scenario: Validate HTML Elements card, Interact with text inputs - Choose options from dropdown menus
        Given user navigates to 'https://techglobal-training.com/frontend'
        When user click on the 'Html Elements' card
        Then user should see the 'Html Elements' page heading
        Then the URL should contain 'elements'
        When user select "Apple" from the first dropdown menu
        And user select "Microsoft" from the second dropdown menu
        Then "Apple" should be the selected option in the first dropdown
        And "Microsoft" should be the selected option in the second dropdown

    @Input
    Scenario: Validate HTML Elements card, Interact with text inputs
        Given user navigates to 'https://techglobal-training.com/frontend'
        When user click on the 'Html Elements' card
        Then user should see the 'Html Elements' page heading
        Then the URL should contain 'elements'
        When user enter "test input" into the first text input field
        And user enter "another test input" into the second text input field
        Then the first text input field should contain "test input"
        And the second text input field should contain "another test input"

    @HtmmlElements @Smoke
    Scenario: Validate HTML Elements card, Toggle checkboxes and verify the state
        Given user navigates to 'https://techglobal-training.com/frontend'
        When user click on the 'Html Elements' card
        Then user should see the 'Html Elements' page heading
        Then the URL should contain 'elements'
        When user select the "Microsoft" checkbox
        And user deselect the "Microsoft" checkbox
        Then the "Microsoft" checkbox should not be checked
        When user select the "Apple" and "Tesla" checkboxes
        Then both "Apple" and "Tesla" checkboxes should be checked
        And the "Microsoft" checkbox remains unchecked

    Scenario: Validate dynamic tables pop-up window
        Given user navigates to 'https://techglobal-training.com/frontend'
        When user click on the 'Project - Dynamic Tables' card
        Then user should see the 'Project - Dynamic Tables' page heading
        When user click on the 'ADD PRODUCT' button
        Then user should see Add New Product pop-up
        When user click on the 'CLOSE' button
        Then user should not see Add New Product pop-up

    Scenario: Validate Login Form
        Given user navigates to 'https://techglobal-training.com/frontend'
        When user click on the 'Project - Login Function' card
        Then user should see the "Project - Login Function" page heading
        When user enter username as "<username>" and password as "<password>"
        And user click Login Button
        Then user should see a "<message>" message

        Examples:
            | username | password | message |
            | johndoe    | 123456   | Invalid Username entered! |
            | tomsmith   | 12345    | Invalid Username entered! |
            | TechGlobal | Test1234 | You are logged in         |
