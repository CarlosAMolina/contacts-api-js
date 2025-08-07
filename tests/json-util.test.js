import { getContactsMatched } from '../src/json-util.js'

describe('getContactsMatched', () => {
    test('value in name is matched', () => {
        const contacts = [
            {"name": "foo"}
        ]
        expect([{"name": "foo"}]).toEqual(getContactsMatched(contacts, "foo"));
    });
})
