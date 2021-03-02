class UtilityService{

    changeObjectKeys = (arr, replaceKeys) => {
        return arr.map(item => {
          const newItem = {};
          Object.keys(item).forEach(key => {
            newItem[replaceKeys[key]] = item[[key]];
          });
          return newItem;
        });
      };
    
      changeObjectValues = (arr, targetKey, replaceValues) => {
        return arr.map(item => {
          const newItem = {};
          Object.keys(item).forEach(key => {
            if (key === targetKey){
              newItem[key] = replaceValues[item[key]];
            }
            else {
              newItem[key] = item[key];
            }
          });
          return newItem;
        });
      };

}

export default new UtilityService();