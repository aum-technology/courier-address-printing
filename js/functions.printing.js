function populateAddress(data) {
    receiverCity.innerHTML = data.receiver.city ? data.receiver.city.replace(/,(?=[^,]*$)/, '') : null;
    toReceiverCity.innerHTML = data.receiver.city ? data.receiver.city.replace(/,(?=[^,]*$)/, '') : null;
    receiverName.innerHTML = data.receiver.name ? data.receiver.name.replace(/,(?=[^,]*$)/, '') : null;
    if (!data.receiver.address_line_1) {
        receiverAddressLine1.style.display = "none";
    } else {
        receiverAddressLine1.innerHTML = data.receiver.address_line_1.replace(/,(?=[^,]*$)/, '') + ",";
    }
    if (!data.receiver.address_line_2) {
        receiverAddressLine2.style.display = "none";
    } else {
        receiverAddressLine2.innerHTML = data.receiver.address_line_2.replace(/,(?=[^,]*$)/, '') + ",";
    }
    if (!data.receiver.address_line_3) {
        receiverAddressLine3.style.display = "none";
    } else {
        receiverAddressLine3.innerHTML = data.receiver.address_line_3.replace(/,(?=[^,]*$)/, '') + ",";
    }
    if (!data.receiver.address_line_4) {
        receiverAddressLine4.style.display = "none";
    } else {
        receiverAddressLine4.innerHTML = data.receiver.address_line_4.replace(/,(?=[^,]*$)/, '') + ",";
    }
    if (!data.receiver.contact) {
        receiverContact.style.display = "none";
    } else {
        receiverContact.innerHTML = data.receiver.contact.replace(/,(?=[^,]*$)/, '') + ",";
    }
    if (!data.receiver.pincode) {
        receiverPincode.style.display = "none";
    } else {
        receiverPincode.innerHTML = data.receiver.pincode.replace(/,(?=[^,]*$)/, '');
    }
    if (!data.receiver.state) {
        receiverState.style.display = "none";
    } else {
        receiverState.innerHTML = data.receiver.state;
    }
    if (!data.receiver.transport_mode) {
        receiverTransportMode.style.display = "none";
    } else {
        receiverTransportMode.innerHTML = data.receiver.transport_mode;
    }
    if (!data.receiver.remark) {
        receiverRemark.style.display = "none";
    } else {
        receiverRemark.innerHTML = data.receiver.remark.replace(/,(?=[^,]*$)/, '');
    }
    if (!data.receiver.headline) {
        receiverHeadLine.style.display = "none";
    } else {
        receiverHeadLine.innerHTML = data.receiver.headline.replace(/,(?=[^,]*$)/, '');
    }

    senderName.innerHTML = data.sender.name ? data.sender.name.replace(/,(?=[^,]*$)/, '') : null;
    if (!data.sender.address) {
        senderAddress.style.display = "none";
    } else {
        senderAddress.innerHTML = data.sender.address.replace(/,(?=[^,]*$)/, '') + ".";
    }

    if (!data.sender.contact) {
        senderContact.style.display = "none";
    } else {
        senderContact.innerHTML = data.sender.contact.replace(/,(?=[^,]*$)/, '');
    }
    window.setTimeout(() => {
        window.print();
        window.close();
    }, 300);
}