import React from 'react';

import './LearningObjectiveList.css';

const colors = {
  correct: '#34A3D7',
  notAnswered: '#B9DEF1',
  attention: '#FDE341'
};

const LearningObjectiveList = (props) => {
    const createResultCircles = (pupils) => {
        let circles = [];
        for(let i = 0; i < pupils.correctCount; i++) {
            circles.push(createSingleCircle(colors.correct, i));
        }

        for(let j = 0; j < pupils.notAnsweredCount; j++) {
            circles.push(createSingleCircle(colors.notAnswered, j));
        }

        for(let k = 0; k < pupils.needsAttentionCount; k++) {
            circles.push(createSingleCircle(colors.attention, k));
        }
        return circles;
    }

    const createSingleCircle = (color, index) => {
        return (
            <svg key={`${color}_${index}`} height="20" width="20" fill={color}>
                <circle cx="10" cy="10" r="5" />
            </svg>
        )
    }

    const createLearningObjectiveRow = (learningObjective) => {
        return (
            <div key={learningObjective.questionNumber} className="learning-objective">
                <div className="learning-objective-content">
                    {learningObjective.questionNumber}. {learningObjective.question}
                </div>
                <div className="learning-objective-content">
                   {createResultCircles(learningObjective.pupils)}
                </div>
                <div className="learning-objective-content">
                    <div className="btn btn-default text-blue">Show Details</div>
                </div>
            </div>
        )
    }

    return (
        <div className="learning-objective-list">
            <div className="learning-objective-header">
                <div className="learning-objective-header-content">
                    <span style={{display: 'inline-block'}}>Learning Objective</span>
                    <svg style={{display: 'inline-block'}} className="icon" id="4277e692-56ed-4859-b091-d691c1a257d8" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>Down</title><path d="M27.78,9.51a2,2,0,0,0-2.85,0L16,18.45l-8.86-9a2,2,0,0,0-2.85,0,2,2,0,0,0,0,2.85L14.61,22.58a2,2,0,0,0,2.85,0L27.78,12.26a2,2,0,0,0,0-2.75Z"/></svg>
                </div>
                <div className="learning-objective-header-content">Pupils</div>
                <div className="learning-objective-header-content">&nbsp;</div>
            </div>
            <div>
                {props
                    .learningObjectives
                    .map(learningObjective => createLearningObjectiveRow(learningObjective)) }
            </div>
        </div>
    )
}

export default LearningObjectiveList;