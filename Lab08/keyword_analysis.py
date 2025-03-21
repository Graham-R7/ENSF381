from bs4 import BeautifulSoup
import requests
import re
from collections import Counter
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
# Ask the user for a keyword in the webpage
keyword = input("Enter a keyword to search for in the webpage: ")
# Ask the user for a URL
url = input("Enter a URL: ")
# Fetch the webpage content
response = requests.get(url)
# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content
    soup = BeautifulSoup(response.text, 'html.parser')
    # Find all the text in the webpage
    text = soup.get_text()
    # Split the text into individual words
    words = text.split()
    # Count the number of times each word appears in the webpage
    word_count = Counter(words)
    # Print the word count
    print("Word Count:")
    for word, count in word_count.items():
        print(f"{word}: {count}")
    # Plot the word count
    plt.bar(word_count.keys(), word_count.values())
    plt.xlabel('Words')
    plt.ylabel('Count')
    plt.title('Word Count')
    plt.show()
else:
    print("Error fetching webpage:", response.status_code)