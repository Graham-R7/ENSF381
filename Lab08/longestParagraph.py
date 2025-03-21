import requests
from bs4 import BeautifulSoup
# Prompt the user for a URL
url = input("Enter a URL: ")
# Fetch the webpage content
response = requests.get(url)
# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content
    soup = BeautifulSoup(response.text, 'html.parser')
    # Find all paragraphs in the webpage
    paragraphs = [p for p in soup.find_all('p') if len(p.text.split()) >= 5]
    # Find the longest paragraph
    longest_paragraph = max(paragraphs, key=lambda p: len(p.text.split()))
    # Display the longest paragraph and the number of words it contains
    print("Longest paragraph:")
    print(longest_paragraph)
    print("Number of words:", len(longest_paragraph.text.split()))
else:
    print("Error fetching webpage:", response.status_code)
