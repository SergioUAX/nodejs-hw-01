import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const count = contacts.length;
    return count;
  } catch (err) {
    console.error('Count ERROR: ', err);
    return 0;
  }
};

console.log(await countContacts());
