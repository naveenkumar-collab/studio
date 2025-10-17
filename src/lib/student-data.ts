
export type Student = {
  name: string;
  title: string;
  college: string;
  bio: string;
  contact: {
    email: string;
    tel: string;
    social: {
      github: string;
      linkedin: string;
    };
  };
  resumeUrl: string;
};

export const defaultStudent: Student = {
  name: "Naveen Kumar",
  title: "Full-Stack Developer",
  college: "Sri Indu College of Engineering and Technology",
  bio: "A creative and detail-oriented full-stack developer, passionate about building scalable and user-friendly web applications. Always excited to learn new technologies and take on challenging projects.",
  contact: {
    email: "naveen.kumar@example.com",
    tel: "+1 123 456 7890",
    social: {
      github: "https://github.com/naveenkumar",
      linkedin: "https://linkedin.com/in/naveenkumar",
    },
  },
  resumeUrl: "/naveen-kumar-resume.pdf",
};
