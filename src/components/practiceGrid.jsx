import React from 'react';
import '../../styles/practiceGrid.css';
import '../../styles/practiceStyles.css';

function GridExample(){
    return(
        <React.Fragment>
            <div className='container'>
            <div className='item'>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
        </div>
        <div className='container-areas'>
            <div className='header item'>1</div>
            <div className='sidebars-1 item'>2</div>
            <div className='content'>3</div>
            <div className='widgets'>4</div>
            <div className='sidebars-2'>5</div>
            <div className='footer'>6</div>
        </div>
        </React.Fragment>
    )
}

export { GridExample };