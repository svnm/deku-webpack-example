/** @jsx element */

import element from 'virtual-element'
import { Demo } from './components/Demo/Demo'
import {render, tree} from 'deku'

let app = tree(
    <Demo />
)

render(app, document.getElementById('root'))