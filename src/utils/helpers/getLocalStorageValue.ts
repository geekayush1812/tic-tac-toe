const getLocalStorageValue = (key:string)=>{
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      } catch (error) {
        console.log(error);
        return null;
      }
};
export default getLocalStorageValue;
