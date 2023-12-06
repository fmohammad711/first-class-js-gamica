//Write a program that calculates the price of a movie ticket based on the age of the person. If the person is under 12, the ticket is $8; if the person is 12 to 18 years old, the ticket is $10; otherwise, the ticket is $12.


let age=25;
let ticketprice;
if(age<12){
    console.log("The Ticket Price is 8$");
}else if(age>12 && age<=18){
    console.log("The Ticket Price is 10$");
}else{
    console.log("The Ticket Price is 15$");

}