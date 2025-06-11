print("Welcome to pizza calculator")

size = input("Enter the size of the pizza S,M or L -")
pepperoni =input("Enter if want to add pepperoni Y or N - " )
extra_cheese = input("Enter if want to add extra cheese Y or N - " )
bill = 0

if size == 's' or size == "S":
    bill = 50
    if pepperoni in ('y','Y'):
        bill = bill + 20
    if extra_cheese in ('y','Y'):
        bill = bill + 10
    print(f'your bill for {bill}')

elif size == 'm' or size == "M":
    bill = 100
    if pepperoni in ('y','Y'):
        bill = bill + 30
    if extra_cheese in ('y','Y'):
        bill = bill + 10
    print(f'your bill for {bill}')

elif size == 'l' or size == "L":
    bill = 150
    if pepperoni in ('y','Y'):
        bill = bill + 40
    if extra_cheese in ('y','Y'):
        bill = bill + 10
    print(f'your bill for {bill}')