import { getDB } from '../db/db.js'

export const resolvers = {
    Query: {
        allContacts: async () => {
            const { contacts } = await getDB()
            return contacts
        },
        totalContacts: async () => {
            const { contacts } = await getDB()
            return contacts.length
        }
    }
}
