import requests 
from bs4 import BeautifulSoup 
 
url = "https://en.wikipedia.org/wiki/University_of_Calgary" 
 
try: 
    response = requests.get(url) 
    response.raise_for_status()  # Ensures the request was successful 
    soup = BeautifulSoup(response.text, 'html.parser') 
    print(f"Successfully fetched content from {url}") 
except Exception as e: 
    print(f"Error fetching content: {e}")

#Section 1
h1 = soup.find_all('h1')
h2 = soup.find_all('h2')
h3 = soup.find_all('h3')
h4 = soup.find_all('h4')
h5 = soup.find_all('h5')
h6 = soup.find_all('h6')
a = soup.find_all('a')
p = soup.find_all('p')

print("Number of <h1>: ", len(h1))
print("Number of <h2>: ", len(h2))
print("Number of <h3>: ", len(h3))
print("Number of <h4>: ", len(h4))
print("Number of <h5>: ", len(h5))
print("Number of <h6>: ", len(h6))
print("Number of <a>: ", len(a))
print("Number of <p>: ", len(p))
print("Finished Data Analysis")

