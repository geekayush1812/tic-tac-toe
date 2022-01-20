function setLocalStorageValue<T>(key:string,value:T){
    try {
        const stringifiedValue = JSON.stringify(value);
        window.localStorage.setItem(key, stringifiedValue);
      } catch (error) {
        console.log(error);
        return null;
      }
};
export default setLocalStorageValue;
