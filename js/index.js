async function main() {
    /**
     * Initialization Start
     */
    setAutoIncrementIds(); /* Independent */
    window.sortedAddressData = {};
    getAddressData().then((r) => {
        window.sortedAddressData = r;
    });
    populateSenders(); /* Depends On window.sortedAddressData */
    populateSelectTags();
    bindKeys();
    bindInputEventForSenderSection();
    bindInputEventForReceiverSection();
    bindPrintEvent();
    bindFunctionsForMasterActions();
    /** 
     * Initialization End 
     */
}
main();