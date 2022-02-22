import './commands'
import 'cypress-axe'

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

Cypress.Server.defaults({
  delay: 500,
  force404: false,
  ignore: (xhr) => {
    // handle custom logic for whitelisting
    return true;
  },
});