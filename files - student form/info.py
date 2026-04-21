from flask import Flask, render_template, url_for, redirect, request
import os
 
app = Flask(__name__)
 
studentinfo = os.path.join('static', 'notes')
if not os.path.exists(studentinfo):
    os.makedirs(studentinfo)
 
@app.route("/")
def index():
    return render_template("studentform.html")
 
@app.route('/output')
def CollectInfo():
    global fullname
    fullname = ""
 
    school = request.args.get("txtschool")
    program = request.args.get("txtprogram")
    firstname = request.args.get("txtfirstname")
    lastname = request.args.get("txtlname")
    middle = request.args.get("txtmiddlei")
    birth = request.args.get("txtbirth")
    pathhway = request.args.get("txtpathway")
    ssn = request.args.get("txtssn")
    osis = request.args.get("txtosis")
    sid = request.args.get("txtsid")
 


    if middle == "":
        fullname = firstname + " " + lastname
    else:
        fullname = firstname + " " + middle + ". " + lastname
 


    if ssn == "" :
        ssn = "N/A"
    else:
        ssn = ssn
 


    info_filename = "StudentInformation" + str(sid) + ".txt"
    info_filepath = os.path.join(studentinfo, info_filename)
    with open(info_filepath, 'w') as f:
        f.write("=== STUDENT INFORMATION ===")
        f.write("Full Name:    " + fullname)
        f.write("School:       " + school)
        f.write("Program Type: " + program)
        f.write("Pathway:      " + pathhway)
        f.write("Birth Date:   " + birth)
        f.write("OSIS:         " + osis)
        f.write("SSN/ITIN:     " + ssn)
        f.write("ID:   " + str(sid) )
 




    pd1 = request.args.get("txtpd1")
    pd2 = request.args.get("txtpd2")
    pd3 = request.args.get("txtpd3")
    pd4 = request.args.get("txtpd4")
    pd5 = request.args.get("txtpd5")
    pd6 = request.args.get("txtpd6")
    pd7 = request.args.get("txtpd7")
    pd8= request.args.get("txtpd8")

 
    sched_filename = "StudentSchedule_" + str(sid) + ".txt"
    sched_filepath = os.path.join(studentinfo, sched_filename)
    with open(sched_filepath, 'w') as fcreate:
        fcreate.write("=== STUDENT SCHEDULE ===")
        fcreate.write("Full Name:  " + fullname )
        fcreate.write("Student ID: " + str(sid) )
        fcreate.write("--- Schedule ---")
        fcreate.write("Period 1:  " + pd1 )
        fcreate.write("Period 2:  " + pd2 )
        fcreate.write("Period 3:  " + pd3 )
        fcreate.write("Period 4:  " + pd4 )
        fcreate.write("Period 5:  " + pd5 )
        fcreate.write("Period 6:  " + pd6 )
        fcreate.write("Period 7:  " + pd7 )
        fcreate.write("Period 8:  " + pd8 )
 
    return render_template("studentform_out.html", school=school, program=program, firstname=firstname, lastname=lastname, birth=birth, pathhway=pathhway, osis=osis, ssn=ssn, middle=middle, sid=sid, pd1=pd1, pd2=pd2, pd3=pd3, pd4=pd4, pd5=pd5, pd6=pd6, pd7=pd7, pd8=pd8, info_file=info_filename, sched_file=sched_filename)
 
if __name__ == "__main__":
    app.run()
