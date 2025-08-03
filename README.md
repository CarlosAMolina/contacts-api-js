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
    id
    addresses
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
