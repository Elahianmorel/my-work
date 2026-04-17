from flask import Flask, render_template, url_for, redirect, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("schedule_input.html")

@app.route('/output')
def CollectInfo():


    
    pd1 = request.args.get("txtpd1")
    pd2 = request.args.get("txtpd2")
    pd3 = request.args.get("txtpd3")
    pd4 = request.args.get("txtpd4")
    pd5 = request.args.get("txtpd5")
    pd6 = request.args.get("txtpd6")
    pd7 = request.args.get("txtpd7")
    pd8 = request.args.get("txtpd8")


        return render_template("schedule_display.html",pd1=pd1, pd2=pd2, pd3=pd3, pd4=pd4, pd5=pd5, pd6=pd6 ,pd7=pd7, pd8=pd8)


if __name__ == "__main__":
    app.run()
