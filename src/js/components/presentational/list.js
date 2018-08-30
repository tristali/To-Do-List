import React from "react";
import PropTypes from "prop-types";
const Lists = ({ list , handleDel ,handleListState}) => {

    let listsArray = [];
    list.forEach((e,i) => {
        let liste = <List key={i} list={e} id={i} handleDel={handleDel} handleListState={handleListState}/>;
        listsArray.push(liste);
    });

    return <div className="list-group">
        <ul>{listsArray}</ul>
    </div>;
};
Lists.propTypes = {
    list: PropTypes.array.isRequired,
    handleDel: PropTypes.func.isRequired, 
    handleListState: PropTypes.func.isRequired
};
export default Lists;

const List = (props) => (
    <li id={props.id} 
        className={`${props.list.active} clearfix`}>
        <span onClick={props.handleListState}>{props.list.content}</span>
        <span onClick={props.handleDel}></span>
    </li>
);