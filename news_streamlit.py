import streamlit as st
import requests

NEWS_API_KEY = "1d78cf312d3f417b907506bc4afe7c56"

# Function to fetch news articles based on a prompt


def fetch_articles(prompt):
    url = f"https://newsapi.org/v2/everything?q={prompt}&pageSize=10&apiKey={NEWS_API_KEY}"
    response = requests.get(url)
    data = response.json()
    articles = data["articles"]
    return articles

# Streamlit web app


def main():
    st.title("Current news")

    # Create an input field for the user to enter prompts
    prompt = st.text_input("Enter a prompt")

    if st.button("Get News"):
        # Fetch news articles based on the user's prompt
        articles = fetch_articles(prompt)

        # Display the news articles
        for article in articles:
            st.subheader(article["title"])
            st.write(article["description"])
            st.write(article["url"])
            st.write("")


# Run the Streamlit web app
if __name__ == "__main__":
    main()
