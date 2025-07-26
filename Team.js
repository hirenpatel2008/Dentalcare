import React from 'react';

const teamMembers = [
  {
    name: "Dr. Radhika Sharma",
    role: "Chief Dental Surgeon",
    image: "img/D1.jpg",
    about: "15+ years of experience in oral & maxillofacial surgery. Specializes in complex extractions and full mouth rehabilitation.",
  },
  {
    name: "Dr. Karan Deshmukh",
    role: "Orthodontist (Braces & Aligners)",
    image: "img/D2.jpg",
    about: "Expert in smile correction with metal, ceramic, and invisible braces. Certified Invisalign provider.",
  },
  {
    name: "Dr. Meera Nair",
    role: "Pediatric Dentist",
    image: "img/D3.jpg",
    about: "Specializes in treating children with gentle care. Trained in behavior management and preventive dentistry.",
  },
  {
    name: "Dr. Ajay Kapoor",
    role: "Endodontist (Root Canal Specialist)",
    image: "img/D4.jpg",
    about: "Performs advanced pain-free RCTs using rotary tools and microscope-enhanced precision.",
  },
];

const Team = () => {
  return (
    <>
      <section className="team-area section-gap" id="team">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">Meet Our Dental Experts</h1>
                <p>Qualified Indian dental professionals delivering excellence with compassion.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center d-flex align-items-stretch">
            {teamMembers.map((member, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <div className="card h-100 text-center shadow-sm p-3 border-0">
                  <img className="card-img-top rounded-circle mx-auto mt-3" src={member.image} alt={member.name} style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{member.name}</h5>
                    <p className="text-primary">{member.role}</p>
                    <p className="card-text text-muted small">{member.about}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
