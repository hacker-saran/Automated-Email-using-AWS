
# Automated Email Using AWS Lambda

The process of setting up an automated email using AWS Lambda, CloudWatch, SES (Simple Email Service), and IAM (Identity and Access Management) roles involves creating a Lambda function that sends an email using SES and then scheduling it to run at specific intervals using CloudWatch Events.

# Steps to set up 
## Step 1 : 
### Verify the Sender and Receiver Email using SES :-
* Login to AWS Management Console, navigate to **SES service**. 
* Open SES and click on **Email Address**.
* Enter the from address and to address and verify it.
* Amazon SES sends the verification mail to the corresponding Mail Id's.

## Step 2 :
### Set Up IAM Roles :-
IAM (Identity and  Access Management) Roles holds the necessary permission to perform the task.
* In the Amazon Management Console navigate to **IAM**.
* Navigate to Roles and click on **Create Role**.
* Attach the two policies as the trusted entities and proceed.
    * CloudWatchFullAccess 
    * AmazonSESFullAccess 
* Assign name of the Role (*AutomateSendEmailRole*) and click **Create Role**.


## Step 3 :
### Create Lambda function :- 
AWS Lambda is a Serverless function that instantly run the code without the need of the server.
* In Amazon Management Console navigate to **Amazon Lambda**.
* Click on **Create Function** and name the function (*automate_send_email*).
* Select the runtime as NodeJS.
* Change the default execution role as *Use an Existing Role* and select the IAM Role created earlier (*AutomateSendEmailRole*).
* Click on **Create Function**.
* In the Function Code write the necessary code that uses *asw-sdk* and *ses* to send Email.
* Save the function by click on Deploy. 

## Step 4 :
### Set Up CloudWatch Event Rule :- 
CloudWatch is used to trigger the Lambda function at the specific interval.
* In Amazon Management Console navigate to CloudWatch.
* Click on **Rules** and choose Event Source as **Schedule**.
* Define the schedule by *cron expression*.
Cron Expression : 
Minute, Hours, Day of Month, Month, Day of Week, Year.
* Add the Target to the Rule by selecting the Lambda function created earlier (*automate_send_email*). 
* Configure the Rule details and create rule. 

## Step 5 :
### Monitoring the Event :-
* Goto the Lambda function and click on monitoring.
* Click on view logs in CloudWatch to view the events triggered and check the Email for the result.



## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rsaran24/)

[![Leetcode](https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black)](https://leetcode.com/hacker_saran/)

[![linkedin](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://www.credly.com/badges/d110450f-c720-4b67-a385-ca38ff851e6f/public_url)

