import React from "react";
import PropTypes from "prop-types";
const Input = ({handleSubmit, changeInputeValue, handleAddList ,value}) => (
    <div className="input-group">
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" value={value} onChange={changeInputeValue}/>
            </label>
            <input type="submit" value="ENTER" onClick={handleAddList}/>
        </form>
    </div>
);
Input.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    changeInputeValue: PropTypes.func.isRequired,
    handleAddList: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};
export default Input;