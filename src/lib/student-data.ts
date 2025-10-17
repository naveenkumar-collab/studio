
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
  name: "Satya Nadella",
  title: "Full-Stack Developer",
  college: "Sri Indu College of Engineering and Technology",
  bio: "A creative and detail-oriented full-stack developer, passionate about building scalable and user-friendly web applications. Always excited to learn new technologies and take on challenging projects.",
  contact: {
    email: "satya.nadella@example.com",
    tel: "+1 987 654 3210",
    social: {
      github: "https://github.com/microsoft",
      linkedin: "https://linkedin.com/in/satyanadella",
    },
  },
  resumeUrl: "/satya-nadella-resume.pdf",
};
