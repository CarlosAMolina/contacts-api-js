export function getContactsMatched(contacts, termInput) {
    const term = getStringWithoutAccent(termInput.toLowerCase());
    const matchedContacs = []

    function search(value) {
        if (typeof value === 'number') {
            value = value.toString();
        }
        if (typeof value === 'string') {
            return getStringWithoutAccent(value.toLowerCase()).includes(term);
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

function getStringWithoutAccent(string) {
    const charMap = new Map([
        ['á', 'a'],
        ['é', 'e'],
        ['í', 'i'],
        ['ó', 'o'],
        ['ú', 'u']
    ]);
    return string.replace(/[áéíóú]/g, match => charMap.get(match));
}
