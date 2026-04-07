import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events Hub",
  description:
    "Explore weSafe hackathons, workshops, and technology events across North, South, East, West, Central, and Northeast India. Join thousands of students and innovators.",
  keywords: [
    "hackathons",
    "events",
    "workshops",
    "technology events",
    "student events",
    "coding competitions",
    "India regions",
  ],
};

export default function EventsPage() {
  const regions = [
    { name: "North", id: "north", color: "blue" },
    { name: "South", id: "south", color: "green" },
    { name: "East", id: "east", color: "purple" },
    { name: "West", id: "west", color: "orange" },
    { name: "Central", id: "central", color: "pink" },
    { name: "Northeast", id: "northeast", color: "indigo" },
  ];

  const upcomingEvents = [
    {
      title: "Hackathon 2026",
      date: "June 15-17, 2026",
      region: "north",
      location: "Delhi",
      participants: "500+",
    },
    {
      title: "Web Dev Workshop",
      date: "June 20, 2026",
      region: "south",
      location: "Bangalore",
      participants: "150",
    },
    {
      title: "AI/ML Summit",
      date: "June 25-26, 2026",
      region: "west",
      location: "Mumbai",
      participants: "300+",
    },
    {
      title: "Code Sprint",
      date: "May 15, 2026",
      region: "east",
      location: "Kolkata",
      participants: "200",
    },
    {
      title: "Mobile Development Bootcamp",
      date: "April 10-12, 2026",
      region: "central",
      location: "Indore",
      participants: "120",
    },
    {
      title: "Northeast Tech Fest",
      date: "April 18-19, 2026",
      region: "northeast",
      location: "Guwahati",
      participants: "180",
    },
  ];

  const pastEvents = [
    {
      title: "Winter Hackathon 2025",
      date: "December 10-12, 2025",
      region: "north",
      location: "Delhi",
      participants: "450",
    },
    {
      title: "Cloud Computing Workshop",
      date: "November 28, 2025",
      region: "south",
      location: "Chennai",
      participants: "140",
    },
    {
      title: "Data Science Challenge",
      date: "November 15, 2025",
      region: "west",
      location: "Pune",
      participants: "280",
    },
    {
      title: "Cybersecurity Seminar",
      date: "October 20, 2025",
      region: "east",
      location: "Bangalore",
      participants: "190",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Events <span className="text-green-300">Hub</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Explore hackathons, workshops, and technology events happening
              across India
            </p>
          </div>
        </div>
      </section>

      {/* Region Filter Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Filter by Region
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {regions.map((region) => (
              <button
                key={region.id}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  region.color === "blue"
                    ? "bg-blue-600 text-white"
                    : "bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-400"
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Upcoming Events
            </h2>
            <p className="text-gray-600 text-lg">
              Mark your calendar for these exciting opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-200"
              >
                <div className="h-2 bg-gradient-to-r from-blue-500 to-green-500" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 flex-1 pr-2">
                      {event.title}
                    </h3>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <span className="mr-3">📅</span>
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-3">📍</span>
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-3">👥</span>
                      <span className="text-sm">{event.participants} expected</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${
                        event.region === "north"
                          ? "bg-blue-500"
                          : event.region === "south"
                          ? "bg-green-500"
                          : event.region === "east"
                          ? "bg-purple-500"
                          : event.region === "west"
                          ? "bg-orange-500"
                          : event.region === "central"
                          ? "bg-pink-500"
                          : "bg-indigo-500"
                      }`}
                    >
                      {event.region.charAt(0).toUpperCase() +
                        event.region.slice(1)}
                    </span>
                  </div>

                  <button className="w-full mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Past Events Gallery
            </h2>
            <p className="text-gray-600 text-lg">
              Highlights from our previous events and success stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="h-40 bg-gradient-to-br from-blue-200 to-green-200 flex items-center justify-center">
                  <span className="text-6xl">🎉</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">👥</span>
                      <span className="text-sm">{event.participants} participants</span>
                    </div>
                  </div>
                  <button className="text-blue-600 font-semibold hover:text-blue-700">
                    View Gallery →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Never Miss an Event
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Subscribe to our newsletter and get updates about upcoming events in
            your region
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
