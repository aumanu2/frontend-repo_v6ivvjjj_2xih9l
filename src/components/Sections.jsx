import { GraduationCap, Beaker, Users, Star, Mail } from 'lucide-react';

function Section({ id, icon: Icon, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
            <Icon size={20} />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {children}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <Section id="about" icon={Users} title="About Me">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="aspect-[4/5] w-full rounded-xl bg-gradient-to-br from-blue-100 to-slate-100"></div>
        </div>
        <div className="md:col-span-2">
          <p className="text-slate-600 leading-relaxed">
            Write a short personal statement here that captures your passion for psychology, your
            values, and what motivates your academic journey. Mention any formative experiences that
            sparked your interest in human behaviour and mental health.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function AcademicSection() {
  return (
    <Section id="academic" icon={GraduationCap} title="Academic Background">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-200 p-4">
          <h3 className="font-semibold text-slate-900">Education</h3>
          <ul className="mt-3 space-y-2 text-slate-600 text-sm">
            <li>• Degree / Diploma – Institution Name – Years</li>
            <li>• Relevant coursework – Psychology, Statistics, Research Methods</li>
            <li>• Awards, honors, GPA (if desired)</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <h3 className="font-semibold text-slate-900">Certifications & Training</h3>
          <ul className="mt-3 space-y-2 text-slate-600 text-sm">
            <li>• Certificate – Provider – Year</li>
            <li>• Workshop / Seminar – Topic</li>
            <li>• Online course – Platform – Outcome</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function ResearchSection() {
  return (
    <Section id="research" icon={Beaker} title="Research & Projects">
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl border border-slate-200 p-4 hover:shadow-md transition-shadow">
            <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-blue-100 to-slate-100" />
            <h3 className="mt-3 font-semibold text-slate-900">Project title {i}</h3>
            <p className="mt-1 text-sm text-slate-600">
              Brief description of the research question, methodology, and your role.
            </p>
            <ul className="mt-2 text-xs text-slate-500 list-disc pl-4">
              <li>Methods: survey, experiment, qualitative</li>
              <li>Tools: SPSS, R, Python</li>
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ActivitiesSkillsSection() {
  return (
    <Section id="activities" icon={Users} title="Extracurricular Activities">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-200 p-4">
          <h3 className="font-semibold text-slate-900">Leadership & Service</h3>
          <ul className="mt-3 space-y-2 text-slate-600 text-sm">
            <li>• Volunteering – Organization – Role</li>
            <li>• Student societies – Position – Contribution</li>
            <li>• Community work – Mental health advocacy</li>
          </ul>
        </div>
        <div id="skills" className="rounded-xl border border-slate-200 p-4">
          <h3 className="font-semibold text-slate-900">Skills</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {['Research Methods', 'Statistics', 'Critical Thinking', 'Communication', 'Empathy', 'Data Analysis'].map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                <Star size={14} className="mr-1 text-blue-600" /> {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function ContactSection() {
  return (
    <Section id="contact" icon={Mail} title="Contact">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-slate-600">
            Add your preferred contact details here. You can include email, phone, and links to
            professional profiles. The form is a simple placeholder ready to be connected later.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              download
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-blue-700"
            >
              Download CV
            </a>
            <a
              href="#home"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50"
            >
              Back to top
            </a>
          </div>
        </div>
        <form className="rounded-xl border border-slate-200 p-4 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Name</label>
              <input className="w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Email</label>
              <input type="email" className="w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-600 mb-1">Message</label>
              <textarea rows="4" className="w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Say hello" />
            </div>
          </div>
          <button type="button" className="mt-4 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700">Send</button>
        </form>
      </div>
    </Section>
  );
}
