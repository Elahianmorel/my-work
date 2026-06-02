from flask import Flask, render_template, url_for, redirect, request
import os

app = Flask(__name__)

checknotes = os.path.join('static', 'notes')
if not os.path.exists(checknotes):
    os.makedirs(checknotes)


balancefile = os.path.join(checknotes, 'balance.txt')
if not os.path.exists(balancefile):
    with open(balancefile, 'w') as f:
        f.write("0")

pinfile = os.path.join(checknotes, 'pin.txt')



@app.route("/", methods=['GET'])
def index():
    return render_template("Select.html")



@app.route("/createpin", methods=['GET'])
def CreatePin():
    return render_template("CreatePin.html", message="")

@app.route("/createpinoutput", methods=['POST'])
def CreatePinOutput():
    global message
    message = ""

    pin = request.form.get("txtpin")

    if len(pin) < 4:
        message = "pin should be 4 numbers"
        return render_template("CreatePin.html", message=message)

    with open(pinfile, 'w') as fcreate:
        fcreate.write(pin)

    message = "PIN created"

    return render_template("CreatePin.html", message=message)

@app.route("/userinfo", methods=['GET'])
def Withdraw():
    return render_template("withdraw.html", message="")


@app.route("/userinfoutput", methods=['POST'])
def WithdrawOutput():

    global message
    message = ""

    pin = request.form.get("txtpin")
    amount = request.form.get("txtamount")

    if not os.path.exists(pinfile):
        message = "No PIN found. Please create a PIN first."
        return render_template("withdraw.html", message=message)

    with open(pinfile, 'r') as fread:
        savedpin = fread.read()

    if pin != savedpin:
        message = "Incorrect PIN. Please try again."
        return render_template("withdraw.html", message=message)

    with open(balancefile, 'r') as fread:
        balance = float(fread.read())

    amount = float(amount)

    if amount <= 0:
        message = "withdraw amount must be greater than zero."
        return render_template("withdraw.html", message=message)

    balance = balance - amount

    with open(balancefile, 'w') as fcreate:
        fcreate.write(str(balance))

    message = "withdraw successful! $" + str(amount) + ". New balance: $" + str(balance)
    return render_template("withdraw.html", message=message)


@app.route("/userinfo1", methods=['GET'])
def Deposit():
    return render_template("Deposit.html", message="")

@app.route("/userinfo1output", methods=['POST'])
def DepositOutput():
    global message
    message = ""

    pin = request.form.get("txtpin")
    amount = request.form.get("txtamount")

    if not os.path.exists(pinfile):
        message = "No PIN found. Please create a PIN first."
        return render_template("Deposit.html", message=message)

    with open(pinfile, 'r') as fread:
        savedpin = fread.read()

    if pin != savedpin:
        message = "Incorrect PIN. Please try again."
        return render_template("Deposit.html", message=message)

    with open(balancefile, 'r') as fread:
        balance = float(fread.read())

    amount = float(amount)

    if amount <= 0:
        message = "Deposit amount must be greater than zero."
        return render_template("Deposit.html", message=message)

    balance = balance + amount

    with open(balancefile, 'w') as fcreate:
        fcreate.write(str(balance))

    message = "Deposit successful! $" + str(amount) + ". New balance: $" + str(balance)
    return render_template("Deposit.html", message=message)

@app.route("/userinfo2", methods=['GET'])
def Balance():
    return render_template("balance.html", balance="")

@app.route("/userinfo2output", methods=['POST'])
def BalanceOutput():
    global balance
    balance = ""

    pin = request.form.get("txtpin")



    if not os.path.exists(pinfile):
        balance = "No pin found."
        return render_template("balance.html", balance=balance)

    with open(pinfile, 'r') as fread:
        savedpin = fread.read()


  
    if pin != savedpin:
        balance = "Incorrect pin "
        return render_template("balance.html", balance=balance)

    with open(balancefile, 'r') as fread:
        balance = fread.read()

    return render_template("balance.html", balance=balance)

if __name__ == '__main__':
    app.run()
