async function setAutoIncrementIds() {
  let autoIncrementIds = ["sender_increment_id", "receiver_increment_id"];
  let data = await getDataFromStorage(autoIncrementIds);
  let unInitializedKeys = [];
  autoIncrementIds.forEach((item) => {
    if (!data || !data.hasOwnProperty(item)) {
      unInitializedKeys.push(item);
    }
  });
  unInitializedKeys.forEach((item) => {
    saveDataToStorage({
      [item]: 0,
    });
  });
}
async function getAddressData() {
  const result = await getDataFromStorage(null);
  const keys = Object.keys(result);
  let data = {};
  data["sender_list"] = {};
  data["receiver_list"] = {};
  let tmpArr = [];
  keys.forEach((item) => {
    tmpArr = item.split("_S_"); /** item = "R_415246_S_465456" */
    if (tmpArr.length > 1) {
      data["receiver_list"][tmpArr[0] + "_S_" + tmpArr[1]] = JSON.parse(JSON.stringify(result[tmpArr[0] + "_S_" + tmpArr[1]]));
    }
    if (item.startsWith("S_")) {
      data["sender_list"][item] = result[item];
    }
  });
  data.sender_increment_id = result.sender_increment_id;
  data.receiver_increment_id = result.receiver_increment_id;
  if (Object.keys(data.sender_list).length == 0) {
    saveDataToStorage({
      S_0: JSON.stringify({
        code: "S_0",
        name: "Default Sender - Please Edit This Name!",
        address_line_1: "",
        address_line_2: "",
        address_line_3: "",
        address_line_4: "",
        city: "",
        state: "",
        pincode: "",
        mobile: "",
        email: ""
      })
    }).then((r) => {
      saveDataToStorage({ sender_increment_id: data.sender_increment_id + 1 }).then(window.location.reload());
    })
  }
  return data;
}
