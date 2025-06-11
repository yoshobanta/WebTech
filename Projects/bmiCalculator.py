weight = float(input("Enter your weight in kg"))
height =float(input("Enter your height in meters"))

bmi = weight / (height**2)
print(bmi)
if bmi < 18.5 :
    print("Under Weight")
elif 18.5<= bmi <= 24.9:
    print("Normal Weight")
elif 25 <= bmi <=29.5:
    print("Over Weight")
else:
    print("Obesity")