from flask import Flask, render_template, url_for

app=Flask(__name__)

@app.route('/')
def index():
    return render_template('Schedule.html')

@app.route('/output')
def CollectInfo():
    studentinfo = []

    studentinfo = [
            {"period":  "1", "monday":  "US HISTORY HONOR ", "Tuesday": "US HISTORY HONOR" , "Wednesday": "US HISTORY HONOR" , "Thursday": "US HISTORY HONOR" , "Friday": "US HISTORY HONOR" },
            {"period":  "2", "monday":  "ENGLISH 11", "Tuesday": "ENGLISH 11" , "Wednesday": "ENGLISH 11" , "Thursday": "ENGLISH 11" , "Friday": "ENGLISH 11" },
            {"period":  "3", "monday":  "PRE-CALCULUS 2", "Tuesday": "PRE-CALCULUS 2" , "Wednesday": "PRE-CALCULUS 2" , "Thursday": "PRE-CALCULUS 2" , "Friday": "PRE-CALCULUS 2" },
            {"period":  "4", "monday":  "COMP ENGR H 4", "Tuesday": "COMP ENGR H 4" , "Wednesday": "COMP ENGR H 4" , "Thursday": "COMP ENGR H 4" , "Friday": "COMP ENGR H 4" },
            {"period":  "5", "monday":  "AP Chemistry", "Tuesday": "AP Chemistry" , "Wednesday": "AP Chemistry" , "Thursday": "AP Chemistry" , "Friday": "AP Chemistry" },
            {"period":  "6", "monday":  "AP Chemistry", "Tuesday": "AP Chemistry" , "Wednesday": "AP Chemistry" , "Thursday": "AP Chemistry" , "Friday": "AP Chemistry" },
            {"period":  "7", "monday":  "LUNCH", "Tuesday": "LUNCH" , "Wednesday": "LUNCH" , "Thursday": "LUNCH" , "Friday": "LUNCH" },
            {"period":  "8", "monday":  "PHY ED ELECTIVE", "Tuesday": "PHY ED ELECTIVE" , "Wednesday": "PHY ED ELECTIVE" , "Thursday": "PHY ED ELECTIVE" , "Friday": "PHY ED ELECTIVE" },
        ]
    return render_template('schedule_input.html',studentinfo=studentinfo)

if __name__ == '__main__':
    app.run()
