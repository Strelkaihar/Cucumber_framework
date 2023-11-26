@Regression
Feature: Northwestern Test


Scenario: Northwestern Search Bar
    Given user navigates to "https://www.northwestern.edu/"
    Then user should see below navbar items
        | About |Academics   |Admissions |Campus Experience |Research |Giving |
    # Then user should fill the form 
    #     | label     | input     |
    #     | First Name| Bali      |
    #     | Last Name | Rahmani   |
    #     | From      | Albania   |
    #     | Live      | USA       |
    # Then user should key value
    #     | First Name| Bali      |
    #     | Last Name | Rahmani   |
    #     | From      | Albania   |
    #     | Live      | USA       |
    # Then user should handle another tyoe
    #     | label     | input     | Section | 
    #     | First Name| Bali      | Personal |
    #     | Last Name | Rahmani   | Personal |
    #     | From      | Albania   | Personal |
    #     | Live      | USA       | Personal |