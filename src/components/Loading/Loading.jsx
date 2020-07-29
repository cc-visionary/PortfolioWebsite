import React from 'react';

const Loading = (props) => (
    <div id='loading'>
        <div className={props.loading ? 'wrapper active' : 'wrapper inactive'}>
            <div className="bg"><div className='el'/></div>
        </div>
    </div>
)

export default Loading