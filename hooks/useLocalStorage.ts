
export function useLocalStorage(key: string) {

  // Get Items From LocalStorage
  const getItems = () => {
    try {

      const getItem = localStorage.getItem(key);
      return getItem ? JSON.parse(getItem) : [];

    } catch (error) {
      console.error(error)
    }
  }

  // Set New Items To LocalStorage
  const setItems = (value: any) => {
    try {

      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error)
    }
  }

  return { getItems, setItems };

}


