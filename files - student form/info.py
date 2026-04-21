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
 
    # Build full name
    if middle == "" or middle is None:
        fullname = firstname + " " + lastname
    else:
        fullname = firstname + " " + middle + ". " + lastname
 
    # Handle SSN display
    if ssn == "" or ssn is None:
        ssn_display = "N/A"
    else:
        ssn_display = ssn
 
    # --- Create StudentInformation text file ---
    info_filename = "StudentInformation_" + studentid + ".txt"
    info_filepath = os.path.join(studentinfo_folder, info_filename)
    with open(info_filepath, 'w') as f:
        f.write("=== STUDENT INFORMATION ===\n")
        f.write("Full Name:    " + fullname + "\n")
        f.write("School:       " + school + "\n")
        f.write("Program Type: " + program + "\n")
        f.write("Pathway:      " + pathhway + "\n")
        f.write("Birth Date:   " + birth + "\n")
        f.write("OSIS:         " + osis + "\n")
        f.write("SSN/ITIN:     " + ssn_display + "\n")
        f.write("Student ID:   " + studentid + "\n")
 
    # --- Create StudentSchedule text file ---
    # Get schedule fields
    period1 = request.args.get("txtperiod1") or "N/A"
    period2 = request.args.get("txtperiod2") or "N/A"
    period3 = request.args.get("txtperiod3") or "N/A"
    period4 = request.args.get("txtperiod4") or "N/A"
    period5 = request.args.get("txtperiod5") or "N/A"
    period6 = request.args.get("txtperiod6") or "N/A"
    period7 = request.args.get("txtperiod7") or "N/A"
    period8 = request.args.get("txtperiod8") or "N/A"
    period9 = request.args.get("txtperiod9") or "N/A"
    period10 = request.args.get("txtperiod10") or "N/A"
 
    sched_filename = "StudentSchedule_" + studentid + ".txt"
    sched_filepath = os.path.join(studentinfo_folder, sched_filename)
    with open(sched_filepath, 'w') as f:
        f.write("=== STUDENT SCHEDULE ===\n")
        f.write("Full Name:  " + fullname + "\n")
        f.write("Student ID: " + studentid + "\n")
        f.write("\n--- Schedule ---\n")
        f.write("Period 1:  " + period1 + "\n")
        f.write("Period 2:  " + period2 + "\n")
        f.write("Period 3:  " + period3 + "\n")
        f.write("Period 4:  " + period4 + "\n")
        f.write("Period 5:  " + period5 + "\n")
        f.write("Period 6:  " + period6 + "\n")
        f.write("Period 7:  " + period7 + "\n")
        f.write("Period 8:  " + period8 + "\n")
        f.write("Period 9:  " + period9 + "\n")
        f.write("Period 10: " + period10 + "\n")
 
    return render_template("studentform_out.html",
                           school=school,
                           program=program,
                           firstname=firstname,
                           lastname=lastname,
                           birth=birth,
                           pathhway=pathhway,
                           osis=osis,
                           ssn=ssn_display,
                           middle=middle,
                           studentid=studentid,
                           period1=period1,
                           period2=period2,
                           period3=period3,
                           period4=period4,
                           period5=period5,
                           period6=period6,
                           period7=period7,
                           period8=period8,
                           period9=period9,
                           period10=period10,
                           info_file=info_filename,
                           sched_file=sched_filename)
 
if __name__ == "__main__":
    app.run()
