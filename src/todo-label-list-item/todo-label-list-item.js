import React from 'react';
import Span from '../span/span';

const TodoLabelListItem = () => {
    return (
        <label>
            <Span className={'description'} text={'Completed task'} />
            <Span className={'created'} text={'created 17 seconds ago'} />
        </label>
    );
}

export default TodoLabelListItem;