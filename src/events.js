const getSelectedNodes = () =>
    [...document.querySelectorAll('tr.is-selected')].map(node =>
        [...node.parentNode.childNodes].filter(node =>
            node.nodeName !== '#text').indexOf(node))

document.querySelector('#add').onclick = () => {
    tasks.add({message: document.querySelector('#text').value})
    repository.saveTasks(tasks.read())
    reRender(tasks.read())
}

document.querySelector('#done').onclick = () => {
    tasks.toggleDone(getSelectedNodes())
    repository.saveTasks(tasks.read())
    reRender(tasks.read())
}

document.querySelector('#delete').onclick = () => {
    tasks.remove(getSelectedNodes())
    repository.saveTasks(tasks.read())
    reRender(tasks.read())
}
