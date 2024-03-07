function populateDataList(data, elem, mode = "replace") {
    if (mode == "replace") {
        elem.innerHTML = '';
    }
    data.forEach(item => {
        const option = document.createElement('option');
        if (typeof (item) == "object") {
            option.value = item[Object.keys(item)[0]];
            option.setAttribute('data-id', Object.keys(item)[0]);
        } else {
            option.value = item;
        }
        elem.appendChild(option);
    });
}
function populateSelectTag(data, elem, removeDefault = true, mode = "replace") {
    if (mode == "replace") {
        elem.innerHTML = "";
    }
    data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.value;
        option.textContent = item.text;
        elem.appendChild(option);
    });
    if (removeDefault) {
        elem.value = "";
    }
}
function getValueArrayByKey(data, key, bindKey) {
    let returnData = [];
    Object.keys(data).forEach(item => {
        returnData.push(bindKey ? ({ [item]: JSON.parse(data[item])[key] }) : JSON.parse(data[item])[key]);
    });
    return returnData;
}
function populateElemsWithData(data) {
    data.forEach(item => {
        item.elem.value = item.value;
    })
}
function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();

    // Cleanup
    window.setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 1000);
}
