import {reRender} from './render'
import {read} from './tasks'
import bind from './events'

reRender(read())
bind()