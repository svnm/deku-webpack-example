/** @jsx element */

import {render,tree} from 'deku'
import element from 'virtual-element'
import { CSSModules, styles } from 'deku-css-modules'

/* assign the styles to deku-css-modules' style object */
import demoStyles from './Demo.css'
Object.assign(styles, demoStyles)

CSSModules.render = function () {
	return (
      <div>
        <button styleName='button blue'>press me</button>
        <button styleName='button'>press me</button>
      </div>
    )
}

/* Demo */
let Demo = {

  initialState () {
    return { }
  },

  afterUpdate (component) {
    let { props, state } = component
  },

  afterMount (component, el, setState) {
    let { props, state } = component
  },

  beforeUnmount (component) {
  }
}

Demo.render = CSSModules

export {Demo}
