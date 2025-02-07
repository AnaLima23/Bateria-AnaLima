document.addEventListener("DOMContentLoaded", () => {
    const keys = document.querySelectorAll(".key");
    const input = document.getElementById("input");
    const button = document.querySelector(".composer button");

    const playSound = (soundId) => {
        const audio = document.getElementById(`s_${soundId}`);
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    };

    const activateKey = (keyElement) => {
        keyElement.classList.add("active");
        setTimeout(() => keyElement.classList.remove("active"), 150);
    };

    document.addEventListener("keydown", (event) => {
        const keyElement = document.querySelector(`[data-key="key${event.key}"]`);
        if (keyElement) {
            playSound(`key${event.key}`);
            activateKey(keyElement);
        }
    });

    keys.forEach((key) => {
        key.addEventListener("click", () => {
            const keyValue = key.getAttribute("data-key");
            playSound(keyValue);
            activateKey(key);
        });
    });

    button.addEventListener("click", () => {
        const composition = input.value.toLowerCase();
        let delay = 0;
        
        composition.split("").forEach((char) => {
            setTimeout(() => {
                const keyElement = document.querySelector(`[data-key="key${char}"]`);
                if (keyElement) {
                    playSound(`key${char}`);
                    activateKey(keyElement);
                }
            }, delay);
            delay += 400;
        });
    });
});