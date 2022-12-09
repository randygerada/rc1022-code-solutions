select count("cities") as "NumberOfCities",
        "c"."name" as "Country"
    from "cities"
    join "countries" as "c" using ("countryId")
    group by "c"."countryId";
