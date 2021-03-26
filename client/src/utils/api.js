import { API, graphqlOperation } from 'aws-amplify'
import { listExercises } from '../graphql/queries'
import {updateExercise, createExercise} from '../graphql/mutations'
import { v4 as uuidv4 } from 'uuid';
import {map} from 'lodash'
export const getAllExercises = async () => {
    try {
        const {data} = await API.graphql(graphqlOperation(listExercises))
        return data.listExercises.items
    } catch (error) {
        console.log('error' , error)
    }
    return null;
}

export const setExercise = async (exercise) => {
    delete exercise.createdAt;
    delete exercise.updatedAt;
    try {
        const {data} = await API.graphql(graphqlOperation(updateExercise, {input: exercise}))
        return data.updateExercise
    } catch ({errors}) {
        console.log(errors)
    }
}

export const addCurrentExercise = async (exercise) => {
    try {
        exercise.id = uuidv4()
        const {data} = await API.graphql(graphqlOperation(createExercise, { input: exercise }));
        return data.createExercise;
    } catch({errors}) {
        console.log(errors)
    }
}