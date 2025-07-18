import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...contacts, newContact];

    await writeContacts(JSON.stringify(updatedContacts, null, 2));
    console.log('Contact adding SUCCESSFUL');
  } catch (err) {
    console.error('Contact add ERROR:', err);
  }
};

addOneContact();
