from flask import Flask, render_template
from faker import Faker

app = Flask(__name__)

# Faker object
fake = Faker()

# Home Page
@app.route("/")
def home():
    return render_template("index.html")


# Typing Test Page
@app.route("/typing")
def typing():

    paragraph = fake.text(max_nb_chars=180)

    return render_template(
        "typing.html",
        paragraph=paragraph
    )


# Result Page
@app.route("/result")
def result():
    return render_template("result.html")

@app.route("/about")
def about():
    return render_template("about.html")


if __name__ == "__main__":
    app.run(debug=True)