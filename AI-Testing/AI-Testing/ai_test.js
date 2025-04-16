Feature('ai');

// Scenario('test something',  ({ I }) => {
//     // I.amOnPage('https://www.google.com');
//     I.amOnPage('https://www.facebook.com/login.php');

//     pause();
// });

Scenario("Github login",  ({ I }) => {
    I.amOnPage("https://github.com");
    I.click("Sign in");
    I.fillField("Username or email address", "nhập username của ae");
    I.fillField("Password", "nhập paswork của ae"); 
    I.click(""); 
    I.see("Incorrect username or password.");  
});



// Feature('Facebook Login Page');

// Scenario('open Facebook login page', ({ I }) => {
//   I.amOnPage('https://www.facebook.com/login.php');
//   I.see('Email address or phone number');
//   I.see('Password');
//   I.see('Log in');
// });
// // /t that the email input field is present and enabled
// // ```
// Scenario('check email input field', ({ I }) => {
//   I.amOnPage('https://www.facebook.com/login.php');
//   I.seeElement('#email');
//   I.see('Email address or phone number');
//   I.fillField('#email', 'testuser@example.com');
// });
// // ```
// // 3. Test that the password input field is present and enabled
// // ```
// Scenario('check password input field', ({ I }) => {
//   I.amOnPage('https://www.facebook.com/login.php');
//   I.seeElement('#pass');
//   I.see('Password');
//   I.fillField('#pass', 'testpassword');
// });
// // ```
// // 4. Test that the login button is present and enabled
// // ```
// Scenario('check login button', ({ I }) => {
//   I.amOnPage('https://www.facebook.com/login.php');
//   I.seeElement('#loginbutton');
//   I.see('Log in');
//   I.click('#loginbutton');
// });
// // ```
// // 5. Test that the login button is disabled when the email or password input field is empty
// // ```
// Scenario('check login button disabled when input fields are empty', ({ I }) => {
//   I.amOnPage('https://www.facebook.com/login.php');
//   I.dontSeeElement('#loginbutton[disabled=""]');
//   I.fillField('#email', '');
//   I.fillField('#pass', '');
//   I.seeElement('#loginbutton[disabled=""]');
// });
// // ```
// // 6. Test that the error message is displayed when the email input field is left blank
// // ```
// Scenario('check error message when email input field is left blank', ({ I }) => {
//   I.amOnPage('https://www.facebook.com/login.php');
//   I.see('Email address or phone number');
//   I.fillField('#pass', 'testpassword');
//   I.click('#loginbutton');
//   I.see('Please enter your email address or phone number');
// });
// // ```
// // 7. Test that the error message is displayed when the password input field is left blank
// // ```
// Scenario('check error message when password input field is left blank', ({ I }) => {
//   I.amOnPage('https://www.facebook.com/login.php');
//   I.see('Password');
//   I.fillField('#email', 'testuser@example.com');
//   I.click('#loginbutton');
//   I.see('Please enter your password');
// });