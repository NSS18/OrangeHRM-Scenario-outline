$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Resources/Features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User should not able to login with invalid credential.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I enter invalid username \"\u003cUsername\u003e\" or-and Invalid password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should able to see error message \"\u003cexpected message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "expected message"
      ]
    },
    {
      "cells": [
        "Nidhi",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "Nidhi",
        "Shah",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "",
        "Shah",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "Admin",
        "Shah",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "Nidhi",
        "admin123",
        "Invalid credentials"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not able to login with invalid credential.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I enter invalid username \"Nidhi\" or-and Invalid password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.i_enter_invalid_username_or_and_Invalid_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should able to see error message \"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.i_should_able_to_see_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not able to login with invalid credential.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I enter invalid username \"Nidhi\" or-and Invalid password \"Shah\"",
  "keyword": "When "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.i_enter_invalid_username_or_and_Invalid_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should able to see error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.i_should_able_to_see_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not able to login with invalid credential.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I enter invalid username \"\" or-and Invalid password \"Shah\"",
  "keyword": "When "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.i_enter_invalid_username_or_and_Invalid_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should able to see error message \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.i_should_able_to_see_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not able to login with invalid credential.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I enter invalid username \"\" or-and Invalid password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.i_enter_invalid_username_or_and_Invalid_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should able to see error message \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.i_should_able_to_see_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not able to login with invalid credential.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I enter invalid username \"Admin\" or-and Invalid password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.i_enter_invalid_username_or_and_Invalid_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should able to see error message \"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.i_should_able_to_see_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not able to login with invalid credential.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I enter invalid username \"\" or-and Invalid password \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.i_enter_invalid_username_or_and_Invalid_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should able to see error message \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.i_should_able_to_see_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not able to login with invalid credential.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I enter invalid username \"Admin\" or-and Invalid password \"Shah\"",
  "keyword": "When "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.i_enter_invalid_username_or_and_Invalid_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should able to see error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.i_should_able_to_see_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not able to login with invalid credential.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I enter invalid username \"Nidhi\" or-and Invalid password \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.i_enter_invalid_username_or_and_Invalid_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should able to see error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.OrangeHRMScnarioOtline.MyStepdefs.i_should_able_to_see_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});