select "a"."firstName" as "firstName",
       "a"."lastName" as  "lastName",
       "f"."title" as "filmTitle"
  from "actors" as "a"
  join "castMembers" using ("actorId")
  join "films" as "f" using ("filmId")
  where "f"."title" = 'Jersey Sassy';
