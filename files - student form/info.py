from flask import Flask, render_template, url_for, redirect, request
import os
 
app = Flask(__name__)
 
studentinfo_folder = os.path.join('static', 'studentfiles')
if not os.path.exists(studentinfo_folder):
    os.makedirs(studentinfo_folder)
 
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
    studentid = request.args.get("txtstudentid")
 


    if middle == "" or middle is None:
        fullname = firstname + " " + lastname
    else:
        fullname = firstname + " " + middle + ". " + lastname
 


    if ssn == "" or ssn is None:
        ssn_display = "N/A"
    else:
        ssn_display = ssn
 


    info_filename = "StudentInformation_" + studentid + ".txt"
    info_filepath = os.path.join(studentinfo_folder, info_filename)
    with open(info_filepath, 'w') as f:
        f.write("=== STUDENT INFORMATION ===")
        f.write("Full Name:    " + fullname)
        f.write("School:       " + school)
        f.write("Program Type: " + program)
        f.write("Pathway:      " + pathhway)
        f.write("Birth Date:   " + birth)
        f.write("OSIS:         " + osis)
        f.write("SSN/ITIN:     " + ssn_display)
        f.write("Student ID:   " + studentid )
 




    pd1 = request.args.get("txtpd1")
    pd2 = request.args.get("txtpd2")
    pd3 = request.args.get("txtpd3")
    pd4 = request.args.get("txtpd4")
    pd5 = request.args.get("txtpd5")
    pd6 = request.args.get("txtpd6")
    pd7 = request.args.get("txtpd7")
    pd8= request.args.get("txtpd8")

 
    sched_filename = "StudentSchedule_" + studentid + ".txt"
    sched_filepath = os.path.join(studentinfo_folder, sched_filename)
    with open(sched_filepath, 'w') as fcreat:
        fcreate.write("=== STUDENT SCHEDULE ===\n")
        fcreate.write("Full Name:  " + fullname + "\n")
        fcreate.write("Student ID: " + studentid + "\n")
        fcreate.write("\n--- Schedule ---\n")
        fcreate.write("Period 1:  " + period1 + "\n")
        fcreate.write("Period 2:  " + period2 + "\n")
        fcreate.write("Period 3:  " + period3 + "\n")
        fcreate.write("Period 4:  " + period4 + "\n")
        fcreate.write("Period 5:  " + period5 + "\n")
        fcreate.write("Period 6:  " + period6 + "\n")
        fcreate.write("Period 7:  " + period7 + "\n")
        fcreate.write("Period 8:  " + period8 + "\n")
 
    return render_template("studentform_out.html", school=school, program=program, firstname=firstname, lastname=lastname, birth=birth, pathhway=pathhway, osis=osis, ssn=ssn_display, middle=middle, studentid=studentid, period1=period1, period2=period2, period3=period3, period4=period4, period5=period5, period6=period6, period7=period7, period8=period8, period9=period9, period10=period10, info_file=info_filename, sched_file=sched_filename)
 
if __name__ == "__main__":
    app.run()
