async function saveDataToStorage(object) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.set(object, function () {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(true);
      }
    });
  });
}
async function getDataFromStorage(key) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(key, function (result) {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        if (typeof key == "string") {
          resolve(result[key]);
        } else {
          resolve(result);
        }
      }
    });
  });
}
async function removeDataFromStorage(key) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.remove(key, function (result) {
      resolve("Data For The Key : ${key} has been removed!");
    });
  });
}
async function clearStorage() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.clear().then(function (result) {
      resolve("All data in storage has been cleared.");
    });
  });
}