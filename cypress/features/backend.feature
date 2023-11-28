Feature: User Management

  Scenario: Add a new user
    Given I am on the "https://techglobal-training.com/backend" page
      When I fill in the First Name with "Igor"
      And I fill in the Last Name with "Strelka"
      And I fill in the Email with "igor.strelka@example.com"
      And I fill in the Date of Birth with "1999-02-02"
      And I click the ADD button
      Then I should see "Igor Strelka" in the users list



  Scenario: Edit an existing user
    Given I am on the "https://techglobal-training.com/backend" page
    When I click the EDIT button for "Igor Strelka"
    And I change the Email to "igor.s@example.com"
    And I click the UPDATE button
    Then I should see the new email "Igor Strelka" next to "igor.s@example.com"

  Scenario: Delete an existing user
    Given I am on the "https://techglobal-training.com/backend" page
    When I click the DELETE button for "Igor Strelka"
    Then I should not see "Igor Strelka" in the users list

  Scenario: Delete all users
    Given I am on the "https://techglobal-training.com/backend" page
    When I click the DELETE ALL button
    And I confirm the deletion
    Then I should see "Number of active users: 0"