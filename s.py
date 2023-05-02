c = "0.5454 0.1879 0.06723 0.06305 0.04943 0.03635 0.01777 0.01256 0.00615 0.00416 0.00324 0.00223 0.00152 0.00117 0.00086 0.00065 0.00033 0.00002"
c = "0.5454 0.1879 0.06723 0.06305 0.04943 0.03635"
ls = c.split(' ')
lss = [float(x) for x in ls]

def find_pc_count(pc_values):
    x = 0.92
    y = 0
    for i in range(len(pc_values)):
        y += (pc_values[i])
        print(f"y: {y} | i : {i}")
        if(x <= y):
            return i


find_pc_count(lss)

# print(f"x: {x}")
# print(f"y: {y}")
