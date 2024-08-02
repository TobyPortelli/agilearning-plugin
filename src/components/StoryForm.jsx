import React from 'react';
import { useHookstate } from '@hookstate/core';
import StoryBlockInput from './StoryBlockInput';

const StoryForm = () => {
    const state = useHookstate({
        storyBlocks: [
            {
                storyText: '',
                question: '',
                answers: [''],
                correctAnswer: ''
            }
        ]
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const storyData = state.get();
        console.log('Story Data:', storyData);
        // logic to submit story data
    };

    const handleAddStoryBlock = () => {
        state.storyBlocks.merge([{
            storyText: '',
            question: '',
            answers: [''],
            correctAnswer: ''
        }]);
    };

    return (
        <form onSubmit={handleSubmit}>
            {state.storyBlocks.map((blockState, index) => (
                <StoryBlockInput key={index} index={index} blockState={blockState} />
            ))}
            <button type="button" onClick={handleAddStoryBlock}>Add Story Block</button>
            <button type="submit">Submit Story</button>
        </form>
    );
};

export default StoryForm;
