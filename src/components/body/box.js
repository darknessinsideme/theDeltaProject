import React from 'react';
import './box.css'


function CvBox(props){
    return(
        <div className='cvBox' key={props.cvSummery.id}>
            <a href={`${props.cvSummery.cvLink}` }>
                <img src={props.cvSummery.img} className='profilePic' alt={props.cvSummery.name} key={`${props.cvSummery.id}.1`}></img>
            </a>
            <h4 key={`${props.cvSummery.id}.2`}>{props.cvSummery.name}</h4>
            <p className='cvSummery' id = "cvSummery" key={`${props.cvSummery.id}.3`}>
                {props.cvSummery.summary}
            </p>
        </div>
    )
}
export default CvBox