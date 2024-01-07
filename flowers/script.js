


        // Set the initial color on page load
        document.documentElement.style.setProperty('--main-color', localStorage.getItem('--main-color'));

        function changeColor(selectedColor) {
            // Set the background color of the body to the selected color
            document.documentElement.style.setProperty('--main-color', selectedColor);

            // Save the selected color in localStorage
            localStorage.setItem('--main-color', selectedColor);
        }

