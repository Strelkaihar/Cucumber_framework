@KKK
Feature: Wiki search functionality
    @wiki
    Scenario: Validate wiki search
        Given user navigates to "https://www.wikipedia.org/"
        When user search for "<Input>" on Wikipedia
        Then user should see "<Input>" in the title
        Then user should see "<Input>" in the URL
        Then user should see "<Input>" in the first heading

        Examples: 
            | Input         | 
            | Elon Musk      |
            | Barack Obama   |
            | Jeff Bezos     | 
    
    Scenario: Validate Wikipedia main languages
        Given user navigates to "https://www.wikipedia.org/"
        Then user should see below languages around the logo
            | English | Русский| Español | 日本語 | Deutsch | Français | Italiano | 中文 | العربية | Português |