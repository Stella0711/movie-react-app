const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;



export const updateSearchCount = async () => {
  console.log(DATABASE_ID, TABLE_ID, PROJECT_ID);  
}
