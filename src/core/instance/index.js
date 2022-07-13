import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)  // _init
stateMixin(Vue)  // $set,$delete,$watch
eventsMixin(Vue)  // $on,$emit,$off,$once
lifecycleMixin(Vue)  // _update,  把虚拟dom变成真实dom
renderMixin(Vue)  // _render  $nextTick

export default Vue
