import csv
dataset1=[]
dataset2=[]
planet_data=[]
with open("bright_stars.csv") as csvfile:
    reader=csv.reader(csvfile)
    for row in reader:
        dataset1.append(row)
with open("dwarf_star.csv") as csvfile:
    reader=csv.reader(csvfile)
    for row in reader:
        dataset2.append(row)
headers1=dataset1[0]     
headers2=dataset2[0]
headers=headers1+headers2
planet_data1=dataset1[1:]
planet_data2=dataset2[1:]
for index,datarow in enumerate(planet_data2):
      planet_data.append(planet_data1[index]+planet_data2[index])
with open ("test.csv","a+") as csvfile:
    writer=csv.writer(csvfile)
    writer.writerow(headers)
    writer.writerows(planet_data)
with open("test.csv") as input, open("test2.csv", "w", newline = "") as output:
    writer = csv.writer(output)
    
    for row in csv.reader(input):
        if any(field.strip() for field in row):
            writer.writerow(row)    