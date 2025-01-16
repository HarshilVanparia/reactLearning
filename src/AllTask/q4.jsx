// create a react pure functional component that will take text input and print total
// number of characters

import { useState } from "react";


const CharacterCounter = () => {
    const [text, setText] = useState('');
    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <textarea
                placeholder="Type here..."
                value={text}
                onChange={handleInputChange}
                cols={30} rows={7}
            />
            <br />
            <div >
                Total Characters: {text.length}
            </div>

            <div className="space"></div>
        </div>
    );
};

export default CharacterCounter;
