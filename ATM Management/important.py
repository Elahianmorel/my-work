from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/",methods=['POST'])
def index():
    return render_template("Select.html")

@app.route('/userinfo', methods=['POST'])
def login():

        return render_template("Login.html")


@app.route('/userinfo', methods=['GET'])
def signup():
        return render_template("signup.html")

if __name__ == '__main__':
    app.run()
 
