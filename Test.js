import { Selector } from 'testcafe';
const locators = require('./objectRepo.json');

fixture `TestCafe`
//Click on Plista Url.
    .page `https://selfservice-test.plista.com/`;

test('Check invalid login', async (t) => {
 
    const EmailEdit = Selector("#login_input-email");
    const PasswordErrorMessage  = Selector('span').withText('Bitte gib ein Passwort an.');
    await t
    //Maximizing Plista window.
    .maximizeWindow()
    //Verify email edit field is empty.
    .expect(EmailEdit.value).eql('','Verifying whether the email id field is empty.')
    .typeText(EmailEdit,'sneha@gmail.com')
    .expect(EmailEdit.value).contains('sneha','Verifying whether the email id field conatains sneha.')
    await t
    //Clicking on Login button.
    .click(Selector(locators['loginButton']))
    .expect(PasswordErrorMessage.innerText).eql('Bitte gib ein Passwort an.','Verfying Password field error message');
    await t
    //Capturing Screenshot
    .takeScreenshot({
     path: './',
    fullPage: true,
    path : 'D:/Documents/Register-page.png',
        });
    await t
});

test('Click on Register Link', async t => {
    const RegisterLink = Selector("#create-account-btn");
    const RegisterMessage  = Selector('div').withText('Erstelle ein Konto');
    const RegisterEmailEdit = Selector("#create_input-email");
    const VorNameEdit = Selector("#create_input-first-name");
    const NachNameEdit = Selector("#create_input-last-name");
     await t
    //click on the register button
    //Click on Register link
   .click(RegisterLink());
   await t
   //Verifying text on registration page.
    .expect(RegisterMessage.innerText).contains('Erstelle ein Konto','Verifying Registeration message');
    await t
    .expect(RegisterEmailEdit.value).eql('','Verifiying whether the Register email id field is empty.')
    .expect(VorNameEdit.value).eql('','Verifying whether the Vor Name field is empty.')
    .expect(NachNameEdit.value).eql('','Verifying whether the Nach Name field is empty.')
    await t
       .takeScreenshot({
    path:     'D:/Documents/Register-page.png',
    fullPage: true,
    });
});

test('Click on Toggle Button(EN)', async t => {
    const ENToggleButton = Selector('#login-language-toggle-switch-btn-1');
    //Clicking on EN toggle button.
    await t.click(ENToggleButton);
    const LoginMessageEnglish = Selector('div').withText('Login to your account');
    const ForgotPasswordLink  =  Selector("#login_link-forgot-password");
    const LoginButton =Selector("#login_button-login");
     await t
     //Verifying that after clicking on EN all text appears in English language.
    .expect(LoginMessageEnglish.innerText).contains('Login to your account','Verifying login message in english language if we click on EN');
    await t
   .expect(ForgotPasswordLink.innerText).eql('Forgot your password?','Verifying Forgot password link is present in english language.')
    .expect(LoginButton.innerText).contains('Login','Verifying Login button exists in english language.')
    await t
    .takeScreenshot({
    path: "D:/Documents/Toggle.png",
    fullPage: true,
});
});