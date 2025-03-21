from bs4 import BeautifulSoup
import requests

# Ask the user for a keyword in the webpage
keyword = input("Enter a keyword to search for in the webpage: ").lower()
# Ask the user for a URL
url = input("Enter a URL: ")

# Fetch the webpage content
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content
    soup = BeautifulSoup(response.text, 'html.parser')
    # Convert the soup output into text
    text = soup.get_text().lower()
    # Count the number of times the keyword appears in the webpage
    keyword_count = text.count(keyword)
    # Display the result
    print(f"The keyword '{keyword}' appears {keyword_count} times in the webpage.")
else:
    print("Error fetching webpage:", response.status_code)
