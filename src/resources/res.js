var orientation =  {
    Address1 :  "2301 Mission St #301",
    Address2 : "San Francisco, CA 94110",
    Phone : (number="(415) 282-3334", ext="101"),
    TimeStart : "5:45PM",
    TimeEnd : "8PM",
    When : "Every Wednesday",
    English : (language="English", location="Room 211"),
    Spanish : (language="Spanish", location="Room 301E")
}

var contact = {
    Address1 : orientation.Address1,
    Address2 : orientation.Address2,
    Phone : orientation.Phone
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

var programs = [
    (title="Welcome Orientation & Financial Capability Workshop", link="http://medasf.org/programs/welcome-orientation/")
    (title="Housing Opportunities", link="http://medasf.org/programs/housing-opportunities/"),
    (title="Community Real Estate", link="http://medasf.org/programs/community-real-estate/"),
    (title="Financial Capability", link="http://medasf.org/programs/financialcapability/"),
    (title="Free Tax Preparation", link="http://medasf.org/programs/free-tax-preparation/"),
    (title="Business Development", link="http://medasf.org/programs/business-development/"),
    (title="Community Loan Fund", link="http://medasf.org/programs/fondo-adelante-community-loan-fund/"),
    (title="Workforce Development", link="http://medasf.org/workforce-development-program/"),
    (title="Mission Admins", link="http://medasf.org/programs/mission-admins/"),
    (title="Mission Techies", link="http://medasf.org/programs/mission-techies/"),
    (title="Digital Opportunity Center", link="http://medasf.org/programs/technology-internet-2/"),
    (title="Mission Promise Neighborhood", link="http://missionpromise.org/")
]
    
var dummyUsers = [
    (firstName="Sofia", lastName="Martinez", phone="(424) 321-2345"),
    (firstName="Isabella", lastName="Gonzales", phone="(424) 321-2345"),
    (firstName="Juan", lastName="Davenport", phone="(424) 321-2345")
]

var dummyCareerTasks = [
    (title="Modify resume.", description="Add work experience and personal qualities", dueDate="Jan 01, 2020"),
    (title="Update Linkedin profile.", description="Try to connect with people on Linkedin")
    (title="Get a certification.", description="Complete classes required to obtain desired certification.")
]

var dummyHousingTasks = [
    (title="Save money.", description="Put aside $50 every two weeks", dueDate="Jan 01, 2020"),
    (title="Improve credit score.", description="Pay your bills on time", dueDate="Jan 01, 2025"),
    (title="Choose a location.", description="Let us know which neighborhoods you would consider", dueDate="Jan 01, 2025")
]

var serviceCategories = {
    Finances : "Finances",
    Housing : "Housing",
    Career : "Career",
    Business : "Business"
}