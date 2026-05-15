from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/",methods=['GET'])
def index():
    return render_template("Select.html")


@app.route("/userinfo",methods=['GET'])
def signup():
    return render_template("signup.html")
    
@app.route('/userinfo1', methods=['GET'])
def login():

            return render_template("Login.html")


if __name__ == '__main__':
    app.run()
