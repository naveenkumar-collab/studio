
export type Student = {
  name: string;
  title: string;
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
  name: "Jane Smith",
  title: "Full-Stack Developer",
  bio: "A creative and detail-oriented full-stack developer, passionate about building scalable and user-friendly web applications. Always excited to learn new technologies and take on challenging projects.",
  contact: {
    email: "jane.smith@example.com",
    tel: "+1 987 654 3210",
    social: {
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
  resumeUrl: "/jane-smith-resume.pdf",
};
