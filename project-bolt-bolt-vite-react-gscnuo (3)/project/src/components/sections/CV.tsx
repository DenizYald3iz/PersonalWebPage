import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export function CV() {
  return (
    <section id="cv" className="py-20 bg-[#AB886D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Curriculum Vitae</h2>
        
        <div className="space-y-12">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Briefcase className="text-[#AB886D] mr-4" size={24} />
              <h3 className="text-2xl font-semibold text-[#493628]">Experience</h3>
            </div>
            <div className="space-y-6">
              {[
                {
                  role: 'Senior Software Engineer',
                  company: 'Tech Corp',
                  period: '2020 - Present',
                  description: 'Leading development of cloud-native applications'
                },
                {
                  role: 'Software Engineer',
                  company: 'StartUp Inc',
                  period: '2018 - 2020',
                  description: 'Full-stack development using React and Node.js'
                }
              ].map((job) => (
                <div key={job.role} className="border-l-2 border-[#AB886D] pl-4">
                  <h4 className="text-lg font-semibold text-[#493628]">{job.role}</h4>
                  <p className="text-[#493628]/80">{job.company} | {job.period}</p>
                  <p className="text-[#493628]/70 mt-2">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <GraduationCap className="text-[#AB886D] mr-4" size={24} />
              <h3 className="text-2xl font-semibold text-[#493628]">Education</h3>
            </div>
            <div className="border-l-2 border-[#AB886D] pl-4">
              <h4 className="text-lg font-semibold text-[#493628]">MSc in Computer Science</h4>
              <p className="text-[#493628]/80">University of Technology | 2016 - 2018</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Award className="text-[#AB886D] mr-4" size={24} />
              <h3 className="text-2xl font-semibold text-[#493628]">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#E4E0E1] text-[#493628] rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}