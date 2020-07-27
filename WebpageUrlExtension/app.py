from flask import Flask, render_template, request,jsonify
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get")
def get_bot_response():
    print(jsonify({"userText":"Khajan"}))
    return jsonify({"userText":"Khajan"})


if __name__ == "__main__":
    app.run()
