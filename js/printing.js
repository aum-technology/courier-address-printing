getDataFromStorage('currentPrintAddress').then((data) => {
    populateAddress(JSON.parse(data));
})