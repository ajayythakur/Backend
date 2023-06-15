const AluminiStories=(req,res)=>{
    res.send([
    {
        'info':'CS novice to Google',
        'description':'Despite being from a tier 3 college, I would like to thank my mentors & teachers at Coding Ninjas who helped me land a job at Google. Both Parikh sir and Ankush sir are brilliant teachers who know how to explain difficult concepts in an easy way.',
        'name':'Pareksha Manchanda',
        'designation':'Software Engineer',
        'company_logo':'https://files.codingninjas.com/google-12193.png',
        'photo':'https://files.codingninjas.in/pareksha-manchanda-9862-1-1-9918-1-10357-17472.webp'
    },
    {
        'info':'College dropout to a package of 10 LPA',
        'description':'The experience and knowledge I learned at Coding Ninjas greatly sharpened my skills and allowed me to pass the HackerRank and technical interview rounds. The placement team coordinated everything perfectly and it was unbelievable to get an offer letter of 10 LPA. Grateful to Coding Ninjas.',
        'name':'Harsh Agrawal',
        'designation':'Software Engineer',
        'company_logo':'https://files.codingninjas.com/avalara-10511.png',
        'photo':'https://files.codingninjas.in/harsh-cn-10510-1-10512-17471.webp'
    },
    {
        'info':'Non-CS branch to Top Company',
        'description':'It has been a crazy ride from being a novice CS student to a 6 star Coder and ICPC Regionalist. I would like to thank Coding Ninjas for helping a Tier-3 college student explore such opportunities.',
        'name':'Satwika Bhattacharjee',
        'designation':'Analyst',
        'company_logo':'https://files.codingninjas.com/cn-logo-12194.png',
        'photo':'https://files.codingninjas.com/satwika-bhattacharjee-9762-9857.webp'
    },    {
        'info':'Tier-3 college to 6 stars on CodeChef',
        'description':'It has been a crazy ride from being a novice CS student to a 6 star Coder and ICPC Regionalist. I would like to thank Coding Ninjas for helping a Tier-3 college student explore such opportunities.',
        'name':'Harsh Agrawal',
        'designation':'Member of Technical Staff',
        'company_logo':'https://files.codingninjas.com/avalara-10511.png',
        'photo':'https://files.codingninjas.com/rahul-9626-9859.webp'
    },

])
}

module.exports.apiController= AluminiStories; 