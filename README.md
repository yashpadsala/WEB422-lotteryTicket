# web422-lotteryTicket

This is typescript and angular project. In this project I craeted lottery ticket app that allows users to choose any five numbers between 1 to 20 and select bet amount. User also clear their number choice before processing next step. 

The cashier must select 5 lottery numbers. Cashier cannot select more than 5 lottery numbers. Also cashier need to select bet amount before cashout ticket. Moreover cashier can reset their lottery numbers by using clear buttons. When cashier selecting lottery number app automatically updated selected numbers in right side. 

When app starts at that time both cash and clear buttons are disable. When cashier select anyb lottery number or amount at that time clear button will clickable and after select all five lottery numbers and bet amount cash out button becomes clickable. 

In this app their is a bug in total price. When cashier press clear button app will creates all selected lottery numbers but it will not clear bet amount. The reason is that I created state in main-card component. I created four components under my root component. Like, main-card, money, header, selected. I export betamount from money component to main-card and selected. But when I update my state at that time it only update betamount in main-card but not in selected componet. So only bug in betamount.