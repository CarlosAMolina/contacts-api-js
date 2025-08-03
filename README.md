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
    discords {
      alias
      discriminator
      global_name
      legacy_user_name
      user_name
    }
    id
    emails
    name
    nicknames
    phones {
      description,
      number
    }
    surname
    urls
  }
}
```
