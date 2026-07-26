import { portfolioData } from "../../data/portfolioData";


export const getAIResponse = (question) => {


  const text = question.toLowerCase().trim();



  // Greeting

  if(
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ){

    return `
Hello 👋 

I am Kartik AI Assistant.

I can help you explore:
🚀 Projects
💻 Skills
👨‍💻 Experience
🎓 Education
📄 Resume
    `;

  }





  // Identity

  if(
    text.includes("name") ||
    text.includes("who are you") ||
    text.includes("about kartik")
  ){

    return `
${portfolioData.name} is a ${portfolioData.role}.

He focuses on building modern web applications,
AI-powered experiences and scalable digital products.
    `;

  }





  // Skills

  if(
    text.includes("skill") ||
    text.includes("technology") ||
    text.includes("stack")
  ){

    return `
Kartik's technical skills include:

${portfolioData.skills
.map(skill=>`• ${skill}`)
.join("\n")}

`;

  }





  // Projects

  if(
    text.includes("project") ||
    text.includes("work")
  ){

    return `
Here are some projects:

${portfolioData.projects
.map(
(project)=>
`
🚀 ${project.name}

${project.description}
`
)
.join("\n")}

`;

  }





  // Experience

  if(
    text.includes("experience") ||
    text.includes("job") ||
    text.includes("company")
  ){

    return `
Professional Experience:

${portfolioData.experience}
`;

  }





  // Education

  if(
    text.includes("education") ||
    text.includes("degree") ||
    text.includes("study")
  ){

    return `
Education:

${portfolioData.education}
`;

  }





  // Resume

  if(
    text.includes("resume") ||
    text.includes("cv")
  ){

    return `
You can download Kartik's resume from the
Download Resume button.

It contains:
• Skills
• Experience
• Projects
• Education
`;

  }





  // Contact

  if(
    text.includes("contact") ||
    text.includes("email")
  ){

    return `
You can connect with Kartik through:

LinkedIn
GitHub
Email

`;

  }





  // Default

  return `
I can help you with:

🚀 Projects
💻 Skills
👨‍💻 Experience
🎓 Education
📄 Resume
📞 Contact

Try asking:
"Show me projects"
"What are your skills?"
"Tell me about experience"
`;

};