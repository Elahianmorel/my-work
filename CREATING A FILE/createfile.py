from flask import Flask, render_template, request, url_for
import os

app=Flask(__name__)


checknotes = os.path.join('static','notes')
if not os.path.exists(checknotes):
        os.makedirs(checknotes)

@app.route('/')
def index():
    return render_template('fileindex.html')

@app.route('/createfile', methods=['POST'])
