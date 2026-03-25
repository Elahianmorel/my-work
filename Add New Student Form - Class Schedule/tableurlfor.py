from flask import Flask, render_template, url_for

app=Flask(__name__)

@app.route('/')
def index():
    return render_template('table.html')

@app.route('/output')
def CollectInfo():
    studentinfo = []

    studentinfo = [
            {"id": 101, "name": "kendrick Lamar"},
            {"id": 102, "name": "Billie Eilish"},
            {"id": 103, "name": "Coldplay"},
            {"id": 104, "name": "Metallica"},
            {"id": 105, "name": "Mr. pigis Band"},
        ]
    return render_template('tableoutput.html',studentinfo=studentinfo)

if __name__ == '__main__':
    app.run()
