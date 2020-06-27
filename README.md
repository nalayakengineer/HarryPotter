# Harry Potter GraphQL Api

Disclaimer - This serves fronend for my Harry potter GraphQL api. This website is just for learning purpose.<br />
The backend code is available<strong> <a href="https://github.com/nalayakengineer/HarryPotterGraphQL">HERE</a></strong><br />
This is based on the RESTAPI of Harry Potter available at:<br />
<strong> <a href="https://potterapi.com">Harry Potter Api</a> </strong>

### Samples:

Query:

```graphql
query {
  character {
    name
    bloodStatus
  }
}
```

Response:

```json
{
  "data": {
    "character": [
      {
        "name": "Severus Snape",
        "bloodStatus": "half-blood"
      }
    ]
  }
}
```

Query:

```graphql
query {
  character(name: "Harry Potter") {
    bloodStatus
    school
    alias
    wand
    house
  }
  house {
    name
  }
  sortingHat
  randomSpell {
    spell
    effect
  }
}
```

Response:

```json
{
  "data": {
    "character": [
      {
        "bloodStatus": "half-blood",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "The Boy Who Lived",
        "wand": "Holly, 11\", phoenix feather",
        "house": "Gryffindor"
      }
    ],
    "house": [
      {
        "name": "Gryffindor"
      },
      {
        "name": "Ravenclaw"
      },
      {
        "name": "Slytherin"
      },
      {
        "name": "Hufflepuff"
      }
    ],
    "sortingHat": "Ravenclaw",
    "randomSpell": {
      "spell": "Extinguishing",
      "effect": "puts out fires"
    }
  }
}
```
