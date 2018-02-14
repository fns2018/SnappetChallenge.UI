import React, { Component } from 'react';

import ControlBar from './ControlBar';
import LearningObjectiveList from './LearningObjectiveList';

import './ResultsPage.css'


const learningObjectives = {
    grade5: [{ 
        questionNumber: 123,
        question: 'Doortellen en terugtellen, met sprongen van 3 of meer dan 10 en zelfs meer dan 100.',
        pupils: {
            correctCount: 12,
            notAnsweredCount: 24,
            needsAttentionCount: 3
        }
    }, { 
        questionNumber: 201,
        question: 'Splitsend vermenigvuldigen (6 x 32 = 192). En nog meer rekenen dan je zou willen.',
        pupils: {
            correctCount: 18,
            notAnsweredCount: 20,
            needsAttentionCount: 1
        }
    }]
}

export default class Results extends Component {
    render() {
        return (
            <div className="results">
                <ControlBar />
                <LearningObjectiveList learningObjectives={learningObjectives.grade5} />            
            </div>
        )
    }
}