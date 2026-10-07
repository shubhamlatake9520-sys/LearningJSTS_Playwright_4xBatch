# RICE-POT Master QA Templates

This file contains the reusable enterprise QA templates.


---

# RICE-POT QA Task Template

## R — Requirement
**Task ID:**  
**Feature / Module:**  
**Business Requirement:**  
**User Story:**  
**Requirement Reference:**  
**Priority:**  
**Risk Level:**  

## I — Inputs / Preconditions
### Environment
- Environment:
- Application URL:
- Browser:
- Browser Version:
- OS:

### Preconditions
1.
2.
3.

### Test Data
| Data | Value / Source | Purpose |
|---|---|---|
| | | |

## C — Conditions / Constraints
### Functional Conditions
-
-

### Technical Constraints
-
-

### Out of Scope
-
-

## E — Expected Result
### Primary Expected Result
-

### Acceptance Criteria
- [ ]
- [ ]
- [ ]

## P — Procedure / Test Flow
### Positive Flow
1.
2.
3.

### Negative Flow
1.
2.
3.

### Edge / Boundary Flow
1.
2.
3.

## O — Output / Evidence
**Status:** Not Run / Pass / Fail / Blocked  
**Actual Result:**  
**Evidence:**  
**Defect ID:**  
**Severity:**  
**Priority:**  

## T — Test Data / Traceability
| Requirement ID | Test Case ID | Scenario | Automation | Status |
|---|---|---|---|---|
| | | | | |

### Completion Checklist
- [ ] Requirement reviewed
- [ ] Preconditions verified
- [ ] Test data prepared
- [ ] Positive scenarios covered
- [ ] Negative scenarios covered
- [ ] Boundary scenarios covered
- [ ] Automation completed
- [ ] Execution completed
- [ ] Evidence captured
- [ ] Defects logged
- [ ] Traceability updated

---

# Enterprise QA Test Plan Template

## 1. Document Control
| Field | Value |
|---|---|
| Project | |
| Module | |
| Release / Sprint | |
| Test Plan ID | |
| Version | |
| Author | |
| Reviewer | |
| Date | |
| Status | |

## 2. Objective
Define the scope, strategy, test approach, environments, data, risks and acceptance criteria.

## 3. Scope
### In Scope
-
-
### Out of Scope
-
-

## 4. Test Strategy
- Functional testing
- Positive and negative testing
- Boundary testing
- Regression testing
- Smoke testing
- End-to-end testing
- UI validation
- Compatibility testing
- Automation testing

## 5. Automation Strategy
- Selenium WebDriver
- Java
- Maven
- TestNG
- Page Object Model
- PageFactory
- XPath-only locators
- Explicit WebDriverWait
- No Thread.sleep
- Runtime credential injection
- Test assertions in test classes

## 6. Environment
| Component | Details |
|---|---|
| Application | |
| Environment | |
| URL | |
| OS | |
| Browser | |
| Browser Version | |

## 7. Entry Criteria
- Build deployed successfully
- Environment available
- Requirements approved
- Test data available
- Dependencies available

## 8. Exit Criteria
- Planned tests executed
- Critical/high defects resolved or accepted
- Regression completed
- Automation completed
- Evidence available
- Test summary approved

## 9. Test Scenarios
| Scenario ID | Scenario | Priority | Type |
|---|---|---|---|
| TS-001 | | High | Functional |
| TS-002 | | High | Negative |
| TS-003 | | Medium | Boundary |

## 10. Risks and Mitigation
| Risk | Impact | Mitigation |
|---|---|---|
| Environment unavailable | High | |
| Test data unavailable | High | |
| UI change | Medium | |
| Automation instability | Medium | |

## 11. Traceability
| Requirement | Scenario | Test Case | Automation | Defect |
|---|---|---|---|---|
| | | | | |

---

# Enterprise QA Test Cases Template

## Test Case Index
| Test Case ID | Requirement | Scenario | Priority | Type | Automation | Status |
|---|---|---|---|---|---|---|
| TC-001 | REQ-001 | | High | Functional | Yes | Not Run |

