const setValue = (property, value) => {
    if (value) {
        document.documentElement.style.setProperty(`--${property}`, value);

        const input = document.querySelector(`#${property}`);
        if (input) {
            value = value.replace('px', '');
            input.value = value;
        }
    }
};

const setValueFromLocalStorage = property => {
    let value = localStorage.getItem(property);
    setValue(property, value);
};

const setTheme = options => {
    for (let option of Object.keys(options)) {
        const property = option;
        const value = options[option];

        setValue(property, value);
        localStorage.setItem(property, value);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setValueFromLocalStorage('color-background');
    setValueFromLocalStorage('color-text-pri');
    setValueFromLocalStorage('color-text-acc');
    
    initialize_buttons();
});

function initialize_buttons () {
    var btns = document.getElementById('modal-theme');
    
    Object.keys(themes).forEach(function(name) {
        var stylestr = "background-color: " + themes[name]['color-background'] + ";border: 4px solid " + themes[name]['color-text-acc'] + ";color: " + themes[name]['color-text-pri'] + ";";
        btns.innerHTML += '<button data-theme="' + name + '" class="theme-button" style="' + stylestr + '">' + name + '</button>';
    });
    
    const dataThemeButtons = document.querySelectorAll('[data-theme]');

    for (let i = 0; i < dataThemeButtons.length; i++) {
        dataThemeButtons[i].addEventListener('click', () => {
            const theme = dataThemeButtons[i].dataset.theme;

            setTheme(themes[theme]);
        })
    }
}
    
