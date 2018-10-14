import {getTasks} from './repository'

const inMemoryTasks = getTasks()

const mustBeNumbers = numbers => Array.isArray(numbers) && numbers.every(number => !isNaN(number))

const add = ({date = new Date().toISOString().split('T')[0], message, done = false}) =>
    !!inMemoryTasks.push({date, message, done})

const toggleDone = numbers => mustBeNumbers(numbers) &&
    !!numbers.map(number => inMemoryTasks[number].done = !inMemoryTasks[number].done)

const remove = numbers => mustBeNumbers(numbers) &&
    [...numbers].sort().reverse().map(num => inMemoryTasks.splice(num, 1))

const read = () => [...inMemoryTasks].map((e, i) => ({...e, id: i}))

export {add, toggleDone, remove, read}
