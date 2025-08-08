import { getContactsMatched } from '../src/json-util.js'

describe('getContactsMatched matches differente values', () => {
    test('array of objects', () => {
        const contacts = [{"phones": [{"description": "foo"}]}]
        expect([{"phones": [{"description": "foo"}]}]).toEqual(getContactsMatched(contacts, "foo"));
    });
    test('array of strings', () => {
        const contacts = [{"addresses": ["foo"]}]
        expect([{"addresses": ["foo"]}]).toEqual(getContactsMatched(contacts, "foo"));
    });
    test('integer', () => {
        const contacts = [{"id": 1}]
        expect([{"id": 1}]).toEqual(getContactsMatched(contacts, "1"));
    });
    test('object of objects', () => {
        const contacts = [{"socialNetwork":{"discordAccounts":[{"alias": "foo"}]}}]
        expect([{"phones": [{"description": "foo"}]}]).toEqual(getContactsMatched(contacts, "foo"));
    });
    test('string', () => {
        const contacts = [{"name": "foo"}]
        expect([{"name": "foo"}]).toEqual(getContactsMatched(contacts, "foo"));
    });
})
