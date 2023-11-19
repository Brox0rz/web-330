/* theme.js*/

/**
    Author: Brock Hemsouvanh
    Original Theme Author: Professor Krasso
    Date: 10/16/23 (updated 11/18/23)
    Theme File Description:
    This file provides the styling for light and dark themes using JS functions to access CSS variables.
**/

        /**
         * Set the default theme to light if one has not been set in the browsers localStorage
         */
        function setDefaultTheme() {
            if (!localStorage.getItem('mode')) {
                localStorage.setItem('mode', 'light-theme'); // Set a default theme
                localStorage.setItem('iconMode', 'fa-toggle-off');
                localStorage.setItem('iconText', 'Light Mode');
                applyTheme();
            } else {
                applyTheme(); // Apply the theme if it's already set in localStorage
            }
        }
        
        function applyTheme() {
            document.body.className = localStorage.getItem('mode');
            document.getElementById('icon-mode').className = `fa ${localStorage.getItem('iconMode')} pull-right`;
            document.getElementById('icon-text').textContent = localStorage.getItem('iconText');
        }
        
        // Call setDefaultTheme when the script loads
        setDefaultTheme();
        

        /**
         * Function to switch the users selected website theme
         * @param x (this instance)
         */
        function toggleMode(x)
        {
            let colorTheme = document.body.classList; // get the body's CSS class
            let iconMode = x.classList; // get the current classes assigned to the triggered button

            /**
             * If the current body class is set to the light-theme, update the user's preference to the dark-theme in the browsers
             * local storage.
             */
            if (colorTheme.value === "light-theme")
            {
                localStorage.clear();
                localStorage.setItem("mode", "dark-theme");
                localStorage.setItem("iconMode", "fa-toggle-on");
                localStorage.setItem("iconText", "Dark Mode");
            }
            /**
             * If the current body class is set to the dark-theme, update the user's preference to the light-theme in the browsers
             * local storage.
             */
            else
            {
                localStorage.clear();
                localStorage.setItem("mode", "light-theme");
                localStorage.setItem("iconMode", "fa-toggle-off");
                localStorage.setItem("iconText", "Light Mode");
            }

            /**
             * Apply the updated selection to the HTML page elements
             */
            colorTheme.value = localStorage.getItem("mode");
            iconMode.value = `fa ${localStorage.getItem("iconMode")} pull-right`;
            document.getElementById("icon-text").innerHTML = localStorage.getItem("iconText");
        }
