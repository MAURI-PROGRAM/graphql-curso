
import {makeExecutableSchema} from "graphql-tools"
import {resolvers} from "./resolvers"

const typeDefs=`
    type Query{
        hello:String
        greet(name:String!):String
        tasks:[Task]
    }

    type Mutation{
        createTask(input:TaskImput):Task
    }

    input TaskImput{
        title:String!
        description:String!
        number:Int
    }

    type Task {
        _id : ID
        title:String!
        description :String!
        number:Int
    }

`;

export default makeExecutableSchema({
    typeDefs,
    resolvers
})