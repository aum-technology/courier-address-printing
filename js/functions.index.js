function populateSenders() {
    let x = window.setInterval(() => {
        if (Object.keys(window.sortedAddressData).length) {
            const senderKeys = Object.keys(window.sortedAddressData.sender_list);
            clearInterval(x);
            populateDataList(getValueArrayByKey(window.sortedAddressData['sender_list'], 'code', true), senderCodeList);
            populateDataList(getValueArrayByKey(window.sortedAddressData['sender_list'], 'name', true), senderList);
            senderCode.value = senderKeys.length ? JSON.parse(window.sortedAddressData['sender_list'][senderKeys[0]]).code : "";
            senderCode.setAttribute('sender-id', senderKeys.length ? senderKeys[0] : "");
            if (senderCode.getAttribute('sender-id')) {
                populateSenderData();
            }
        }
    }, 100);
}
function populateSenderData() {
    let code = senderCode.getAttribute('sender-id');
    if (!code) {
        return;
    }
    let data = JSON.parse(window.sortedAddressData.sender_list[code]);
    populateElemsWithData([
        {
            elem: senderCode,
            value: data['code']
        },
        {
            elem: sender,
            value: data['name']
        },
        {
            elem: senderAddressLine1,
            value: data['address_line_1']
        },
        {
            elem: senderAddressLine2,
            value: data['address_line_2']
        },
        {
            elem: senderAddressLine3,
            value: data['address_line_3']
        },
        {
            elem: senderAddressLine4,
            value: data['address_line_4']
        },
        {
            elem: senderCity,
            value: data['city']
        },
        {
            elem: senderState,
            value: data['state']
        },
        {
            elem: senderPincode,
            value: data['pincode']
        },
        {
            elem: senderMobile,
            value: data['mobile']
        }, {
            elem: senderEmail,
            value: data['email']
        }
    ]);
    setReceiverSectionForNew(true);
}
function populateReceiverData() {
    let code = receiverCode.getAttribute('receiver-id');
    if (!code) {
        return;
    }
    let data = JSON.parse(window.sortedAddressData.receiver_list[code]);
    populateElemsWithData([
        {
            elem: receiverCode,
            value: data['code']
        },
        {
            elem: receiver,
            value: data['name']
        },
        {
            elem: receiverAddressLine1,
            value: data['address_line_1']
        },
        {
            elem: receiverAddressLine2,
            value: data['address_line_2']
        },
        {
            elem: receiverAddressLine3,
            value: data['address_line_3']
        },
        {
            elem: receiverAddressLine4,
            value: data['address_line_4']
        },
        {
            elem: receiverCity,
            value: data['city']
        },
        {
            elem: receiverState,
            value: data['state']
        },
        {
            elem: receiverPincode,
            value: data['pincode']
        },
        {
            elem: receiverMobile,
            value: data['mobile']
        },
        {
            elem: receiverEmail,
            value: data['email']
        },
        {
            elem: receiverTransportMode,
            value: data['transport_mode']
        },
        {
            elem: receiverHeadLine,
            value: data['headline']
        },
        {
            elem: receiverRemark,
            value: data['remark']
        }
    ]);
}
function populateReceivers() {
    if (Object.keys(window.sortedAddressData).length) {
        let code = senderCode.getAttribute('sender-id');
        if (!code) {
            setReceiverSectionForNew(true);
            return;
        }
        let rList = window.sortedAddressData['receiver_list'];
        let rKeys = Object.keys(rList);
        let fRList = {};
        rKeys.forEach(item => {
            if (item.endsWith(code)) {
                fRList[item] = rList[item];
            }
        })
        populateDataList(getValueArrayByKey(fRList, 'code', true), receiverCodeList);
        populateDataList(getValueArrayByKey(fRList, 'name', true), receiverList);
    }
}
function populateSelectTags() {
    populateSelectTag(regions, receiverState);
    populateSelectTag(regions, senderState);
    populateSelectTag(transportModes, receiverTransportMode);
}
function bindKeys() {
    /** For Receiver Section */
    bindEnterKeyAndEscapeKey([
        {
            element: receiver,
            nextElem: receiverAddressLine1,
            prevElem: receiverCode,
        },
        {
            element: receiverAddressLine1,
            nextElem: receiverAddressLine2,
            prevElem: receiver,
        },
        {
            element: receiverAddressLine2,
            nextElem: receiverAddressLine3,
            prevElem: receiverAddressLine1,
        },
        {
            element: receiverAddressLine3,
            nextElem: receiverAddressLine4,
            prevElem: receiverAddressLine2,
        },
        {
            element: receiverAddressLine4,
            nextElem: receiverCity,
            prevElem: receiverAddressLine3,
        },
        {
            element: receiverCity,
            nextElem: receiverState,
            prevElem: receiverAddressLine4,
        },
        {
            element: receiverState,
            nextElem: receiverPincode,
            prevElem: receiverCity,
        },
        {
            element: receiverPincode,
            nextElem: receiverMobile,
            prevElem: receiverState,
        },
        {
            element: receiverMobile,
            nextElem: receiverEmail,
            prevElem: receiverPincode,
        },
        {
            element: receiverEmail,
            nextElem: receiverTransportMode,
            prevElem: receiverMobile,
        },
        {
            element: receiverTransportMode,
            nextElem: receiverRemark,
            prevElem: receiverEmail,
        },
        {
            element: receiverRemark,
            nextElem: receiverHeadLine,
            prevElem: receiverTransportMode,
        },
        {
            element: receiverHeadLine,
            nextElem: receiverSave,
            prevElem: receiverRemark,
        },
    ]);
    /** For Receiver Section End */

    /** For Sender Section */
    bindEnterKeyAndEscapeKey([
        {
            element: sender,
            nextElem: senderAddressLine1,
            prevElem: sender,
        },
        {
            element: senderAddressLine1,
            nextElem: senderAddressLine2,
            prevElem: sender,
        },
        {
            element: senderAddressLine2,
            nextElem: senderAddressLine3,
            prevElem: senderAddressLine1,
        },
        {
            element: senderAddressLine3,
            nextElem: senderAddressLine4,
            prevElem: senderAddressLine2,
        },
        {
            element: senderAddressLine4,
            nextElem: senderCity,
            prevElem: senderAddressLine3,
        },
        {
            element: senderCity,
            nextElem: senderState,
            prevElem: senderAddressLine4,
        },
        {
            element: senderState,
            nextElem: senderPincode,
            prevElem: senderCity,
        },
        {
            element: senderPincode,
            nextElem: senderMobile,
            prevElem: senderState,
        },
        {
            element: senderMobile,
            nextElem: senderEmail,
            prevElem: senderPincode,
        },
        {
            element: senderEmail,
            nextElem: senderSave,
            prevElem: senderMobile,
        }
    ]);
    /** For Sender Section End */
    /** Binding Controls And Keys For Sender Area Actions */
    bindEnterKeyAndEscapeKeyForButton([
        {
            element: senderSave,
            nextElem: sender,
            prevElem: senderEmail,
            function: saveSender,
        },
        {
            element: senderNew,
            nextElem: sender,
            prevElem: senderEmail,
            function: setSenderSectionForNew,
        },
        {
            element: senderDelete,
            nextElem: sender,
            prevElem: senderEmail,
            function: deleteSender,
        }
    ]);
    /** Binding For Sender Area End */
    /** Binding Controls And Keys For Receiver Area Actions */
    bindEnterKeyAndEscapeKeyForButton([
        {
            element: receiverSave,
            nextElem: receiver,
            prevElem: receiverHeadLine,
            function: saveReceiver,
        },
        {
            element: receiverNew,
            nextElem: receiver,
            prevElem: receiverHeadLine,
            function: setReceiverSectionForNew,
        },
        {
            element: receiverDelete,
            nextElem: receiver,
            prevElem: receiverHeadLine,
            function: deleteReceiver,
        },
        {
            element: receiverPrint,
            nextElem: receiver,
            prevElem: receiverHeadLine,
            function: printReceiver,
        },
        {
            element: printAndSave,
            nextElem: receiver,
            prevElem: receiverHeadLine,
            function: printNSave,
        }
    ]);
    /** Binding For Receiver Area End */
    /** Binding Action Keys For Receiver */
    bindControlKeyEventToElements({
        elements: [receiverCode, receiver, receiverAddressLine1, receiverAddressLine2, receiverAddressLine3, receiverAddressLine4, receiverCity, receiverState, receiverPincode, receiverMobile, receiverEmail, receiverTransportMode, receiverRemark, receiverHeadLine],
        key: 's',
        callback: () => {
            event.preventDefault();
            saveReceiver();
        }
    });
    bindControlKeyEventToElements({
        elements: [receiverCode, receiver, receiverAddressLine1, receiverAddressLine2, receiverAddressLine3, receiverAddressLine4, receiverCity, receiverState, receiverPincode, receiverMobile, receiverEmail, receiverTransportMode, receiverRemark, receiverHeadLine],
        key: 'd',
        callback: () => {
            event.preventDefault();
            deleteReceiver();
        }
    });
    bindControlKeyEventToElements({
        elements: [receiverCode, receiver, receiverAddressLine1, receiverAddressLine2, receiverAddressLine3, receiverAddressLine4, receiverCity, receiverState, receiverPincode, receiverMobile, receiverEmail, receiverTransportMode, receiverRemark, receiverHeadLine],
        key: 'n',
        callback: () => {
            event.preventDefault();
            setReceiverSectionForNew();
        }
    });
    /** Binding Action Keys For Receiver End*/
    /** Binding Action Keys For Sender */
    bindControlKeyEventToElements({
        elements: [senderCode, sender, senderAddressLine1, senderAddressLine2, senderAddressLine3, senderAddressLine4, senderCity, senderState, senderPincode, senderMobile, senderEmail],
        key: 's',
        callback: () => {
            event.preventDefault();
            saveSender();
        }
    });
    bindControlKeyEventToElements({
        elements: [senderCode, sender, senderAddressLine1, senderAddressLine2, senderAddressLine3, senderAddressLine4, senderCity, senderState, senderPincode, senderMobile, senderEmail],
        key: 'd',
        callback: () => {
            event.preventDefault();
            deleteSender();
        }
    });
    bindControlKeyEventToElements({
        elements: [senderCode, sender, senderAddressLine1, senderAddressLine2, senderAddressLine3, senderAddressLine4, senderCity, senderState, senderPincode, senderMobile, senderEmail],
        key: 'n',
        callback: () => {
            event.preventDefault();
            setSenderSectionForNew();
        }
    });
    /** Binding Action Keys For Sender End*/
}
function bindPrintEvent() {
    window.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key === 'p') {
            printReceiver()
            event.preventDefault();
        }
    })
}
function printNSave() {
    printReceiver();
    saveReceiver();
}
function printReceiver(params) {
    let receiverData = {
        name: receiver.value.trim(),
        address_line_1: receiverAddressLine1.value.trim(),
        address_line_2: receiverAddressLine2.value.trim(),
        address_line_3: receiverAddressLine3.value.trim(),
        address_line_4: receiverAddressLine4.value.trim(),
        city: receiverCity.value.trim(),
        state: receiverState.options[receiverState.selectedIndex] ? ("(" + receiverState.options[receiverState.selectedIndex].text.trim() + ")") : "",
        pincode: receiverPincode.value.trim() != "" ? ("(" + receiverPincode.value.trim() + ")") : "",
        contact: (receiverMobile.value.trim() != "" ? ("Contact : " + receiverMobile.value.trim()) : "") + (receiverEmail.value.trim() != "" ? (" Email : " + receiverEmail.value.trim()) : ""),
        transport_mode: receiverTransportMode.options[receiverTransportMode.selectedIndex] ? (("By " + receiverTransportMode.options[receiverTransportMode.selectedIndex].text.trim()).length <= 9 ? ("By " + receiverTransportMode.options[receiverTransportMode.selectedIndex].text.trim()) : receiverTransportMode.options[receiverTransportMode.selectedIndex].text.trim()) : "",
        remark: receiverRemark.value.trim(),
        headline: receiverHeadLine.value.trim()
    };
    let senderData = {
        code: senderCode.value.trim(),
        name: sender.value.trim(),
        address: (senderAddressLine1.value.trim() != "" ? (senderAddressLine1.value.trim().replace(/,(?=[^,]*$)/, '') + ", ") : "") + (senderAddressLine2.value.trim() != "" ? (senderAddressLine2.value.trim().replace(/,(?=[^,]*$)/, '') + ", ") : "") + (senderAddressLine3.value.trim() != "" ? (senderAddressLine3.value.trim().replace(/,(?=[^,]*$)/, '') + ", ") : "") + (senderAddressLine4.value.trim() != "" ? (senderAddressLine4.value.trim().replace(/,(?=[^,]*$)/, '') + ", ") : "") + (senderCity.value.trim() != "" ? (senderCity.value.trim().replace(/,(?=[^,]*$)/, '') + ", ") : "") + (senderState.options[senderState.selectedIndex] ? ((senderState.options[senderState.selectedIndex].text.trim() != "" ? (senderState.options[senderState.selectedIndex].text.trim().replace(/,(?=[^,]*$)/, '') + " - ") : "")) : "") + (senderPincode.value.trim() != "" ? (senderPincode.value.trim().replace(/,(?=[^,]*$)/, '') + ", ") : ""),
        contact: (senderMobile.value.trim() != "" ? ("Contact : " + senderMobile.value.trim().replace(/,(?=[^,]*$)/, '') + ", ") : "") + (senderEmail.value.trim() != "" ? ("Email : " + senderEmail.value.trim().replace(/,(?=[^,]*$)/, '') + ", ") : "")
    };
    saveDataToStorage({
        currentPrintAddress: JSON.stringify({
            sender: senderData,
            receiver: receiverData
        })
    }).then(() => {
        window.open("../html/printing.html");
    });

}
function saveSender() {
    let senderId = senderCode.getAttribute('sender-id');
    let editMode = false;
    if (!senderId) {
        senderId = "S_" + (window.sortedAddressData.sender_increment_id ?? 0);
    } else {
        editMode = true;
        let result = confirm("Are you sure to Edit?");
        if (!result) {
            return;
        }
    }
    if (!sender.value.trim()) {
        return;
    }
    let senderData = {
        [senderId]: JSON.stringify({
            code: senderCode.value,
            name: sender.value,
            address_line_1: senderAddressLine1.value,
            address_line_2: senderAddressLine2.value,
            address_line_3: senderAddressLine3.value,
            address_line_4: senderAddressLine4.value,
            city: senderCity.value,
            state: senderState.value,
            pincode: senderPincode.value,
            mobile: senderMobile.value,
            email: senderEmail.value
        }
        )
    };
    saveDataToStorage(senderData).then((r) => {
        if (r === true) {
            if (!editMode) {
                saveDataToStorage({ sender_increment_id: parseInt(window.sortedAddressData.sender_increment_id ?? 0) + 1 }).then(
                    () => {
                        getAddressData().then((res) => {
                            window.sortedAddressData = res;
                            populateDataList(getValueArrayByKey(window.sortedAddressData['sender_list'], 'code', true), senderCodeList);
                            populateDataList(getValueArrayByKey(window.sortedAddressData['sender_list'], 'name', true), senderList);
                        });
                    }
                );
            } else {
                getAddressData().then((res) => {
                    window.sortedAddressData = res;
                    populateDataList(getValueArrayByKey(window.sortedAddressData['sender_list'], 'code', true), senderCodeList);
                    populateDataList(getValueArrayByKey(window.sortedAddressData['sender_list'], 'name', true), senderList);
                });
            }
            setSenderSectionForNew(true);
            sender.focus();
        } else {
            alert(r);
            console.log(r);
        }
    });
}
function saveReceiver() {
    let receiverId = receiverCode.getAttribute('receiver-id');
    let editMode = false;
    if (!receiverId) {
        receiverId = "R_" + (window.sortedAddressData.receiver_increment_id ?? 0) + "_" + (senderCode.getAttribute('sender-id') ? senderCode.getAttribute('sender-id') : ("S_" + window.sortedAddressData.sender_increment_id ?? 0));
    } else {
        editMode = true;
        let result = confirm("Are you sure to Edit?");
        if (!result) {
            return;
        }
    }
    if (!receiver.value.trim()) {
        return;
    }
    let receiverData = {
        [receiverId]: JSON.stringify({
            code: receiverCode.value,
            name: receiver.value,
            address_line_1: receiverAddressLine1.value,
            address_line_2: receiverAddressLine2.value,
            address_line_3: receiverAddressLine3.value,
            address_line_4: receiverAddressLine4.value,
            city: receiverCity.value,
            state: receiverState.value,
            pincode: receiverPincode.value,
            mobile: receiverMobile.value,
            email: receiverEmail.value,
            transport_mode: receiverTransportMode.value,
            headline: receiverHeadLine.value,
            remark: receiverRemark.value
        }
        )
    };
    saveDataToStorage(receiverData).then((r) => {
        if (r === true) {
            if (!editMode) {
                saveDataToStorage({ receiver_increment_id: parseInt(window.sortedAddressData.receiver_increment_id ?? 0) + 1 }).then(
                    () => {
                        getAddressData().then((res) => {
                            window.sortedAddressData = res;
                            populateReceivers();
                        });
                    }
                );
            } else {
                getAddressData().then((res) => {
                    window.sortedAddressData = res;
                    populateReceivers();
                });
            }
            setReceiverSectionForNew(true);
            receiver.focus();
        } else {
            alert(r);
            console.log(r);
        }
    });
}
function deleteSender() {

    let senderId = senderCode.getAttribute('sender-id');
    if (!senderId) {
        return;
    }
    let result = confirm("Are you sure to delete?");
    if (result) {
        removeDataFromStorage(senderId);
        getAddressData().then((res) => {
            window.sortedAddressData = res;
            populateSenders();
        });
        setSenderSectionForNew(true);
    }


}
function deleteReceiver() {

    let receiverId = receiverCode.getAttribute('receiver-id');
    if (!receiverId) {
        return;
    }
    let result = confirm("Are you sure to delete?");
    if (result) {
        removeDataFromStorage(receiverId);
        getAddressData().then((res) => {
            window.sortedAddressData = res;
            populateDataList(getValueArrayByKey(window.sortedAddressData['receiver_list'], 'code', true), receiverCodeList);
            populateDataList(getValueArrayByKey(window.sortedAddressData['receiver_list'], 'name', true), receiverList);
        });
        setReceiverSectionForNew(true);
    }


}
function setSenderSectionForNew(bypass = false) {
    if (senderCode.getAttribute('sender-id') && !bypass) {
        let result = confirm('Are you sure to reset?');
        if (!result) {
            return;
        }
    }
    senderCode.setAttribute('sender-id', '');
    senderCode.value = "";
    sender.value = "";
    senderAddressLine1.value = "";
    senderAddressLine2.value = "";
    senderAddressLine3.value = "";
    senderAddressLine4.value = "";
    senderCity.value = "";
    senderState.value = "";
    senderPincode.value = "";
    senderMobile.value = "";
    senderEmail.value = "";
    setReceiverSectionForNew(true);
}
function setReceiverSectionForNew(bypass) {
    if (receiverCode.getAttribute('receiver-id') && !bypass) {
        let result = confirm('Are you sure to reset?');
        if (!result) {
            return;
        }
    }
    receiverCode.setAttribute('receiver-id', '');
    receiverCode.value = "";
    receiver.value = "";
    receiverAddressLine1.value = "";
    receiverAddressLine2.value = "";
    receiverAddressLine3.value = "";
    receiverAddressLine4.value = "";
    receiverCity.value = "";
    receiverState.value = "";
    receiverPincode.value = "";
    receiverMobile.value = "";
    receiverEmail.value = "";
    receiverTransportMode.value = "";
    receiverHeadLine.value = "";
    receiverRemark.value = "";
    receiverCodeList.innerHTML = "";
    receiverList.innerHTML = "";
}
function bindInputEventForSenderSection() {
    senderCode.addEventListener('blur', () => {
        let selectedOption = senderCodeList.querySelector('option[value="' + senderCode.value + '"]');
        if (selectedOption) {
            senderCode.setAttribute('sender-id', selectedOption.getAttribute('data-id'));
            populateSenderData();
        }
    });
    sender.addEventListener('blur', () => {
        let selectedOption = senderList.querySelector('option[value="' + sender.value + '"]');
        if (selectedOption) {
            senderCode.setAttribute('sender-id', selectedOption.getAttribute('data-id'));
            populateSenderData();
        }
    });
}
function bindInputEventForReceiverSection() {
    receiverCode.addEventListener('blur', () => {
        let selectedOption = receiverCodeList.querySelector('option[value="' + receiverCode.value + '"]');
        if (selectedOption) {
            receiverCode.setAttribute('receiver-id', selectedOption.getAttribute('data-id'));
            populateReceiverData();
        }
    });
    receiver.addEventListener('blur', () => {
        let selectedOption = receiverList.querySelector('option[value="' + receiver.value + '"]');
        if (selectedOption) {
            receiverCode.setAttribute('receiver-id', selectedOption.getAttribute('data-id'));
            populateReceiverData();
        }
    });
    receiverCode.addEventListener('focus', () => {
        populateReceivers();
    });
    receiver.addEventListener('focus', () => {
        populateReceivers();
    });
}
function bindFunctionsForMasterActions() {
    exportData.onclick = () => {
        getDataFromStorage().then(r => {
            downloadFile('courier_address_data_export.json', JSON.stringify(r));
        });
    }
    importData.onclick = () => {
        let result = confirm("Are you sure to import data? This will erase current data and bring new data from the selected file! This action can't be reversed.");
        if (!result) {
            return;
        }
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.addEventListener('change', function () {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = function (event) {
                try {
                    const data = JSON.parse(event.target.result);
                    if (!Object.keys(data).length == 0) {
                        getDataFromStorage().then(r => {
                            downloadFile('courier_address_data_before_import.json', JSON.stringify(r));
                            clearStorage().then((r) => {
                                saveDataToStorage(data).then(r => {
                                    if (r == true) {
                                        alert("Data imported successfully!");
                                    } else {
                                        alert("Error occured while importing data!");
                                    }
                                    window.location.reload();
                                });
                            });
                        });
                    } else {
                        alert('File is empty!');
                    }
                } catch (error) {
                    alert(error);
                }
            };
            reader.readAsText(file);
        });
        input.click();
    }
    clearAllData.onclick = () => {
        let result = confirm("Are you sure to erase the storage? Action can't be reversed!!");
        if (result) {
            getDataFromStorage().then(r => {
                downloadFile('courier_address_data_export.json', JSON.stringify(r));
                clearStorage().then(r => {
                    alert(r);
                    window.location.reload();
                });
            });
            setSenderSectionForNew(true);
            setReceiverSectionForNew(true);
        }
    };
}
function adjustForDesign() {

    if (window.screen.width >= 700 && window.screen.width <= 799) {
        document.body.style.zoom = "50%";
    } else if (window.screen.width >= 800 && window.screen.width <= 899) {
        document.body.style.zoom = "50%";
    } else if (window.screen.width >= 900 && window.screen.width <= 999) {
        document.body.style.zoom = "60%";
    } else if (window.screen.width >= 1000 && window.screen.width <= 1099) {
        document.body.style.zoom = "70%";
    } else if (window.screen.width >= 1100 && window.screen.width <= 1199) {
        document.body.style.zoom = "70%";
    } else if (window.screen.width >= 1200 && window.screen.width <= 1299) {
        document.body.style.zoom = "70%";
    } else if (window.screen.width >= 1300 && window.screen.width <= 1399) {
        document.body.style.zoom = "75%";
    } else if (window.screen.width >= 1400 && window.screen.width <= 1499) {
        document.body.style.zoom = "75%";
    }
    else if (window.screen.width >= 1500 && window.screen.width <= 1599) {
        document.body.style.zoom = "75%";
    }
    else if (window.screen.width >= 1600 && window.screen.width <= 1699) {
        document.body.style.zoom = "90%";
    }
    else {
        document.body.style.zoom = "100%";
    }
}