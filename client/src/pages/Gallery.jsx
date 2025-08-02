import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Gallary = () => {
  const EventsCard = [
    {
      Name: "Networking Events",
      Img: "https://s29814.pcdn.co/wp-content/uploads/2017/06/shutterstock_479633479.jpg.optimal.jpg",
    },
    {
      Name: "Business Events",
      Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRik3aUj1hjOL9v6JfeDre-GeICYfpev_HRtA&s",
    },
    {
      Name: "Real State",
      Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQywWv-RlOFsYUVd-h6fEwqGomfGbIKQkMSbg&s",
    },
    {
      Name: "Lead Genration",
      Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQywWv-RlOFsYUVd-h6fEwqGomfGbIKQkMSbg&s",
    },
    {
      Name: "Benifits Of Networking",
      Img: "https://www.michaelpage.co.in/sites/michaelpage.com.au/files/inline-images/benefits%20of%20networking%2002.jpg",
    },
    {
      Name: "Social Media Guide",
      Img: "https://www.michaelpage.co.in/sites/michaelpage.com.au/files/inline-images/benefits%20of%20networking%2002.jpg",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto p-5 lg:bg-white md:bg-white bg-gray-100">
        <div className="p-1 mt-5 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mb-32 max-w-7xl mx-auto">
          {EventsCard.map((elm, idx) => {
            return (
              <>
                <div className="lg:w-[480px] md:w-[400px] w-80 rounded-2xl border mt-14">
                  <img
                    src={elm.Img}
                    className="w-full h-full object-cover rounded-2xl"
                    alt=""
                  />
                  <p className="text-center mt-1 mb-4 text-2xl">{elm.Name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallary;
