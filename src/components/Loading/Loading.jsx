import React from 'react';

const Loading = (props) => (
    <div id='loading'>
        <div className={props.loading ? 'wrapper active' : 'wrapper inactive'}>
            <div class="bg"><div class='el'/></div>
        </div>
    </div>
)

export default Loading