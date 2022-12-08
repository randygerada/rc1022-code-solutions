select "addresses"."line1" as "line1",
       "cities"."name" as "city",
       "addresses"."district" as "district",
       "countries"."name" as "country"
  from "addresses" as "addresses"
  join "cities" as "cities" using ("cityId")
  join "countries" as "countries" using ("countryId");
