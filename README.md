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
