Feature: Searching on web site

  @Demo
  Scenario: Searching a word on web site
    Given I open "http://www.enespekkaya.com" the website
    When Searching "testing" that word
    Then Logo is exist
