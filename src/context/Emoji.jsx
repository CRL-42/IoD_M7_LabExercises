// Exercise 3.
import { useState, createContext, useContext } from "react";

const EmojiContext = createContext();

export function Emoji(props) {
    const [mood, setEmoji] = useState('😊')

    const handleChangeMood = () => {
        let newMood = '😊';
        if (mood === '😊') newMood = '🤤';

        setEmoji(newMood)
    }

    return (
        <EmojiContext.Provider value={{mood, handleChangeMood}}>
            {props.children}
        </EmojiContext.Provider>
    )
}

export const useEmojiContext = () => {
    return useContext(EmojiContext);
}

// Exercise 3 end.