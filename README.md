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
