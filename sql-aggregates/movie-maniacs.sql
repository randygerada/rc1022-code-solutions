select "firstName",
       "lastName",
       sum("amount") as "totalAmount"
  from "payments" as "p"
  join "customers" using ("customerId")
  join "rentals" using ("rentalId")
  group by "customers"."customerId"
  order by "totalAmount" desc;
