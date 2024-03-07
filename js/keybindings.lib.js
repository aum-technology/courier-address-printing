function bindEnterKeyAndEscapeKeyForButton(params) {
    params.forEach((param) => {
        param.element.onkeydown = function (event) {
            if (event.key == "Escape") {
                param.prevElem.focus();
                if (param.prevElem.type == "text" || param.prevElem.type == "textarea") {
                    param.prevElem.select();
                }
            }
        };
        param.element.onclick = () => {
            bindClickEventForButtonWithFocus({ callback: param.function, nextElem: param.nextElem });
            if (param.nextElem.type == "text" || param.nextElem.type == "textarea") {
                param.nextElem.select();
            }
        };
    });
};
function bindEnterKeyAndEscapeKey(params) {
    params.forEach((param) => {
        param.element.addEventListener(
            "keydown",
            function (event) {
                try {
                    if (event.key == "Enter") {
                        event.preventDefault();
                        param.nextElem.focus();
                        if (param.nextElem.type == "text" || param.nextElem.type == "textarea") {
                            param.nextElem.select();
                        }
                    } else if (event.key == "Escape") {
                        param.prevElem.focus();
                        if (param.prevElem.type == "text" || param.prevElem.type == "textarea") {
                            param.prevElem.select();
                        }
                    }
                } catch (error) {
                    console.log(param);
                    console.log(error);
                }
            },
            true
        );
    });
};
function bindClickEventForButtonWithFocus(params) {
    if (params.nextElem) {
        params.nextElem.focus();
    } else if (params.prevElem) {
        params.prevElem.focus();
    }
    params.callback();
}
function bindControlKeyEventToElements(params) {
    params.elements.forEach(item => {
        item.addEventListener('keydown', (event) => {
            if (event.ctrlKey && event.key === params.key) {
                params.callback();
            }
        })
    })
}