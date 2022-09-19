#Exercice1:Set
#1
my_fav_numbers = {2,4,6,7,}
#2
my_fav_numbers.add(5)
my_fav_numbers.add(10)
#3
my_fav_numbers.remove(10)
print(my_fav_numbers)
#4
friend_fav_numbers = {1,3,8,9}
print(friend_fav_numbers)
#5
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)


#Exercice2:Tuple
#No it's possible to add more integers to the tuple.


#Exercice3: List
basket = ["Banana", "Apples", "Oranges", "Blueberries"];
#1
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0,"Apples")
basket.count("Apples")
basket.clear()
print(basket)


#Exercise 4: Floats
#1
# An integer (more commonly called an int) is a number without a decimal point. A float is a floating-point number, which means it is a number that has a decimal place.
#2
#No
#3
list = [1.5,2, 2.5, 3, 3.5, 4, 4.5,5]


#Exercise 5: For Loop
#1
for x in range(1,21):
    print(x);
    #2
for n in range(1,21):
    if n%2 ==0:
        a=n
        print(a)

#Exercise 6 : While Loop
name = input("Input your name please:")
while name != "MILLOGO":
    name = input("Input your name please:")


#Exercise 7: Favorite Fruits
#1
fruits = input("What is favorite fruit(s)?Please the fruits with a single space:")
#2
fruits.split("-")
print(fruits)
#3
choice = input("please input a name of a fruit: ")
if choice in fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:print("You chose a new fruit. I hope you enjoy")


#Exercise 8: Who Ordered A Pizza ?
Pizza = input("Please enter a series of pizza toppings:")
while Pizza != "quit":
    print("you’ll add that topping to their pizza")
    Pizza = input("Please enter a series of pizza toppings:")

#Exercise 9: Cinemax
family = input("Please How many of you want a ticket?")
int(family)
for x in family:
   age = input("How old are you?:")
   c = int(age)
   if age < 3:
       price == 0
   if age >=3 and age < 12:
       price ==10
   if age > 12:
       price = 15
Total = sum(price)
print("The total cost is:",Total)


#Exercice10: Commandes Sandwich
sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches = []
for i in sandwich_orders
    finished_sandwiches = sandwich_orders[i]
    print("I made your",finished_sandwiches)


 #Exercise 11 : Sandwich Orders#2
 print("the deli has run out of pastrami")
sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
sandwich_orders = list(filter(lambda num: num != "Pastrami sandwich",list_of_num)
for x < 3
    print(sandwich_orders[5])
    finished_sandwiches = sandwich_orders
    finished_sandwiches[5].remove()




