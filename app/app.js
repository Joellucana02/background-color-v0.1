import {Box} from './box.js'
import {Color} from './color.js'
export function app (){
    const
    $root = document.getElementById('root'); 
$root.appendChild(Color());
    //$root.appendChild(Color());
    $root.appendChild(Box());

}
