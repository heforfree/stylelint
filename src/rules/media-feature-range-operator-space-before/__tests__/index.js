import {
  messages,
  ruleName,
} from ".."
import rules from "../../../rules"
import { testRule } from "../../../testUtils"

const rule = rules[ruleName]

testRule(rule, {
  ruleName,
  config: ["always"],

  accept: [ {
    code: "@media (max-width = 600px) {}",
  }, {
    code: "@mEdIa (max-width = 600px) {}",
  }, {
    code: "@MEDIA (max-width = 600px) {}",
  }, {
    code: "@media (max-width >600px) {}",
  }, {
    code: "@media (max-width >= 600px) and (min-width <= 3em) {}",
  } ],

  reject: [ {
    code: "@media (max-width< 600px) {}",
    message: messages.expectedBefore(),
    line: 1,
    column: 17,
  }, {
    code: "@mEdIa (max-width< 600px) {}",
    message: messages.expectedBefore(),
    line: 1,
    column: 17,
  }, {
    code: "@MEDIA (max-width< 600px) {}",
    message: messages.expectedBefore(),
    line: 1,
    column: 17,
  }, {
    code: "@media (max-width  <= 600px) {}",
    message: messages.expectedBefore(),
    line: 1,
    column: 19,
  }, {
    code: "@media (max-width\t= 600px) {}",
    message: messages.expectedBefore(),
    line: 1,
    column: 18,
  }, {
    code: "@media (max-width\n> 600px) {}",
    message: messages.expectedBefore(),
    line: 1,
    column: 18,
  }, {
    code: "@media (max-width\r\n> 600px) {}",
    description: "CRLF",
    message: messages.expectedBefore(),
    line: 1,
    column: 19,
  }, {
    code: "@media (max-width>= 600px) and (min-width < 3em) {}",
    message: messages.expectedBefore(),
    line: 1,
    column: 17,
  }, {
    code: "@media (max-width > 600px) and (min-width= 3em) {}",
    message: messages.expectedBefore(),
    line: 1,
    column: 41,
  } ],
})

testRule(rule, {
  ruleName,
  config: ["never"],

  accept: [ {
    code: "@media (max-width= 600px) {}",
  }, {
    code: "@mEdIa (max-width= 600px) {}",
  }, {
    code: "@MEDIA (max-width= 600px) {}",
  }, {
    code: "@media (max-width>600px) {}",
  }, {
    code: "@media (max-width>= 600px) and (min-width<= 3em) {}",
  } ],

  reject: [ {
    code: "@media (max-width < 600px) {}",
    message: messages.rejectedBefore(),
    line: 1,
    column: 18,
  }, {
    code: "@mEdIa (max-width < 600px) {}",
    message: messages.rejectedBefore(),
    line: 1,
    column: 18,
  }, {
    code: "@MEDIA (max-width < 600px) {}",
    message: messages.rejectedBefore(),
    line: 1,
    column: 18,
  }, {
    code: "@media (max-width  <= 600px) {}",
    message: messages.rejectedBefore(),
    line: 1,
    column: 19,
  }, {
    code: "@media (max-width\t= 600px) {}",
    message: messages.rejectedBefore(),
    line: 1,
    column: 18,
  }, {
    code: "@media (max-width\n> 600px) {}",
    message: messages.rejectedBefore(),
    line: 1,
    column: 18,
  }, {
    code: "@media (max-width\r\n> 600px) {}",
    description: "CRLF",
    message: messages.rejectedBefore(),
    line: 1,
    column: 19,
  }, {
    code: "@media (max-width>= 600px) and (min-width < 3em) {}",
    message: messages.rejectedBefore(),
    line: 1,
    column: 42,
  }, {
    code: "@media (max-width > 600px) and (min-width= 3em) {}",
    message: messages.rejectedBefore(),
    line: 1,
    column: 18,
  } ],
})
