#1
import random
a=input("Enter a string of 10 characters:");
if len(a)<10:
    print("string not long enough");
if len(a)>10:
    print("string too long");
#2
if len(a)==10:
    print("The first character is {} and The Last character is {}".format(a[0],a[9]));
#3
b=input('Enter another string');
for x in range(len(b)):
    print(b[0:x+1]);
b=input('Enter another string');
n=''.join(random.sample(b,len(b)))
print("new string : "+n)

