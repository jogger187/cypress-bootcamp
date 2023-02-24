[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

## Installation

```yarn
yarn install
```

## Run Cypress With Utility

```yarn
yarn open
```

## Run Cypress With CLI

```yarn
yarn cy:run --spec "cypress/e2e/spec.cy.ts"
```

When the test process is over, you will get test record.

![spec.cy.ts.gif](./video-record/spec.cy.ts.gif)

### Test File Example

Set the test logic on `e2e/spec.cy.ts`

```jsx
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.instagram.com/accounts/login/?source=desktop_nav&next=https%3A%2F%2Fwww.instagram.com%2Flogin%2F%3F__coig_login%3D1')
    cy.get(':nth-child(1) > .x1i10hfl > ._acan > ._aacl').click()
    cy.get(':nth-child(1) > .x1npaq5j > ._aa48 > ._aa4b').type('testman@gmail.com').should('have.value', 'testman@gmail.com')
    cy.get(':nth-child(2) > .x1npaq5j > ._aa48 > ._aa4b').type('testman123').should('have.value', 'testman123')
    cy.get('._abc2 > :nth-child(3)').click()
  })
})
```

## Author

[Jagger Hsu](https://github.com/jogger187)