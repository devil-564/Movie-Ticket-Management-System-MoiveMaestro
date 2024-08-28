WELCOME TO THE DOCUMENTATION OF MOVIE MAESTRO - MOVIE TICKET MANAGEMENT WEB APPLICATION

A. System Requirements
To successfully run Movie Maestro, ensure your system meets the following requirements:

Operating System: Windows, macOS, or Linux
RAM: Minimum 4 GB (8 GB recommended)
Node.js: Version 14.x or above
MongoDB: Installed locally or accessible via a cloud service
Internet Connection: Required for installing dependencies and accessing external services like Stripe

B. How to Setup the Website

Extract the Project:
First, extract the ZIP file of the project.

Open in IDE:
Use any IDE of your choice (e.g., Visual Studio Code) and open the extracted project in the IDE.

Install Frontend Dependencies:
Open the terminal in your IDE and navigate to the project root. Run the following command to install the frontend dependencies:


`npm install`
or
`npm i`

Install Backend Dependencies:
Open a new terminal, navigate to the backend directory, and install the backend dependencies:


`cd backend`
`npm install`
or
`npm i`

C. How to Run the Website

Open the Project in IDE:
Make sure the project is open in your IDE.

Run the Application:
In the terminal, run the following command to start the application:

`npm run application`

Access the Website:
Open any browser and go to `http://localhost:5173` to access the website.

IMPORTANT NOTE:
Since we have integrated Stripe Payment Gateway and it is in test mode, use the following test card information for transactions:

Card Information:
Visa Number: 4000 0035 6000 0008
Expiry Date: Any future date
CVC: Any 3-digit number ex. 123