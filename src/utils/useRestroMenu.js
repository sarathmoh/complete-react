import { useEffect, useState } from "react";
import { SPECIFIC_RESTO_MENU_ITEM_LIST } from "../utils/constants";
const useRestroMenu = (id) => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetchRestroDetails();
  }, []);
  const fetchRestroDetails = async () => {
    const result = await fetch(SPECIFIC_RESTO_MENU_ITEM_LIST + id);
    const jsonData = await result.json();
    console.log(jsonData?.data, "json");
    setDetails(jsonData?.data);
  };

  return details;
};

export default useRestroMenu;
