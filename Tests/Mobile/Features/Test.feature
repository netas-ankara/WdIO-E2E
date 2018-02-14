Feature: Android Mobile Testing

  Scenario: Aydes Login
    Given Waiting for login page is displayed
    When Enter Username "demo" and password "1234"
    Then Main Page is opened
