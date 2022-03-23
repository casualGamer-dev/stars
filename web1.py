from bs4 import BeautifulSoup
import requests
import time
import pandas as pd 
import os
import csv
START_URL = "https://en.wikipedia.org/wiki/List_of_brown_dwarfs#Field_brown_dwarfs"
page = requests.get(START_URL)
soup = BeautifulSoup(page.content, "html.parser")
table = soup.find("table", {"class": "wikitable sortable"})
print(page)
templist=[]
tablerows=table.find_all("tr")
for tr in tablerows:
    td =tr.find_all("td")
    row=[i.text.strip() for i in td]
    templist.append(row)
print(templist)
starnames=[]
distance=[]
radius=[]
mass=[]
luminosity=[]
for i in range (1,len(templist)):
    starnames.append(templist[i][0])
    distance.append(templist[i][5])
    radius.append(templist[i][8])
    mass.append(templist[i][7])
df2=pd.DataFrame({"Star Name":starnames,"Distance":distance,"Radius":radius*0.000954588,"Mass":mass* 0.102763,})
df2.to_csv("dwar_data2.csv")
print(df2)
time.sleep(15)


        