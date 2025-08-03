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
    phone {
      description,
      number
    }
  }
}
```
