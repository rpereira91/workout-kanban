import { API, graphqlOperation } from 'aws-amplify'
import { listExercises } from '../graphql/queries'

export const getAllExercises = async () => {
    try {
        const {data} = await API.graphql(graphqlOperation(listExercises))
        return data.listExercises.items
    } catch (error) {
        console.log(error)
    }
    return null;
}