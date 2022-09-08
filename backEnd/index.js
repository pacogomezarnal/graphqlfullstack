const {ApolloServer,gql} = require('apollo-server');
const taskdata = require ('./data/tasks_data.json')
const {env} = require('dotenv');

//SCHEMA
const typeDefs=gql`
    type Task {
        id:ID!,
        name:String!,
        description:String,
        days:Int
    }
    type Query{
        tasks:[Task]
    }
`
const resolvers={
    Query:{
        tasks:()=>{
            return taskdata;
        }
    }
}


//LAUNCHING APOLLO SERVER
const server = new ApolloServer({typeDefs,resolvers});
server
    .listen({port: process.env.SERVER_PORT || 5000})
    .then(({url})=>{
        console.log(`Apollo server running at ${url}`);
    })
