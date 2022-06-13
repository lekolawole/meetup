Feature: Specify Number of events

  Scenario: When user hasn't specified a number, 32 is the default number.
    Given user hasn’t specified a number
    When the user opens the app
    Then the user should see the list of 32 upcoming events

  Scenario: User can change the number of events they want to see
    Given the main page is open
    When the user changes the number
    Then the user should receive a list of events that match what they’ve input