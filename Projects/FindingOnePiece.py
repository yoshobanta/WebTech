print("Welcome to the pirates tresure quest")
direction = input("Left or Right")
if direction == "r":
    print("Game over")
else:
    sw = input("swim or wait")
    if sw != "s":
        print("Game over")
    else:
        door= input("red,blue or yellow")
        if door == "r":
            print("Burn on fire")
        elif door == "b":
            print("Fall in sea")
        else:
            print("Treasure found !!!!!")