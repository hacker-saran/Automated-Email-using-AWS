const AWS = require('aws-sdk');

AWS.config.update({
    region : 'us-east-1'
})

const ses = new AWS.SES();

exports.handler = async(event) => {
    const params = {
        Destination : {
            ToAddresses : ['to@gmail.com']
        }, 
        Message : {
            Subject : {
                Data : "Email from AWS"
            }, 
            Body : {
                Text : {
                    Data : "Email fromn AWS using Lambda, SES, Cloudwatch"
                }
            }
        }, 
        Source : 'from@gmail.com'
    };

    try {
        const response = await ses.sendEmail(params).promise();
        console.log("Successfully sent Email...!");
    } catch (error) {
        console.log("An Error Occurred while sending the Email:", error);
    }
};

