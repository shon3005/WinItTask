# WinItTask

Check out the deployed version @ <https://frozen-lowlands-75250.herokuapp.com/newmessage>

## How To Get Started

Due to limitations on Free Twilio Account, your cell phone number must be verified by me before using this app.

#### Step 1
You should have received a text message with a verification code.
Email the verification code to me so that I can verify and you can start testing it.

#### Step 2
Wait until I verify your number.
Once your cell phone number is verified, you can start using the app.
Type in your cell phone number. 
This cell phone number must be a **U.S. number only**.
Make sure there are **no spaces** and **no country code**.
Click on the **Submit** button to send to your cell phone number.

#### Step 3
You will receive a text message with the bit.ly link.
Tap on the bit.ly link and you will be redirected to the message.
You can press the **Back to New Message** button to restart the process.

## How To Run Locally

#### Step 1
run ```git clone git@github.com:shon3005/WinItTask.git``` to download the repository

#### Step 2
type ```cd WinItTask-master``` to get into the project folder

#### Step 3
run ```npm install``` to install dependencies

#### Step 4
run ```nodemon app.js``` to start the localhost server

#### Step 5
Go to your browser and type in ```localhost:3000/newmessage``` to begin using the app.

#### Step 6
Follow the instructions from the section: **How To Get Started**
Notice that when you try this on ```localhost:3000/newmessage```, the text message you receive is not in bit.ly form.
This is because bit.ly does not support localhost urls.
