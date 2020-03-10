Feature: Login

  Background:
    Given User is on home page

  @login
  Scenario Outline: User should not able to login with invalid credential.

    When I enter invalid username "<Username>" or-and Invalid password "<Password>"
    Then I should able to see error message "<expected message>"

    Examples:
      | Username | Password | expected message         |
      | Nidhi    |          | Password cannot be empty |
      | Nidhi    | Shah     | Invalid credentials      |
      |          | Shah     | Username cannot be empty |
      |          |          | Username cannot be empty |
      | Admin    |          | Password cannot be empty |
      |          | admin123 | Username cannot be empty |
      | Admin    | Shah     | Invalid credentials      |
      | Nidhi    | admin123 | Invalid credentials      |



