# Preorder

This is the Preorder app repository,

## Miscellaneus

### Stack

- Backend: AWS Amplify Framework
- Frontend: React JS +  Amplify libraries

### AWS references

- Amplify Console: https://eu-central-1.console.aws.amazon.com/amplify/

### Resources

- Amplify platform: [here](https://docs.amplify.aws/)
- AWS Amplify Serverless GraphQL React workshop: [here](https://www.youtube.com/watch?v=HZUlQ7Z2xHQ
- React JS Crash Course: [here](https://www.youtube.com/watch?v=sBws8MSXN7A
- Advanced Design Patterns for DynamoDB: [here](https://www.youtube.com/watch?v=HaEPXoXVf2k
   
## Getting started    

### Initial setup

1. Make sure you are on a new version of the AWS Amplify CLI to be sure you have multiple environment support.

```sh
npm install -g @aws-amplify/cli
```

2. clone the project    

```sh
git clone https://github.com/francesco-magalini/preorder.git
```

3. Create your development branch

```sh
git checkout -b dev-react-NSUR dev
```

4. install dependencies using npm or yarn    

```sh
npm install
```

5. Start project    

```sh
npm start
```

### Setting up back end AWS services

If you do not have your AWS services already created, follow these steps. If you already have your services set up, just configure your aws-exports.js file.    

1. From the root of the project, initialize the Amplify project    

```sh
amplify init
```

2. Create the resources in your account

```sh
amplify push
```

