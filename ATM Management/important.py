from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/",methods=['GET'])
def index():
    return render_template("Select.html")


@app.route("/userinfo",methods=['GET'])
def Withdraw():
    return render_template("Withdraw.html")
    
@app.route('/userinfo1', methods=['GET'])
def Deposit():

            return render_template("Deposit.html")

@app.route('/userinfo2', methods=['GET'])
def Balance():
    
            return render_template("balance.html")


if __name__ == '__main__':
    app.run()
