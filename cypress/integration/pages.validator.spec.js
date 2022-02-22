import { logHelper } from "../support/loghelper.js";

const pagesToEvaluate = Cypress.env('pages')

describe('Accessibility evaluation of web pages', () => {

  pagesToEvaluate.forEach((page) => {

    it('Evaluates accessibility for the eating page', () => {

      cy.visit(page);
      cy.wait(3000);

      cy.injectAxe();

      const logFormater = logHelper.logFormatter

      const wcagVersions = { runOnly: { values: ['wcag2a', 'wcag2aa', 'wcag2aaa'] } }

      cy.checkA11y(null, wcagVersions, logFormater);

    })

  });
})
