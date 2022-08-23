# Flood Mail

### Overview 
- __Flood Mail__ is a messaging app that gives the user complete control over their conversations and data. Flood mail requires no personal information to signup. When a message or conversation is deleted by a flood user , it is deleted forever. For both users involved in the conversation. Delete your account , and all associated data is deleted as well. 

- __Flood Mail__ combines concepts of game theory with the right to internet anonymity .

## Pages/Routes
 ***Note*** : each page features a navigation bar , which features links to the main pages

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
