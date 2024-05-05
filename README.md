<h1 align="center">Phising App</h1>
<p  align="center">
Sign in. Login. Send Links. Phis friends. Get List of their Credentials in your account.
Use only for fun!
</p>


1. Dashboard is the default page that shows latest phising victims
    - Facebook | user1 | id, password | share
    - Intagram | user1 | id, password | share
    - Facebook | user2 | id, password | share
2. Phis page will show all the links that can be sent to the victim
    - facebook login page
    - instagram login page
    - google login page

<!--
### apis requirements
- auth
    - register      -> handle new user `POST`
    - login         -> handle existing user `POST`
    - currentUser   -> handle signed in user's token `GET`
- user
    - :id           -> handle user's information `GET` `PUT` `DELETE`
    - :encrypted_data -> returns user_id & no other information for anynomity purposes.
- social
    - face          -> `GET` `POST` `PUT` `DELETE` after obtaining phised creds
    - goog          -> `GET` `POST` `PUT` `DELETE` after obtaining phised creds
- link
    - create        -> create new link (fields: social, user_id) `POST`
    - recreate      -> recreate expired links `POST`
    -
    - @www.facebook.com/:encrypted_data (frontend req/api)
    - @www.instagram.com/:encrypted_data (decrypt encrypted part and put userid onsubmit btn)

### db requirements
- user
    - user_id, username, email, password
    - auto salt/hash password in model
- social
    - social_id, name, user_id, phis_mail, phis_pass
- link
    - link_id, social_id, user_id, address, expiry

### frontend, only onsumit matters which is already covered.
- simple login
- offer/iphone login
- game/horoscope/prediction login
-->