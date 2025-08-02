const contacts = [
    { "id": 1, "name": "Carlos" },
    { "id": 2, "name": "John" },
]

export const resolvers = {
    Query: {
        totalContacts: () => contacts.length,
        allContacts: () => contacts
    }
}
