import React from "react";
import PropTypes from "prop-types";
const Tabs = ({ display, handleDisplayState }) => {

    const stateList = ["All", "Active", "Completed"];
    let tabArray = [];
    stateList.forEach((e,i) => {
        let tab = <Tab key={i} name={e} handleDisplayState={handleDisplayState}/>;
        tabArray.push(tab);
    });
        
    return <div className="tab-group">
        <ul className={`${display} clearfix`}>
            {tabArray}
        </ul>
    </div>;
};
Tabs.propTypes = {
    display: PropTypes.string.isRequired,
    handleDisplayState: PropTypes.func.isRequired
};

const Tab = (props) => (
    <li onClick={props.handleDisplayState}>
        {props.name}
    </li>
);

export default Tabs;