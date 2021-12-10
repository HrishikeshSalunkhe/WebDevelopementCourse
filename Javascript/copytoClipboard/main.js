
        const copyText = document.querySelector("textarea[name= 'copyText']");
        const moverButton = document.querySelector(".moverButton");
        const copyButton = document.querySelector(".copyButton");
        const outputText = document.querySelector("textarea[name= 'outputText']");

        //Move text
        moverButton.addEventListener("click", moveText);
        function moveText() {
            let temp = copyText.value;
            console.log(temp);
            outputText.value = temp;

        }

        // Copy text
        copyButton.addEventListener("click", copyTxt);
        function copyTxt() {
            let temp = copyText.value;
            copytoClipboard(temp);
        }

        function copytoClipboard(str) {
            const textarea = document.createElement("textarea");
            textarea.value = str;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);

        }