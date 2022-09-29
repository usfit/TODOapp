import React from "react";

import FooterList from '../footer-list/footer-list';
import Button from '../button/button';
import Span from '../span/span';

import './footer.css'

const Footer = ({className}) => {
    return (
        <footer className={className}>
            <Span className={"todo-count"} text={'1 items left'} />
            <FooterList className={'filters'}/>
            <Button className={'clear-completed'} text={'Clear completed'}/>
        </footer>
    );
}

export default Footer;