# System Plan
## I. Purpose of the system
The purpose of the system is to allow Users to be able to perform basic mathematical calculations, on a web based interface.

For the sake of the user experience, it is important that queries be written clearly and in small blocks, and in the case of more complicated questions, the queries shoild be given in smaller chunks in accordance to PEMDAS rules

Only numbers can be entered in the answer fields during completion. After inputing the query, you must submit the query,by pressing the equals to (=) button.

After completing the calculation, the user receive a feedback on in form of the answer, or in the event of an error, they will recueve an error message.

## II. Project plan

Developers participating in the project:
* Ajri Sylhasi
* Ankita
* Gabriel Agbese
* Samat Nazarbaev
* Skander Mahfoudh.

## III. Business process model

1. Our team notices a gap in the market for an browser-based calculator interface
2. We will do the software with the developers for several weeks, with documentation, concluding the necessary contracts and in the meantime we will communicate with the customer periodically.
3. If the software suits both the tester users and the developers, we will eventually publishbr published on live servers.


## IV.Requirements
**General System Requirements:**
- Any user can utilize all calculator functions.
- Web page accessible from both computer and mobile devices.
- Operations are done using Javascript
- If we were to store previous calculations, a very small database would store the user's history.

**Interface Requirements:**
- The webpage will have a clean and simple User Interface
- Buttons are well placed and centered around the numbers
- Other useful (reset/result) buttons available
- Very little use of appealing colors in the calculator
- Responsive page on mobile devices

**Functional Requirements:**
- User can easily perform operations and get a result
- More features (operators) might be added later on

## V.Functional Design:
- System Participants:
  - Page admins
  - Normal users
- Access Rights in the system:
  - Page Admins:
    - Full access to all parts of the page.
    - Able to view it as a normal user (and Preview changes)
    - Edit functions
    - Change design
  - Normal users:
    - Can only access the calculator
    - Perform calculations and display result
    - Other features might be added

## VI. Physical environment
* The website is designed for the web.
* The website will run on any of the popular web browsers. (e.g. Chrome, Firefox, Opera, Microsoft Edge, Safari, Brave)
* Development software:
    * Visual Studio Code
    * Trello
    * Github
    
## VII. Abstract domain model

Basic operations: addition, subtraction, multiplication, division. The program will add tasks to these operations.
UI: Allows the user to select a operations and provide answers. Feedback is also displayed on this interface.
On the client-server side, the answer is evaluated using javascript. 

## VIII. Architectural plan

HTML displays the buttons and labels, and general interface.
CSS is used to style the site to make it look similar to the interface of a physical calcultor
SCSS is used to stramline the CSS
Javascript is used to perform the mathematical operations and return the answers.

## IX. Database plan

No database is required for the program as it performs calculations in real time, and does not store any user data.

## X. Test plan

* Test cases:
    1. Test of division by 0
    2. Testing of non numerical, or operation symbol input
    3. Appearance testing

## XI. Installation plan

No Isntallation is required by the user as it is browser based.

* Server side system plan:
    * Rent a web server
    * FTP access
        

## XII. Maintenance plan

Maintanance will only be necessary with the need of additional operations requested by the users.

Means of update:
* FTP
* SSH

In case of updating, it is necessary to perform:
* Update the file on the server
* Update documentation
* Reruns tests
* Document test results