export function getContactsMatched(contacts, termInput) {
    const term = termInput.toLowerCase();
    const matchedContacs = []

    function search(value) {
        if (typeof value === 'number') {
            value = value.toString();
        }
        if (typeof value === 'string') {
            return value.toLowerCase().includes(term);
        }
        else if (Array.isArray(value)) {
            return value.some(item => search(item));
        }
        else if (typeof value === 'object') {
            return Object.values(value).some(val => search(val));
        }
        return false;
    }

    for (const contact of contacts) {
        if (search(contact)) {
            matchedContacs.push(contact);
        }
    }
    return matchedContacs;
}
