import gql from 'graphql-tag';
import AWSAppSyncClient from 'aws-appsync';




export default () => {

    if (typeof fetch === "undefined") {
        return 
      }
      else{
        return new AWSAppSyncClient({
            url: 'https://y3gw2jewwza5pjvbhmokd3xwya.appsync-api.us-east-2.amazonaws.com/graphql',
            region: 'us-east-2',
            auth: {
              type:'API_KEY', // or type: awsconfig.aws_appsync_authenticationType,
              apiKey: 'da2-dp256meok5cjdg5u452rczdzoi',
            }
          })
      }

};

