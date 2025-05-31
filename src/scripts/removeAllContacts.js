import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts(JSON.stringify([], null, 2));
    console.log('All contacts removing SUCCESFUL');
  } catch (err) {
    console.error('All contacts remove ERROR: ', err);
  }
};
removeAllContacts();
