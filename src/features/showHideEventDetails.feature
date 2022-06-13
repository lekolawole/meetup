Feature: Specify Number of events

  Scenario: An event element is collapsed by default.
    Given user is on the main page
    When an event is displayed
    Then the event details are collapsed

  Scenario: User can expand an event to see its details.
    Given events list (suggestions) are displayed
    When the user clicks an event
    Then the event details will be displayed

  Scenario: User can collapse an event to hide its details.
    Given the event details are displayed
    When the user clicks Details button
    Then event details willbe hidden