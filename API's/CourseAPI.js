const courseAPI=(req,res)=>{
    res.send(
        [{
        'category':'Web Development',
        'name':'MERN Stack',
        'image':'https://files.codingninjas.com/mern-11710.svg',
        'type':'Full Stack Web Developement',
        'duration': '6 months',
        'projects':'6+ projects',
        "enrolled":'13K+ students enrolled',
        'time':'140+ Hours',
        'for':'for Beginners and Experienced Learners',
        'rating':'https://files.codingninjas.in/4-8-stars-5588.png',
        'ratedBy':'(2K+ students)',
        'prblems':'10+',
        'time_img':'https://files.codingninjas.in/vector-1-19336.svg',
        'project_img':'https://files.codingninjas.in/mdi_palette-swatch-19337.svg',
        'description':'Learn to build entire web applications from start to finish on one of the most versatile tech stacks : MongoDB, Express.js, React.js and Node.js (MERN stack)',
        'price':20998,
        'early_price':14599,
        'courseImg':'https://files.codingninjas.com/cdn-cgi/image/width=434/mern-9588-1-10374.png'

    },
    {
        'category':'Web Development',
        'name':'Front End WEb Development',
        'image':'https://files.codingninjas.com/mern-11710.svg',
        'type':'Advanced Front End Web Development Course — React.js',
        'duration': '18 months',
        'projects':'6+ projects',
        "enrolled":'13K+ students enrolled',
        'time':'50+ Hours of video lectures',
        'for':'for Beginners and Experienced Learners',
        'rating':'https://files.codingninjas.in/4-8-stars-5588.png',
        'prblems':'10+',
        'projects':'5+ projects',
        'time_img':'https://files.codingninjas.in/vector-1-19336.svg',
        'project_img':'https://files.codingninjas.in/mdi_palette-swatch-19337.svg',
        'description':'Learn to build interactive web pages using React.js — The framework used by Facebook, Discord and more.',
        'price':9911,
        'early_price':14159

    },
    {
        'name':'Data structures and algorithms',
        'image':'https://files.codingninjas.com/c-11714.svg',
        'type':'Basics of C++ with Data Structures and Algorithms',
        'duration': '6 months',
        'projects':'6+ projects',
        "enrolled":'30K+ students enrolled',
        'time':'60+ Hours',
        'for':'for Beginners and Experienced Learners',
        'rating':'https://files.codingninjas.in/4-8-stars-5588.png',
        'prblems':'350+',
        'time_img':'https://files.codingninjas.in/vector-1-19336.svg',
        'project_img':'https://files.codingninjas.in/mdi_palette-swatch-19337.svg',
        'descripton':'This is the course to pick if you are just getting into coding and want to build a strong foundation. Widely used in competitive programming.',
        'price':11899,
        'early_price':7999

    },
    {
    'name':'Data structures and algorithms',
    'image':'https://files.codingninjas.com/python-11712.svg',
    'type':'Basics of Python with Data Structures and Algorithms',
    'duration': '6 months',
    'projects':'6+ projects',
    "enrolled":'17K+ students enrolled',
    'time':'60+ Hours',
    'rating':'https://files.codingninjas.in/4-8-stars-5588.png',
    'prblems':'350+',
    'for':'for Beginners and Experienced Learners',
    'time_img':'https://files.codingninjas.in/vector-1-19336.svg',
    'project_img':'https://files.codingninjas.in/mdi_palette-swatch-19337.svg',
    'descripton':'This is the course to pick if you are just getting into coding and want to build a strong foundation. Widely used in competitive programming.',
    'price':20998,
    'early_price':15899


},
{
    'name':'Data structures and algorithms',
    'image':'https://files.codingninjas.com/java-11713.svg',
    'type':'Basics of Java with Data Structures and Algorithms',
    'duration': '6 months',
    'projects':'6+ projects',
    "enrolled":'17K+ students enrolled',
    'time':'60+ Hours',
    'rating':'https://files.codingninjas.in/4-8-stars-5588.png',
    'prblems':'350+',
    'for':'for Beginners and Experienced Learners',
    'time_img':'https://files.codingninjas.in/vector-1-19336.svg',
    'project_img':'https://files.codingninjas.in/mdi_palette-swatch-19337.svg',
    'descripton':'This is the course to pick if you are just getting into coding and want to build a strong foundation. Widely used in competitive programming.',
    'price':11899
},
{
    'category':'Interview Preparation',
    'name':'Product Companies Interview Prep',
    'image':'https://files.codingninjas.in/service-based-companies-14528.svg',
    'type':'Product Companies Interview Prep',
    'duration': '6 months',
    'projects':'6+ projects',
    "enrolled":'17K+ students enrolled',
    'time':'60+ Hours',
    'rating':'https://files.codingninjas.in/4-8-stars-5588.png',
    'prblems':'250+',
    'for':'for students who know the basics',
    'time_img':'https://files.codingninjas.in/vector-1-19336.svg',
    'project_img':'https://files.codingninjas.in/mdi_palette-swatch-19337.svg',
    'descripton':'Practice tougher problems which are asked in technical interview rounds and learn some tricks to solve them faster and with more confidence.',
    'price':27629,
    'early_price':39469
},
{
    'category':'Interview Preparation',
    'name':'Database Management System',
    'image':'https://files.codingninjas.com/os-dbms-12694.svg',
    'type':'Top Database Management System (DBMS) course [Updated in 2023]',
    'duration': '2 months',
    'projects':'6+ projects',
    "enrolled":'500+ students enrolled',
    'time':'10+ Hours',
    'rating':'https://files.codingninjas.in/4-8-stars-5588.png',
    'prblems':'150+',
    'for':'for students who know the basics',
    'time_img':'https://files.codingninjas.in/vector-1-19336.svg',
    'project_img':'https://files.codingninjas.in/mdi_palette-swatch-19337.svg',
    'descripton':'This course will prepare you for the questions asked on DBMS in software engineering interviews.',
    'price':27629,
    'early_price':39469
},
{
    'category':'Interview Preparation',
    'name':'System Design',
    'image':'https://files.codingninjas.com/system-design-12695.svg',
    'type':'',
    'duration': '3 months',
    'projects':'6+ projects',
    "enrolled":'500+ students enrolled',
    'time':'15+ Hours',
    'rating':'https://files.codingninjas.in/4-8-stars-5588.png',
    'prblems':'5+ case studies',
    'for':'for students who know the basics',
    'time_img':'https://files.codingninjas.in/vector-1-19336.svg',
    'project_img':'https://files.codingninjas.in/mdi_palette-swatch-19337.svg',
    'descripton':'This course will prepare you for the questions asked on DBMS in software engineering interviews.',
    'price':5782,
    'early_price':8260
},
{
    'category':'Analytics & Data Science',
    'name':'Analytics & Data Science',
    'image':'https://files.codingninjas.in/group-7241-15644.png',
    'type':'',
    'duration': '2 months',
    'projects':'6+ projects',
    "enrolled":'5K+ students enrolled',
    'time':'50+ Hours',
    'rating':'https://files.codingninjas.in/4-8-stars-5588.png',
    'prblems':'200+ problems',
    'projects':'8+',
    'for':'for students who know the basics',
    'time_img':'https://files.codingninjas.in/vector-1-19336.svg',
    'project_img':'https://files.codingninjas.in/mdi_palette-swatch-19337.svg',
    'descripton':'Start your career as a Data Analyst by acquiring the required skills and study different tools like Spreadsheet, SQL, Python, Tableau and Machine Learning concepts along with real-world projects.',
    'price':14868,
    'early_price':21240
},
{
    'category':' Interview Preparation',
    'name':' Operating System',
    'image':'https://files.codingninjas.com/operating-system-12696.svg',
    'type':'Best Data Analytics Course Online[Updated in 2023]',
    'duration': '2 months',
    'projects':'6+ projects',
    "enrolled":'400+ students enrolled',
    'time':'12+ Hours',
    'rating':'https://files.codingninjas.in/4-8-stars-5588.png',
    'prblems':'150+ problems',
    'for':'for students who know the basics',
    'time_img':'https://files.codingninjas.in/vector-1-19336.svg',
    'project_img':'https://files.codingninjas.in/mdi_palette-swatch-19337.svg',
    'descripton':'This course will prepare you for the questions asked on Operating systems in software engineering interviews.',
    'price':5900,
    'early_price':4130
},
{
    'category':'Analytics & Data Science',
    'name':'Machine Learning',
    'image':'https://files.codingninjas.com/ml-11707.svg',
    'type':'Machine Learning Course',
    'duration': '6 months',
    'projects':'1+ projects',
    "enrolled":'5K+ students enrolled',
    'time':'40+ Hours',
    'rating':'https://files.codingninjas.in/4-8-stars-5588.png',
    'prblems':'10+ problems',
    'projects':'',
    'for':'for Beginners and Experienced Learners',
    'time_img':'https://files.codingninjas.in/vector-1-19336.svg',
    'project_img':'https://files.codingninjas.in/mdi_palette-swatch-19337.svg',
    'descripton':'Learn to use data to make predictions',
    'price':50089,
    'early_price':35063
},
{
    'category':'Analytics & Data Science',
    'name':'Data Science & Machine Learning Course',
    'image':'https://files.codingninjas.com/data-science-11708.svg',
    'type':'Data Science & Machine Learning Course',
    'duration': '17 months',
    'projects':'1+ projects',
    "enrolled":'11K+ students enrolled',
    'time':'70+ Hours',
    'rating':'https://files.codingninjas.in/4-8-stars-5588.png',
    'prblems':'10+ problems',
    'projects':'12',
    'for':'for Beginners and Experienced Learners',
    'time_img':'https://files.codingninjas.in/vector-1-19336.svg',
    'project_img':'https://files.codingninjas.in/mdi_palette-swatch-19337.svg',
    'descripton':'Learn how to source, manipulate and visualise data using Python and its libraries. Build and refine your Machine Learning skills with the help of topics like Statistics, Trees, Neural Networks etc.',
    'price':34650,
    'early_price':49499
}

]
    )
}

module.exports.apiController=courseAPI;