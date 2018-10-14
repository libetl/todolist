const getTasks = () => JSON.parse(localStorage.getItem('tasks')) || []

const saveTasks = tasks => localStorage.setItem('tasks', JSON.stringify(tasks))

export {getTasks, saveTasks}