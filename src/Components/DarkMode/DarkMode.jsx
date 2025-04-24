import { useState, useEffect } from 'react';

function useDarkMode() {
    // Check if dark mode preference is saved in localStorage
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true'
    );

    useEffect(() => {
        // Update localStorage when dark mode changes
        localStorage.setItem('darkMode', isDarkMode);

        // Apply or remove dark class to/from the document
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return [isDarkMode, setIsDarkMode];
}

export default useDarkMode;