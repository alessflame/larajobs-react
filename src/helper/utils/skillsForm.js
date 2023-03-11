const skills = {
    "Sviluppo web": [
        "Javascript",
        "Python",
        "Java",
        "PHP",
        "React",
        "NodeJS",
        "Angular",
        "Laravel",
        "SQL",
        "MONGODB",
    ],
    "Marketing": [
        "SEO",
        "SEM",
        "Copywriting",
        "FacebookAds",
        "GoogleAds",
        "Social Media",
    ],
    "design": ["Wordpress", "Shopify", "UX", "UI", "HTML", "CSS"],

    "blockchain": ["Python", "Java", "Solidity", "Smart Contract", ""],
};


export const skillsProperty=(category)=>{
return skills[category];
}


export const trasformJSONToObject=(skills)=>{
    return JSON.parse(skills);
}