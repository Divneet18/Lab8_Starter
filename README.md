# Lab 8 - Starter
Divneet Kaur\
<br>
Question 1\
In your own words: Where would you fit your automated tests in your Recipe project development pipeline?\
Within a Github action that runs whenever code is pushed
<br>
Question 2\
Would you use an end to end test to check if a function is returning the correct output? (yes/no)\
Yes, I would use end to end test as it involves multiple interactions.

Question 3\
Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user\
No, I would not use unit testing as messaging involves multiple interactions, i.e., sending a message, and receiving a message. When these both successfully pass, that is when we can say a message was successfully sent. So, another interaction is required to successfully test this feature. However unit testing does not support this.


Question 4\
Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters\
Yes, max message length requires checking length of the message and can be done with unit testing as we do not require more interactions to test this feature completely.


 




