import React from 'react';

const testimonials = [
  {
    name: "Rahul Verma",
    profession: "Software Engineer",
    image: "img/client1.jpg",
    feedback: "Best dental clinic I’ve ever visited. Very polite staff and hygienic environment!",
  },
  {
    name: "Pooja Sharma",
    profession: "Teacher",
    image: "img/client2.jpg",
    feedback: "I got my braces done here and the results are amazing. Highly recommended!",
  },
  {
    name: "Amit Rane",
    profession: "Business Owner",
    image: "img/client3.jpg",
    feedback: "They explained every step of my root canal in detail. Very professional team!",
  },
];

const Testimonial = () => {
  return (
    <section className="container my-5" id="testimonials">
      <h2 className="text-center fw-bold mb-4">Feedback from Our Real Clients</h2>
      <p className="text-center text-muted mb-5">Real stories from satisfied Indian patients.</p>

      <div className="row">
        {testimonials.map((client, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0 p-3 text-center">
              <img
                src={client.image}
                alt={client.name}
                className="rounded-circle mx-auto mb-3"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <h5 className="mb-1">{client.name}</h5>
              <p className="text-primary small">{client.profession}</p>
              <p className="text-muted small">"{client.feedback}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
