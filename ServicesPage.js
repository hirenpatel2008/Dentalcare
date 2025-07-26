import React from 'react';
const Service = () => {
  const dentalServices = [
    {
      title: 'Teeth Cleaning',
      desc: 'Professional scaling and polishing to remove plaque & stains.',
      icon: '🧼',
    },
    {
      title: 'Tooth Filling',
      desc: 'Cavity treatment with aesthetic, long-lasting filling material.',
      icon: '🦷',
    },
    {
      title: 'Root Canal Treatment',
      desc: 'Relieve pain & save the tooth with advanced RCT procedures.',
      icon: '💉',
    },
    {
      title: 'Braces & Aligners',
      desc: 'Straighten your teeth with metal braces or invisible aligners.',
      icon: '😁',
    },
    {
      title: 'Teeth Whitening',
      desc: 'Get a sparkling white smile with safe whitening treatment.',
      icon: '✨',
    },
    {
      title: 'Tooth Extraction',
      desc: 'Painless wisdom tooth removal by expert dental surgeons.',
      icon: '🩺',
    },
  ];

  return (
    <section className="container my-5" id="services">
      <h2 className="text-center mb-900 fw-bold text-dark display-1"> Our Dental Services</h2>
      <div className="row">
        {dentalServices.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow border-0 text-center p-4">
              <div className="display-3 mb-3">{service.icon}</div>
              <h5 className="fw-semibold text-dark">{service.title}</h5>
              <p className="text-muted">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
