Psuedocode

Html - use bootstrap

index.html
    jumbotron which says Hot Restaurant
    button - make reservation
    button - to show tables

reservation.html
    jumbotron which says Hot Restaurt
    form to make reservation

tables.html
    jumbotron    
    panel to show table
    panel to show waitlist

Javascript

set up server

table array with a max of 5
    name
    phone number
    email
    unique id

waitlist array
    name
    phone number
    email
    unique id

click function from the make a reservation
    which will look at the length of the table array  < 5 add to table > 5 add to waitlist

routes to the pages

app get to get the tables and the waitlist

app post to add the reservation to the table array < 5 or > 5 add to waitlist