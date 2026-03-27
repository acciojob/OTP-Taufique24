//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes.forEach((input, index) => {

    // Typing forward
    input.addEventListener("input", (e) => {
        const value = e.target.value;

        // Allow only digits
        if (!/^[0-9]$/.test(value)) {
            input.value = "";
            return;
        }

        // Move to next input
        if (value && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    // Backspace behavior
    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (input.value === "" && index > 0) {
                codes[index - 1].focus();
            } else {
                input.value = "";
            }
        }
    });

});