import {add, remove, read, toggleDone} from './tasks'
import {reRender} from './render'
import {saveTasks} from './repository'

const getSelectedNodes = () =>
    [...document.querySelectorAll('tr.is-selected')].map(node =>
        [...node.parentNode.childNodes].filter(node =>
            node.nodeName !== '#text').indexOf(node))


export default () => {
    document.querySelector('#add').onclick = () => {
        add({message: document.querySelector('#text').value})
        saveTasks(read())
        reRender(read())
    }

    document.querySelector('#done').onclick = () => {
        toggleDone(getSelectedNodes())
        saveTasks(read())
        reRender(read())
    }

    document.querySelector('#delete').onclick = () => {
        remove(getSelectedNodes())
        saveTasks(read())
        reRender(read())
    }
}