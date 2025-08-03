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
    phones {
      description,
      number
    }
    surname
  }
}
```
