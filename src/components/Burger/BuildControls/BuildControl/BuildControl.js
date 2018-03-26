import React from 'react'
import classes from './BuildControl.css'

const buildControl = (props) => {
    <div className={classes.buildControl}>
        <div>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button classes={classes.More}>More</button>
    </div>
}

export default buildControl