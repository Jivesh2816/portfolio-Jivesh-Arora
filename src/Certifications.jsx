import React from 'react';

const CERTIFICATIONS = [
  {
    name: 'AWS Certified Cloud Practitioner',
    code: 'CLF-C02',
    detail: 'Passed',
    icon: '☁️',
  },
  {
    name: 'AWS Certified AI Practitioner',
    code: 'AIF-C01',
    detail: 'Passed',
    icon: '🤖',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">Certifications</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.code}
              className="rounded-xl shadow-lg p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500 hover:shadow-2xl hover:scale-105 hover:border-green-400 transition-all duration-300 ease-in-out text-center"
            >
              <span className="text-4xl mb-4 block">{cert.icon}</span>
              <h3 className="font-bold text-lg mb-1 text-green-400">{cert.name}</h3>
              <p className="text-blue-200 mb-2">{cert.code}</p>
              <div className="bg-slate-700 rounded-lg p-2 inline-block px-4">
                <span className="text-white font-semibold text-sm">{cert.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
