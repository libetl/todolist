import { document } from 'global'
import {MDCTopAppBar} from '@material/top-app-bar/index'
import {MDCRipple} from '@material/ripple'

export const display = () => {
    new MDCRipple(document.querySelector('.mdc-button'));
    new MDCTopAppBar(document.querySelector('header'))
}

export const reRender = taskList => {
    document.querySelector('#list').innerHTML = renderTable(taskList)
    document.querySelector('#text').value = ''
}

export const renderTable = taskList => taskList.map((element,i) => `<tr>
    <tr class="mdc-data-table__row">
    <td class="mdc-data-table__cell">
    <div class="mdc-checkbox mdc-checkbox--upgraded mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" style="--mdc-ripple-fg-size:24px; --mdc-ripple-fg-scale:1.6666666666666667; --mdc-ripple-left:8px; --mdc-ripple-top:8px;">
    <input class="mdc-checkbox__native-control" value="${i}" type="checkbox">
    </div></td>
    <td class="mdc-data-table__cell">${!element.done ? element.message :
    `<span style="text-decoration: line-through;">${element.message}</span>`}</td>
    <td class="mdc-data-table__cell">${!element.done ? element.date :
    `<span style="text-decoration: line-through;">${element.date}</span>`}</td></tr>`)
    .join('')
