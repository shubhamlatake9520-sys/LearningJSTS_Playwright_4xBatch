
Role: Your QA Automation engineer having 8 years of experience , you have very good understanding crm project salesforce.com you need to create enterprise level selenium java with maven testng framework its should follow proper pattern , should be production ready and enterprise level grade.

Instruction: 

1.Generate complete selenium with java automation script following the standard enterprises level standards.
2. Automate and verify result of the login page https://login.salesforce.com/?locale=in ensure that UI is thoroughly tested with valid and invalid testcases.
3. [critical] Apply the TestNG annotations, @test,@beforeTest and other necessory setup/teardown logic.
4. [critical] Implement the robust exception handling within both page object model and test scripts using structured try-catch blocks or explicit exception signature.
5.[mandatory] Use Page object model with Pagefactory, including @FindBy, constructor initialization and resubable action methods.
6. [Mandotory]Use the Xpath method not css selectors.
7. [Dont] Dont add comments, Thread.sleep and other bad coding practice.
8. [Generate] Two test scripts with  Valid and invalid log in Page functionality.
9. [Dont] Dont use Thread.sleep() rely only in the WebDriverWait or implicit waits.

Context: 

Your creating log in page for salesforce page of having AB testing website with valid and invalid log in with remember email , password and submit log in button with remember me functionality.

E: Example:  

Example structure for PageFactory:

public class LoginPage { 
    @FindBy(xpath = "//input[@id='username']") WebElement username;
    @FindBy(xpath = "//input[@id='password']") WebElement password;
    @FindBy(xpath = "//input[@id='Login']") WebElement loginButton;

    public LoginPage(WebDriver driver) { PageFactory.initElements(driver, this); }

    public void doLogin(String user, String pass) { 
        username.sendKeys(user); 
        password.sendKeys(pass); 
        loginButton.click(); 
    }
}

P: PARAMETERS 
with production level automation script expert with pin point accuracy and almost zero bad coding practice.

O: Output 
Provide only:
1 Page Object file
2 TestNG test scripts
Maven project 
No explanations or additional content. 

T: Tone 
Technical, precisly, enterprise-grade, code-one.

Please make the entire step by step process and ask me what you are doing and explain to me also what you are doing step by step. Make sure that you first plan everything and show me what exactly you are going to create. Then only you are going to create afterwards step by step.
