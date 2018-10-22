import { document } from 'global'
import Vue from 'vue'
import app from './components/app'
import * as tasks from './tasks'
import * as repository from './repository'

export const display = () => new Vue({el: 'body',
        render: h => h(app, {props:{...tasks, ...repository}})})
