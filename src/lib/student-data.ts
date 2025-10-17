
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
  name: "Alex Doe",
  title: "Aspiring Web Developer",
  bio: "A passionate and creative developer with a knack for building beautiful and functional web applications. Eager to learn and contribute to a forward-thinking team.",
  contact: {
    email: "alex.doe@email.com",
    tel: "+1 234 567 890",
    social: {
      github: "https://github.com/alexdoe",
      linkedin: "https://linkedin.com/in/alexdoe",
    },
  },
  resumeUrl: "/alex-doe-resume.pdf",
};
