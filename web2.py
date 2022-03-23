import csv
data=[]
with open("t2.csv") as csvfile:
    reader=csv.reader(csvfile)
    for row in reader:
        data.append(row)
headers=data[0]
planet_data=data[1:]
for data_point in planet_data:
    data_point[0]=data_point[0].lower()
planet_data.sort(key=lambda planet_data:planet_data[0])
with open ("data.csv","a+") as csvfile:
    writer=csv.writer(csvfile)
    writer.writerow(headers)
    writer.writerows(planet_data)

with open("data.csv") as input, open("data2.csv", "w", newline = "") as output:
    writer = csv.writer(output)
    
    for row in csv.reader(input):
        if any(field.strip() for field in row):
            writer.writerow(row)

