select "f"."releaseYear" as "releaseYear",
       "g"."name" as "genre",
       "f"."title" as "title"
   from "films" as "f"
   join "filmGenre" using ("filmId")
   join "genres" as "g" using ("genreId")
   where "f"."title" = 'Boogie Amelie';
