export const reRender = taskList => {
    document.querySelector('#table').innerHTML = renderTable(taskList)
    document.querySelector('#table').dataset.upgraded = ''
    global.componentHandler && global.componentHandler.upgradeElement(document.querySelector('#table'))
    document.querySelector('#text').value = ''
}

export const renderTable = taskList => `<table id="table" class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp" style="float:left">
                <thead>
                <tr>
                    <th class="mdl-data-table__cell--non-numeric">Task name</th>
                    <th>Created on</th>
                </tr>
                </thead>
                <tbody id="list">
                    ${taskList.map(element => `<tr>
                        <td class="mdl-data-table__cell--non-numeric">${!element.done ? element.message :
    `<span style="text-decoration: line-through;">${element.message}</span>`}</td>
                        <td>${!element.done ? element.date :
    `<span style="text-decoration: line-through;">${element.date}</span>`}</td>`)
    .join('')}
                </tbody>
            </table>`
