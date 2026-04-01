from flask import Flask, render_template, url_for

app=Flask(__name__)

@app.route('/')
def index():
    return render_template('Schedule_input.html')

    

@app.route('/output')
def CollectInfo():

    pd1 = request.form.get('txtpd1')
    pd2 = request.form.get('txtpd2')
    pd3 = request.form.get('txtpd3')
    pd4 = request.form.get('txtpd4')
    pd5 = request.form.get('txtpd5')
    pd6 = request.form.get('txtpd6')
    pd7 = request.form.get('txtpd7')
    pd8 = request.form.get('txtpd8')

    
    studentinfo = []

    studentinfo = [
            {"period":  "1", "monday":  pd1, "Tuesday": pd1 , "Wednesday": pd1 , "Thursday": pd1 , "Friday": pd1},
        ]
    return render_template('Schedule_input.html',studentinfo=studentinfo)

if __name__ == '__main__':
    app.run()
