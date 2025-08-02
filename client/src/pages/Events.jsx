import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const rawEvents = [
  {
    id: 1,
    title: "ICAI Annual Seminar 2025",
    date: "2025-09-07",
    location: "Virtual Zoom Event",
    image: "https://static.wixstatic.com/media/ab190f_20bb3a8256f6465dad670acf1357f7d8~mv2.jpg/v1/fill/w_516,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ab190f_20bb3a8256f6465dad670acf1357f7d8~mv2.jpg",
  },
  {
    id: 2,
    title: "NY Networking Meetup",
    date: "2025-08-25",
    location: "88 Regent St, NYC",
    image: "https://static.wixstatic.com/media/8628ba_370924e4b21b42519f1940498a1bbe5e~mv2.png/v1/fill/w_516,h_334,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8628ba_370924e4b21b42519f1940498a1bbe5e~mv2.png",
  },
  {
    id: 3,
    title: "Webinar: Audit Compliance",
    date: "2025-08-30",
    location: "Online on Zoom",
    image: "https://static.wixstatic.com/media/ab190f_05ef4ea85a6b4074b86241cf0498fdcd~mv2.jpg/v1/fill/w_516,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ab190f_05ef4ea85a6b4074b86241cf0498fdcd~mv2.jpg",
  },
  {
    id: 4,
    title: "Webinar: Tech in Finance",
    date: "2025-07-06",
    location: "Zoom Meeting",
    image: "https://static.wixstatic.com/media/8628ba_fe8d8a38b5f0469d8fcd07ff20f6ca9f~mv2.jpg/v1/fill/w_516,h_289,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8628ba_fe8d8a38b5f0469d8fcd07ff20f6ca9f~mv2.jpg",
  },
  {
    id: 5,
    title: "Coffee Social Meetup",
    date: "2025-06-14",
    location: "Times Cafe, NYC",
    image: "https://static.wixstatic.com/media/ab190f_405246ba996644188451a63206c2017a~mv2.jpg/v1/fill/w_516,h_509,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ab190f_405246ba996644188451a63206c2017a~mv2.jpg",
  },
  {
    id: 6,
    title: "India's Budget 2024 Webinar",
    date: "2025-03-15",
    location: "Online on Zoom",
    image: "https://static.wixstatic.com/media/8628ba_206d0ad8d0e349219ff76dae5e593b84~mv2.jpg/v1/fill/w_516,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8628ba_206d0ad8d0e349219ff76dae5e593b84~mv2.jpg",
  },
  {
    id: 7,
    title: "India's Budget 2024 Webinar",
    date: "2025-10-15",
    location: "Online on Zoom",
    image: "https://static.wixstatic.com/media/8628ba_fc4a865a29114f068cf5419efb9deb41~mv2.webp/v1/fill/w_516,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8628ba_fc4a865a29114f068cf5419efb9deb41~mv2.webp",
  },
  {
    id: 8,
    title: "India's Budget 2024 Webinar",
    date: "2025-6-15",
    location: "Online on Zoom",
    image: "https://static.wixstatic.com/media/8628ba_d1d937b7b919422ea938b96121960ae6~mv2.jpg/v1/fill/w_516,h_316,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8628ba_d1d937b7b919422ea938b96121960ae6~mv2.jpg",
  },
];

const EventCard = ({ title, date, location, image }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h2 className="font-semibold text-lg mb-1">{title}</h2>
        <p className="text-sm text-gray-600 mb-2">
          {formattedDate} | {location}
        </p>
        <button
          className="inline-block bg-blue-700 w-full mt-4 text-white text-lg px-4 py-2 rounded hover:bg-blue-600 duration-300 cursor-pointer" >
          Details
        </button>
      </div>
    </div>
  );
};

const Events = () => {
  const today = new Date();

  const upcoming = rawEvents.filter((event) => new Date(event.date) >= today);
  const past = rawEvents.filter((event) => new Date(event.date) < today);

  // Optional: Sort both arrays by date
  upcoming.sort((a, b) => new Date(a.date) - new Date(b.date));
  past.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Header />
      <div className="bg-gray-50 text-gray-900 font-sans py-10 px-4 max-w-6xl mx-auto">
        {upcoming.length > 0 && (
          <section className="mb-12">
            <h1 className="text-3xl font-bold mb-6 border-b pb-2">
              Upcoming Events
            </h1>
            <div className="grid md:grid-cols-3 gap-6">
              {upcoming.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </section>
        )}

        {past.length > 0 && (
          <section>
            <h1 className="text-3xl font-bold mb-6 border-b pb-2">Past Events</h1>
            <div className="grid md:grid-cols-3 gap-6">
              {past.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Events;
