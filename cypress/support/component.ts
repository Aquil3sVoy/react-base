/* eslint-disable @typescript-eslint/no-namespace */
import { mount } from 'cypress/react'

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}