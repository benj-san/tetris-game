import React from 'react';
import {createStage} from '../../gameHelpers';
import {StyledTetrisWrapper, StyledTetris} from './StyledTetris';
import Stage from '../Stage/Stage';
import Display from './../Display/Display';
import StartButton from './../StartButton/StartButton';

function Tetris() {
    return <StyledTetrisWrapper>
        <StyledTetris>
            <Stage stage={createStage()} />
            <aside>
                <div>
                    <Display text="Score" />
                    <Display text="Rows" />
                    <Display text="Level" />
                </div>
                <StartButton />
            </aside>
        </StyledTetris>
    </StyledTetrisWrapper>
}

export default Tetris;