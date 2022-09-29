import React from 'react';

const Header = ({className}) => {
    return (
        <header className={className}>
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus />
        </header>
    );
};

export default Header;