# features/login.feature

Feature: Login feature
  As a user
  I want to see cars information in a list

  Scenario Outline: Authentication  success
    Given I am on the main page
    When I write "Lore" in the search field
    Then I should see <model> model <brand> brand
    # And I should not see <model> model  <brand> brand

  Examples:
  | model | brand  | no-present-model | no-present-brand |
  | Lorem | Fhourd | Ipsum            | Banz             |
  | Ipsum | Banz   | Lorem            | Fhourd           |
