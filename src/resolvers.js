import { tasks} from './sample'

export const resolvers = {
    Query :{
        hello: ()=>{
            return 'hello world con Graphql '
        },
        greet:(root,args)=>{
            return `Hola ${args.name}!`
        },
        tasks(){
            return tasks
        }
    },
    Mutation:{
        createTask(_,{input}){
            input._id=tasks.length
            tasks.push(input)
            return input
        }
    }

};