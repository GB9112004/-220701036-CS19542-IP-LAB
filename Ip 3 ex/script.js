function validateForm() {
    const form = document.forms["courseRegistration"];
    const reg_no = form["reg_no"].value.trim();
    const name = form["Name"].value.trim();
    const dob = form["dob"].value;
    const student_gender = form["student_gender"].value;
    const department = form["department"].value.trim();
    const Section = form["Section"].value.trim();
    const mobile_no = form["mobile_no"].value.trim();
    const email = form["E-Mail_ID"].value.trim();
    const address = form["Address"].value.trim();
    const city = form["City"].value.trim();
    const country = form["Country"].value.trim();
    const pincode = form["pincode"].value.trim();
    const year = form["year"].value.trim();
    const semester = form["semester"].value.trim();
    const academic_year = form["academic_year"].value.trim();
    const subject_code = form["subject_code"].value;
    const subject_name = form["subject_name"].value;
    const credit = form["credit"].value.trim();
    const core_elective = form["core_elective"].value;
    const file = form["file"].value;

    if (!reg_no) {
        alert("Register Number is required");
        return false;
    }
    if (!name) {
        alert("Name is required");
        return false;
    }
    if (!dob) {
        alert("Date of Birth is required");
        return false;
    }
    if (!student_gender) {
        alert("Gender is required");
        return false;
    }
    if (!department) {
        alert("Department is required");
        return false;
    }
    if (!Section) {
        alert("Section is required");
        return false;
    }
    if (!mobile_no) {
        alert("Mobile Number is required");
        return false;
    } else if (!/^\d{10}$/.test(mobile_no)) {
        alert("Enter a valid 10-digit mobile number");
        return false;
    }
    if (!email) {
        alert("Email is required");
        return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Enter a valid email address");
        return false;
    }
    if (!address) {
        alert("Address is required");
        return false;
    }
    if (!city) {
        alert("City is required");
        return false;
    }
    if (!country) {
        alert("Country is required");
        return false;
    }
    if (!pincode) {
        alert("Pincode is required");
        return false;
    } else if (!/^\d{6}$/.test(pincode)) {
        alert("Enter a valid 6-digit pincode");
        return false;
    }
    if (!year) {
        alert("Year is required");
        return false;
    }
    if (!semester) {
        alert("Semester is required");
        return false;
    }
    if (!academic_year) {
        alert("Academic Year is required");
        return false;
    }
    if (!subject_code) {
        alert("Subject Code is required");
        return false;
    }
    if (!subject_name) {
        alert("Subject Name is required");
        return false;
    }
    if (!credit) {
        alert("Credit is required");
        return false;
    }
    if (!core_elective) {
        alert("Core/Elective selection is required");
        return false;
    }
    if (!file) {
        alert("Document upload is required");
        return false;
    }
    
    const today = new Date();
    const dobDate = new Date(dob);
    if (dobDate >= today) {
        alert("Date of Birth must be a valid past date");
        return false;
    }

    return true;
}
