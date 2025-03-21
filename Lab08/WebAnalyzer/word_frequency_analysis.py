from bs4 import BeautifulSoup
import requests
import re
import matplotlib.pyplot as plt
from collections import Counter
import string

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
    # Remove punctuation
    text = re.sub(r'[^\w\s]', '', text)
    # Tokenize the text
    tokens = text.split()
    # Count the frequency of each word
    word_freq = Counter(tokens)
    # Remove stop words
    stop_words = set(string.punctuation)
    word_freq = {word: freq for word, freq in word_freq.items() if word not in stop_words}
    # Sort the words by frequency
    sorted_word_freq = dict(sorted(word_freq.items(), key=lambda item: item[1], reverse=True))
    # Display the top 5 words and their frequencies
    print("Top 5 words and their frequencies:")
    for word, freq in list(sorted_word_freq.items())[:5]:
        print(f"{word}: {freq}")
    # Plot the word frequencies
    plt.figure(figsize=(10, 5))
    plt.bar(list(sorted_word_freq.keys())[:5], list(sorted_word_freq.values())[:5])
    plt.xlabel("Words")
    plt.ylabel("Frequency")
    plt.title("Word Frequencies")
    plt.show()
else:
    print("Error fetching webpage:", response.status_code)

