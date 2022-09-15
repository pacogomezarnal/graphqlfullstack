const {ApolloServer,gql} = require('apollo-server');
const taskdata = require ('./data/tasks_data.json');
const Tasks = require ('./data/modelTask.js');
const env = require('dotenv');
const mongoose = require("mongoose");

env.config();
//DB CONNECTION
mongoose.connect(process.env.DB_URI);
// Get the default connection
const db = mongoose.connection;
const getTasks = async () => {
    try{
        const tasksmongo = await Tasks.find({});
        return tasksmongo;

    }catch(error){
        console.log(error);
        return error;
    }
};
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
            return getTasks();
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
