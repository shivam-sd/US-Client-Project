import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Aboutus = () => {
  const boardMembers = [
    {
      name: "Sanjay Vatsa",
      role: "Chairman",
      img: "https://i2-prod.themirror.com/article861575.ece/ALTERNATES/s615/0_a-close-up-of-Elon-Musk.jpg",
    },
    {
      name: "Shivender Sofat",
      role: "Vice Chairman",
      img: "https://i2-prod.themirror.com/article861575.ece/ALTERNATES/s615/0_a-close-up-of-Elon-Musk.jpg",
    },
    {
      name: "Jay Shah",
      role: "Treasurer",
      img: "https://i2-prod.themirror.com/article861575.ece/ALTERNATES/s615/0_a-close-up-of-Elon-Musk.jpg",
    },
    {
      name: "Devang Prajapati",
      role: "Head of Events",
      img: "https://i2-prod.themirror.com/article861575.ece/ALTERNATES/s615/0_a-close-up-of-Elon-Musk.jpg",
    },
    {
      name: "Rajesh Mehta",
      role: "Head of Sponsorships",
      img: "https://i2-prod.themirror.com/article861575.ece/ALTERNATES/s615/0_a-close-up-of-Elon-Musk.jpg",
    },
    {
      name: "Nisha Soni",
      role: "Head of Social Media & Marketing",
      img: "https://i2-prod.themirror.com/article861575.ece/ALTERNATES/s615/0_a-close-up-of-Elon-Musk.jpg",
    },
    {
      name: "Rashmi Iyer",
      role: "Women Empowerment Lead",
      img: "https://i2-prod.themirror.com/article861575.ece/ALTERNATES/s615/0_a-close-up-of-Elon-Musk.jpg",
    },
    {
      name: "Tejas Shah",
      role: "Head of Memberships",
      img: "https://i2-prod.themirror.com/article861575.ece/ALTERNATES/s615/0_a-close-up-of-Elon-Musk.jpg",
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      <Header />

      {/* About Section */}
      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About ICAI New York
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The Institute of Chartered Accountants of India (ICAI) is the second
            largest accounting body in the world with over 300,000 members. The
            ICAI New York Chapter is committed to promoting ethical and
            responsible business practices, and we encourage our members to
            uphold the highest standards of integrity and professionalism.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            As a member of our organization, you will have access to a variety
            of resources and benefits, including networking opportunities,
            professional development events, and educational resources.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            If you are a Chartered Accountant (CA) from India living in New
            York, or are interested in joining the ICAI New York Chapter, we
            invite you to explore our Membership and LinkedIn pages.
          </p>
        </div>

        {/* Meet The Board Section */}
        <div>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Meet The Board
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition"
              >
                <div className="w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-2 border-gray-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Aboutus;
