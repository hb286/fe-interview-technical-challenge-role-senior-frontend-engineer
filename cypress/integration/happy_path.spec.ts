/// <reference types="cypress" />

import {POLICYHOLDERS_API_URL} from "../../src/async/policyholders";

describe('happy path', () => {
  it('runs happy path successfully', () => {
    cy.visit('/');
    cy.getTestEl('table_link').should('be.visible');
    cy.getTestEl('you_go_link').should('be.visible');
    cy.getTestEl('policyholders_link').should('be.visible');

    /**
     * TODO: Challenge 10 - Update this test
     * - Click the Policyholders sidebar link
     * - Assert that a network request is made
     * - Assert that data from the network is displayed
     */
    cy.server();
    cy.route('GET', POLICYHOLDERS_API_URL).as('getPolicyholders');

    cy.getTestEl('policyholders_link').click();

    cy.wait('@getPolicyholders').should((xhr) => {
      expect(xhr).to.have.property('status', 200);

      const policyholder = xhr.response.body.policyHolders[0];
      cy.contains(policyholder.name).should('be.visible');
      cy.contains(policyholder.age).should('be.visible');
      cy.contains(policyholder.address.line1).should('be.visible');
      if (policyholder.address.line2) {
        cy.contains(policyholder.address.line2).should('be.visible');
      }
      cy.contains(policyholder.address.city).should('be.visible');
      cy.contains(policyholder.address.state).should('be.visible');
      cy.contains(policyholder.address.postalCode).should('be.visible');
      cy.contains(policyholder.phoneNumber).should('be.visible');
    });
  });
});
