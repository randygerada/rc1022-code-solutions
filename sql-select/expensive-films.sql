select *
  from "films"
  where "replacementCost" <= '29.99'
  order by "replacementCost" desc
  limit 10;
