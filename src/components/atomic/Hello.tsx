import * as React from 'react'
import {HelloProps} from '../../model/parent/hello'


const Hello = (props : HelloProps) =>{
    return(
        <div>
            Hello {props.compiler}, and
            {props.framework} 나는 천재라고 한다.
        </div>
    )
}

export default Hello;