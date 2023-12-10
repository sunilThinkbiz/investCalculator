import React, { useState } from 'react'

export const UserInput = ({onChangeInput, userInput}) => {
   
    return <section id="user-input">
        <div className='input-group'>
            <p>
                <label>Intitial Investment</label>
                <input
                    type='number'
                    required
                    value={userInput.initialInvestment}
                    onChange={(e) =>
                        onChangeInput('initialInvestment', e.target.value)} />
            </p>
            <p>
                <label>Anual Investmet</label>
                <input
                    type='number'
                    required
                    value={userInput.annualInvestment}
                    onChange={(e) =>
                        onChangeInput('annualInvestment', e.target.value)}


                />
            </p>
        </div>
        <div className='input-group'>
            <p>
                <label>Expected Return</label>
                <input
                    type='number'
                    required
                    value={userInput.expectedReturn}
                    onChange={(e) => onChangeInput('expectedReturn', e.target.value)}
                />
            </p>
            <p>
                <label>Duration</label>
                <input
                    type='number'
                    required
                    value={userInput.duration}
                    onChange={(e) => onChangeInput('duration', e.target.value)}
                />
            </p>
        </div>
    </section>

}
