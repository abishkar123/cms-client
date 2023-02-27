# CMS Frontend
CMS frontend for the ecommerce platform



## work flow

### Reset password
when admin user forgets their password, they should be able to reset password from the system.

So, follow the steps to build a password reset system:
1. FE: show the email input form and let user submit the to api.
2. BE: get email date in the api and check if user exist in db associated with that email.
3. BE: if we have no user found, send error message saying user not found, that complets the trasaction.
4. BE: if user found, generate a random 6 digit number and store in as session table.
5. BE send that randomly generated 6 digits number to the user email address.
6. BE: at the same time send response to fronend saysing OTP has been sent to their email.
7. FE: if we we reecieve sucess message from the backend, then show another form the requires you to enter the otp that was send to your email and 2 more input filds for the new password and confirm passwword. let user submit the form to another api.
8. BE: one user submit the form, in the api, grap the opt and passowrd and email.
9. BE: check if combination of email and opt exists in the session table, i f it doesn't the simpley respons sysing invaild opt, if the dossses exits then remo the data form the session table and continue to step 10.
10. BE: encrypt the  incoming plain password, user table with new passowrd based on user email.
11. once password updated operation in successfuly,  then send email notifiation sasying password has been changed, tand also respone password update 


Session Model: 
token:String
status: stirng
association: String