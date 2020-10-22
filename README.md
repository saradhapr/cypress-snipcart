# cypress-snipcart

# Follow the below steps to download and run the project:

1. Goto https://github.com/saradhapr/cypress-snipcart to view the project
2. Goto Documents on your computer and create a new folder 'Automation-Test'
3. Open your visual studio code and open the terminal and goto folder 'Automation-Test'
4. Type the following on your terminal, 'git clone https://github.com/saradhapr/cypress-snipcart.git' and press enter
5. Type the following on your terminal, 'cd cypress-snipcart/' and press enter
6. Type 'npm install' and press enter
7. Type 'git status' to confirm remote branch and local branch are same
8. Type 'npm run test.open' to open the Cypress test runner which will have below test scripts in the 'Integration Tests folder'

# Integration Tests Scripts:

1. api.js ---------------- Test 1: API Automation
2. scenario-1.spec.js ---- Test 2: UI Automation - Scenario-1
3. scenario-2.spec.js ---- Test 2: UI Automation - Scenario-2

# Test RUN and Report Generation:

1. Type 'npm run test.open' --- Execute the test scripts from test runner. (OR)
2. $(npm bin)/cypress run ----- Execute test run and generate test report in the folder cypress/report/mochawesome-report

# END #
