select count("g".*) as "total",
       "g"."name" as "genre"
  from "genres" as g
  join "filmGenre" using ("genreId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "actors"."firstName" = 'Lisa'
    and "actors"."lastName" = 'Monroe'
  group by "g"."genreId";
