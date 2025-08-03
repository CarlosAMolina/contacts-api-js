# Contacts

## Queries

```graphql
{
  totalContacts
}
```

```graphql
{
  allContacts {
    addresses
    categories
    id
    emails
    name
    nicknames
    phones {
      description,
      number
    }
    surname
  }
}
```
