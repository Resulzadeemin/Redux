import React from 'react'
import { connect } from 'react-redux'
import "./Counter.css"
const mapStateToProps = (state) => {
    return { count: state.count }
}


function Counter(props) {
    
    const add = () => {
        props.dispatch({ type: 'TOPLAMA' })
    }

    const sub = () => {
        props.dispatch({ type: 'CIXMA' })
    }

    const vur = () => {
        props.dispatch({ type: 'VUR' })
    }
    const bolme = () => {
        props.dispatch({ type: "BOLME" })
    }

    return (
        <div className="con">
            Say : {props.count}
            <br />
            <div>
                <p>Toplama</p>
                <button onClick={add}>+</button>
            </div>
            <div>
                <p>Cixma</p>
                <button onClick={sub}>-</button>
            </div>
            <div>
                <p>2-ye vur</p>
                <button onClick={vur}>x</button>
            </div>
            <div>
                <p>2-ye bol</p>
                <button onClick={bolme}>/</button>
            </div>
        </div >
    )
}
export default connect(mapStateToProps)(Counter)