from bs4 import BeautifulSoup
import requests
import matplotlib.pyplot as plt
import numpy as np


# Ask the user for a URL
url = input("Enter a URL: ")

# Fetch the webpage content
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract the counts of headings, links, and paragraphs
    headings = len(soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']))
    links = len(soup.find_all('a'))
    paragraphs = len(soup.find_all('p'))

    # Create a bar chart
    labels = ['Headings', 'Links', 'Paragraphs']
    values = [headings, links, paragraphs]
    plt.bar(labels, values)
    plt.title('Put your Group# Here')
    plt.ylabel('Count')
    plt.show()

else:
    print("Error fetching webpage:", response.status_code)

