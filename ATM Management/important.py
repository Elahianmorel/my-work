from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/",methods=['GET'])
def index():
    return render_template("Select.html")

@app.route('/userinfo', methods=['POST'])
def CollectInfo():

    
    return render_template("signup.html")


if __name__ == '__main__':
    app.run()
 
