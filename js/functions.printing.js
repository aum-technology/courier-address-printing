function populateAddress(data) {
    receiverCity.innerHTML = data.receiver.city ? data.receiver.city.replace(/,(?=[^,]*$)/, '') : null;
    toReceiverCity.innerHTML = data.receiver.city ? data.receiver.city.replace(/,(?=[^,]*$)/, '') : null;
    receiverName.innerHTML = data.receiver.name ? data.receiver.name.replace(/,(?=[^,]*$)/, '') : null;
    if (!data.receiver.address_line_1) {
        if (!data.shouldPrintBlank) {
            receiverAddressLine1.style.display = "none";
        } else {
            receiverAddressLine1.innerHTML = "->";
        }
    } else {
        receiverAddressLine1.innerHTML = data.receiver.address_line_1.replace(/,(?=[^,]*$)/, '') + ",";
    }
    if (!data.receiver.address_line_2) {
        if (!data.shouldPrintBlank) {
            receiverAddressLine2.style.display = "none";
        } else {
            receiverAddressLine2.innerHTML = "->";
        }
    } else {
        receiverAddressLine2.innerHTML = data.receiver.address_line_2.replace(/,(?=[^,]*$)/, '') + ",";
    }
    if (!data.receiver.address_line_3) {
        if (!data.shouldPrintBlank) {
            receiverAddressLine3.style.display = "none";
        } else {
            receiverAddressLine3.innerHTML = "->";
        }
    } else {
        receiverAddressLine3.innerHTML = data.receiver.address_line_3.replace(/,(?=[^,]*$)/, '') + ",";
    }
    if (!data.receiver.address_line_4) {
        if (!data.shouldPrintBlank) {
            receiverAddressLine4.style.display = "none";
        } else {
            receiverAddressLine4.innerHTML = "->";
        }
    } else {
        receiverAddressLine4.innerHTML = data.receiver.address_line_4.replace(/,(?=[^,]*$)/, '') + ",";
    }
    if (!data.receiver.contact) {
        if (!data.shouldPrintBlank) {
            receiverContact.style.display = "none";
        } else {
            receiverContact.innerHTML = "->";
        }
    } else {
        receiverContact.innerHTML = data.receiver.contact.replace(/,(?=[^,]*$)/, '') + ",";
    }
    if (!data.receiver.pincode) {
        if (!data.shouldPrintBlank) {
            receiverPincode.style.display = "none";
        }
    } else {
        receiverPincode.innerHTML = data.receiver.pincode.replace(/,(?=[^,]*$)/, '');
    }
    if (!data.receiver.state) {
        if (!data.shouldPrintBlank) {
            receiverState.style.display = "none";
        }
    } else {
        receiverState.innerHTML = data.receiver.state;
    }
    if (!data.receiver.transport_mode) {
        if (!data.shouldPrintBlank) {
            receiverTransportMode.style.display = "none";
        }
    } else {
        receiverTransportMode.innerHTML = data.receiver.transport_mode;
    }
    if (!data.receiver.remark) {
        if (!data.shouldPrintBlank) {
            receiverRemark.style.display = "";
        } else {
            receiverRemark.innerHTML = "->";
        }
    } else {
        receiverRemark.innerHTML = data.receiver.remark.replace(/,(?=[^,]*$)/, '');
    }
    if (!data.receiver.headline) {
        if (!data.shouldPrintBlank) {
            receiverHeadLine.style.display = "";
        } else {
            receiverHeadLine.innerHTML = "->";
            receiverHeadLine.style.visibility = "hidden";
        }
    } else {
        receiverHeadLine.innerHTML = data.receiver.headline.replace(/,(?=[^,]*$)/, '');
    }

    senderName.innerHTML = data.sender.name ? data.sender.name.replace(/,(?=[^,]*$)/, '') : null;
    if (!data.sender.address) {
        if (!data.shouldPrintBlank) {
            senderAddress.style.display = "";
        }
    } else {
        senderAddress.innerHTML = data.sender.address.replace(/,(?=[^,]*$)/, '') + ".";
    }

    if (!data.sender.contact) {
        if (!data.shouldPrintBlank) {
            senderContact.style.display = "";
        }
    } else {
        senderContact.innerHTML = data.sender.contact.replace(/,(?=[^,]*$)/, '');
    }
    window.print();
    window.close();
}