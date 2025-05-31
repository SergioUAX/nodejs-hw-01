import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
      const contacts = await readContacts();
      return contacts;
    } catch (err) {
      console.error('Contacts read ERROR: ', err);
      return [];
    }
  };

console.log(await getAllContacts());
