// create a react pure functional component that will toggle the visibility of text
// written by the user take one box and one button, button will toggle visibility
// when text is visible button text should be "hide text" when text is hidden
// text should be "hide text"

import { useState } from "react";

const ToggleText = () => {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [userText, setUserText] = useState('');

    const handleToggleVisibility = () => {
        setIsTextVisible((prev) => !prev); // Toggle the visibility state
    };

    const handleInputChange = (e) => {
        setUserText(e.target.value); // Update text state
    };

    return (
        <div >
            <textarea
                placeholder="Enter your text here"
                value={userText}
                onChange={handleInputChange}
                cols={30} rows={7}
            />
            <br />
            <button onClick={handleToggleVisibility} style={{ padding: '10px' }}>
                {isTextVisible ? 'Hide Text' : 'Show Text'}
            </button>
            <br />
            <br />
            <div >
                {isTextVisible && <p>{userText}</p>}
            </div>
            <div className="space"></div>
        </div>
    );
};

export default ToggleText;
