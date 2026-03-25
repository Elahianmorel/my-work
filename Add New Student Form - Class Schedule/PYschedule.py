from flask import Flask, render_template, url_for

app=Flask(__name__)

@app.route('/')
def index():
    return render_template('Schedule.html')

@app.route('/output')
def CollectInfo():
    studentinfo = []

    studentinfo = [
            {"monday":  "US HISTORY HONOR"<br>"Room 390", "Tuesday": "he" },
            {"monday":  "US HISTORY HONOR"<br>"Room 390", "Tuesday": "he" },
            {"monday":  "US HISTORY HONOR"<br>"Room 390", "Tuesday": "he" },
            {"monday":  "US HISTORY HONOR"<br>"Room 390", "Tuesday": "he" },
            {"monday":  "US HISTORY HONOR"<br>"Room 390", "Tuesday": "he" },
        ]
    return render_template('schedule_display.html',studentinfo=studentinfo)

if __name__ == '__main__':
    app.run()
