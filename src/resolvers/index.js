import { getDB } from '../db/db.js'

export const resolvers = {
    Query: {
        totalContacts: async () => {
            const { contacts } = await getDB()
            return contacts.length
        },
        allContacts: async () => {
            const { contacts } = await getDB()
            return contacts
        }
    }
}