---

## Test Case: TC-001

**Requirement ID:**  
**Scenario:**  
**Priority:** High / Medium / Low  
**Type:** Functional / Negative / Boundary / Regression / Smoke  
**Automation:** Yes / No  
**Module:**  

### Preconditions
1.
2.

### Test Data
| Field | Value |
|---|---|
| | |

### Steps
| Step | Action | Expected Result |
|---|---|---|
| 1 | | |
| 2 | | |
| 3 | | |

### Expected Result
-

### Actual Result
-

### Status
Not Run / Pass / Fail / Blocked

### Evidence
- Screenshot:
- Log:
- Report:

### Defect
**Defect ID:**  
**Severity:**  
**Priority:**  

### Traceability
**Requirement:**  
**User Story:**  

---

## Test Case Design Checklist
- [ ] Positive scenario
- [ ] Negative scenario
- [ ] Boundary condition
- [ ] Required-field validation
- [ ] Error-message validation
- [ ] Navigation validation
- [ ] Business-rule validation
- [ ] Data validation
- [ ] Regression impact considered
- [ ] Automation suitability assessed

---

# Salesforce Login — Test Plan

## Objective
Validate the Salesforce login page for positive, negative and basic UI validation scenarios.

## Application
**URL:** https://login.salesforce.com/?locale=in

## Scope
### In Scope
- Username field
- Password field
- Login button
- Remember Username
- Valid credential login
- Invalid credential handling
- Blank credential handling
- Login-page state after failed authentication

### Out of Scope
- Salesforce business modules after successful authentication
- MFA flows unless separately enabled and testable
- Password reset flow
- Identity provider / SSO flows

## Automation
- Java
- Selenium WebDriver
- Maven
- TestNG
- Page Object Model
- PageFactory
- XPath-only selectors
- Explicit WebDriverWait
- No Thread.sleep

## Entry Criteria
- Salesforce login environment available
- Valid test account available
- Credentials supplied securely at runtime
- Chrome available

## Exit Criteria
- Planned login tests executed
- Failures investigated
- Evidence/report generated
- Defects logged where applicable

---

# Salesforce Login — Test Cases

| ID | Scenario | Type | Priority | Automation |
|---|---|---|---|---|
| TC-LOGIN-001 | Verify login page UI elements | Functional | High | Yes |
| TC-LOGIN-002 | Login with valid credentials | Positive | Critical | Yes |
| TC-LOGIN-003 | Login with invalid credentials | Negative | High | Yes |
| TC-LOGIN-004 | Login with blank credentials | Negative | High | Yes |
| TC-LOGIN-005 | Remember Username can be selected | Functional | Medium | Yes |
| TC-LOGIN-006 | Remember Username can be cleared | Functional | Medium | Yes |

## TC-LOGIN-001
**Precondition:** Salesforce login page is accessible.

**Steps**
1. Open the login URL.
2. Verify username field.
3. Verify password field.
4. Verify login button.

**Expected:** All required login controls are displayed.

## TC-LOGIN-002
**Precondition:** Valid Salesforce credentials are available through secure runtime properties.

**Steps**
1. Open login page.
2. Enter valid username.
3. Enter valid password.
4. Select Remember Username.
5. Submit login.

**Expected:** Authentication proceeds away from the login page.

## TC-LOGIN-003
**Steps**
1. Open login page.
2. Enter invalid username.
3. Enter invalid password.
4. Submit login.

**Expected:** Authentication fails and a login error is displayed.

## TC-LOGIN-004
**Steps**
1. Open login page.
2. Leave username blank.
3. Leave password blank.
4. Submit login.

**Expected:** User remains on the login page and validation prevents successful authentication.

## TC-LOGIN-005
**Steps**
1. Open login page.
2. Select Remember Username.

**Expected:** Remember Username becomes selected.

## TC-LOGIN-006
**Steps**
1. Open login page.
2. Select Remember Username.
3. Clear Remember Username.

**Expected:** Remember Username becomes unselected.
