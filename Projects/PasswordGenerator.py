import random
letter = [chr(i) for i in range(97,123)] + [chr(j) for j in range(65,91)]
number = [chr(i) for i in range(48,58)]
symbols = ['!','@','#','$','&']
n_letter = int(input("Enter the number of letter "))
n_number = int(input("Enter the number of number "))
n_symbols = int(input("Enter the number of symbols "))

#Without Shuffel
# password = ''
# for i in range(0,n_letter):
#     random_letter = random.choice(letter)
#     password += random_letter

# for i in range(0,n_number):
#     password += random.choice(number)

# for i in range(0,n_symbols):
#     password += random.choice(symbols)

# print(f"Your password is {password}")

#The problem with this is it will take letter 1st then take the number then take the symbols so we have to do shuffle to realy get a randomize password
# For that we will use random.suffle
password = ''
password_list = []

for i in range(0,n_letter):
    random_letter = random.choice(letter)
    password_list += [random_letter]                   #list + list we are not using append. we can if we want

for i in range(0,n_number):
    password_list += [random.choice(number)]

for i in range(0,n_symbols):
    password_list.append(random.choice(symbols)) 

print(password_list)
random.shuffle(password_list)
print(password_list)

for i in password_list:
    password += i

print(f"Your password is {password}")
