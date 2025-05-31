import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (count) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = Array.from({ length: count }, () => createFakeContact());
    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(JSON.stringify(updatedContacts, null, 2));
    console.log('Contacts generating SUCCESSFUL');
  } catch (err) {
    console.error('Contacts generate ERROR: ', err);
  }
};

generateContacts(5);
