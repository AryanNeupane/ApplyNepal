import React from 'react';

const testimonials = [
  {
    name: "Sujal Thapa",
    title: "Frontend Developer at SoftNep",
    quote: "Working with Aryan was an absolute game-changer. His eye for detail and ability to challenge the norm truly makes his work stand out.",
    image: "/images/sujal.jpg", // Replace with your image path
  },
  {
    name: "Aarati Shrestha",
    title: "Product Designer at HamroDesign",
    quote: "He doesn’t just build apps — he builds experiences. You’ll learn something new just by watching him work.",
    image: "/images/aarati.jpg",
  },
  {
    name: "Pratik Poudel",
    title: "CTO at CodeYak",
    quote: "A rare mix of technical sharpness and philosophical insight. Aryan brings meaning to code.",
    image: "/images/pratik.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What Others Say</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 object-cover rounded-full border"
              />
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed italic">“{testimonial.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
