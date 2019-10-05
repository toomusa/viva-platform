var orientation =  {
    Address1 :  "2301 Mission St #301",
    Address2 : "San Francisco, CA 94110",
    Phone : "(415) 282-3334 ext.101",
    TimeStart : "5:45PM",
    TimeEnd : "8PM",
    When : "Every Wednesday",
    English : (language="English", location="Room 211"),
    Spanish : (language="Spanish", location="Room 301E")
}

var contact = {
    Address1 : orientation.Location1 + ", " + orientation.Location2,
}

var signup = {
    Name : "Name",
    Phone : "Phone",
    Date : "Date",
    Time : "Time",
    Submit : "Submit"
}

var journey = {
    Welcome : "Welcome back " + dummyUser.Name,
    Progress : "Your progress"
}

var externalRes = {
    
}

var dummyUser = {
    Name : "Sofia Martinez",
    Phone : "(424) 321-2345"
}

var dummyHousingTasks = {
    Task1 : (title="Modify resume.", description="Add work experience and personal qualities", dueDate="Jan 01, 2020"),
    Task2 : (title="Save money.", description="Put aside $50 every two weeks", dueDate="Jan 01, 2020"),
    Task3 : (title="Improve credit score.", description="Pay your bills on time", dueDate="Jan 01, 2025"),
    Task4 : (title="Choose a location.", description="Let us know which neighborhoods you would consider", dueDate="Jan 01, 2025"),
}
