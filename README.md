# Flood Mail

### Overview 
- __Flood Mail__ is a messaging app that gives the user complete control over their conversations and data. Flood mail requires no personal information to signup. When a message or conversation is deleted by a flood user , it is deleted forever. For both users involved in the conversation. Delete your account , and all associated data is deleted as well. 

- __Flood Mail__ combines concepts of game theory with the right to internet anonymity .

## Pages/Routes
 ***Note*** : each page features a navigation bar , which features links to the main pages

### 1. Signup Page
![Signup Page](https://github.com/nickmendezFlatiron/flood-mail/blob/main/client/src/assets/signup.png)
- Before a flood member has access to the Flood Mail site , a user is prompted to either login or signup to Flood Mail. 
- Once a member logs in or signs up , they are redirected to their account page and authorized to view the site until they log out.

### 2. Login Page
![Login Page](https://github.com/nickmendezFlatiron/flood-mail/blob/main/client/src/assets/login.png)
- Members who already have an account , they are prompted with a login page if they aren't logged in.

### 3.  Home Page
![Home Page](https://github.com/nickmendezFlatiron/flood-mail/blob/main/client/src/assets/home-page.png)
- The Home Page features a custom welcome message as well as an introduction to Flood Mail

### 4. Account Page
![Account Page](https://github.com/nickmendezFlatiron/flood-mail/blob/main/client/src/assets/account-view.png)
- The Account Page features an overview of a member's account as well as a motivational quote.
- To delete your account and all associated data , click on the "burn my account" button

### 5. Inbox View
![Inbox View](https://github.com/nickmendezFlatiron/flood-mail/blob/main/client/src/assets/inbox.png)
- The Inbox view features all conversations involving signed in flood member.
- Each row in the inbox is formatted as follows:
  - recipient username , subject line , latest message , latest message timestamp
- Search through the inbox using the Searchbar at the top 

### 6. Create A New Thread
![New Message Thread](https://github.com/nickmendezFlatiron/flood-mail/blob/main/client/src/assets/new-message-modal.png)
- Click on the new message button to create and send a new message and thread to another Flood Mail member

### 7. Message Thread View
![Message Thread View Top](https://github.com/nickmendezFlatiron/flood-mail/blob/main/client/src/assets/message-thread-p1.png)
- Click on a thread in the inbox to view the entire conversation
- Click on any of the close buttons (x) to delete a message , or delete the entire thread

### 8. Message Thread View Continued
![Message Thread View Continued](https://github.com/nickmendezFlatiron/flood-mail/blob/main/client/src/assets/message-thread-p2.png)
- The thread scrolls automatically to the latest message at the bottom
- Send a new message by entering message on the box at the bottom of the thread and click the send button.
-  Scroll to the top of the page by clicking the "Top" button.

### System dependencies
  - ruby 2.7.4p191
  - rails 7 
  - node v16.14.2
  - react 18

### Configuration and Setup
- Fork and clone this repository
- open the project file and run the following:

The Following npm install package-name --prefix client
- package names:
  - react-router-dom
  - bootstrap : only necessary for custom SCSS
  - react-uuid
  - react-bootstrap
For gem files:
  - run bundle install

- after all packages are installed, run the servers in 2 different terminals
  - npm start --prefix client
  - rails s 

- Database creation
run the Following code to create a db:
- rails db:create db:migrate
  - to seed data: run rails db:seed

## Contributors
- [Nick Mendez (Me)](https://github.com/nickmendezFlatiron)
### License - 3-Clause BSD License
* Copyright 2022 COPYRIGHT Nicholas Mendez - github: nickmendezFlatiron

* Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
