import React from 'react';
import StyledStartButton from './StyledStartButton';

function startButton({callback}) {
    return <StyledStartButton onClick={callback}>
        Start Game
    </StyledStartButton>
}

export default startButton;