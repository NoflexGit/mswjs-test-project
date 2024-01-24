import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://localhost:5173/api/movies', () => {
    return HttpResponse.json([
      {
        "title": "The Shawshank Redemption",
        "year": 1994,
        "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
      },
      {
        "title": "The Godfather",
        "year": 1972,
        "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
      },
      {
        "title": "The Dark Knight",
        "year": 2008,
        "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
      },
      {
        "title": "Inception",
        "year": 2010,
        "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
      },
      {
        "title": "Fight Club",
        "year": 1999,
        "description": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
      },
      {
        "title": "Pulp Fiction",
        "year": 1994,
        "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
      },
      {
        "title": "Forrest Gump",
        "year": 1994,
        "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
      },
      {
        "title": "The Matrix",
        "year": 1999,
        "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
      },
      {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "year": 2001,
        "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
      },
      {
        "title": "The Good, the Bad and the Ugly",
        "year": 1966,
        "description": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery."
      }
    ]);
  })
];
