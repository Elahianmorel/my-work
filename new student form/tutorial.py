from flask import Flask, render_template, url_for, redirect, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("url_for.html")

@app.route('/output')
def CollectInfo():
    global fullname
    fullname = ""

    school = request.args.get("txtschool")
    program = request.args.get("txtprogram")
    firstname = request.args.get("txtfirstname")

    if (midinit == ""):
        fullname = firstname + " " + lastname
    else:
        fullname = firstname + " " + midinit + ". " + lastname

    return render_template("url_for_out.html", fullname=fullname)

if __name__ == "__main__":
    app.run()
