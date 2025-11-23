'use client';

import { useState } from 'react';
import { Check, CheckCircle2, ArrowRight, Send, AlertCircle, Activity } from 'lucide-react';
import { FadeIn } from '@/components/ui';
import { Button } from '@/components/ui';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  crm: boolean;
  nda: boolean;
}

interface FormErrors {
  [key: string]: string;
}

interface Selections {
  type: string;
  stage: string;
  industry: string;
  timeline: string;
  teamSize: string;
}

const validateEmail = (email: string): boolean => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) !== null;
};

const validatePhone = (phone: string): boolean => {
  return String(phone).match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im) !== null;
};

interface OptionProps {
  label: string;
  onClick: () => void;
}

const Option = ({ label, onClick }: OptionProps) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-between p-4 md:p-5 bg-white border border-gray-200 rounded-xl hover:border-[#0062D1] hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 group text-left"
  >
    <span className="font-semibold text-[#0F172A] text-sm md:text-base pr-4">{label}</span>
    <div className="w-6 h-6 md:w-8 md:h-8 shrink-0 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#0062D1] group-hover:text-white transition-colors">
      <ArrowRight size={14} />
    </div>
  </button>
);

export default function Wizard() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<Selections>({
    type: '',
    stage: '',
    industry: '',
    timeline: '',
    teamSize: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    crm: false,
    nda: false
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleSelect = (key: string, value: string) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
    setStep((prev) => prev + 1);
  };

  const getRecommendation = () => {
    const { type, timeline, industry, stage, teamSize } = selections;
    let serviceName = 'Custom Software Development';
    let team = 'Dedicated Team';
    let composition = '3 Developers, 1 QA';
    let time = '48 hours';

    if (type.includes('Mobile'))
      serviceName = industry.includes('Fintech')
        ? 'Fintech Mobile Banking App'
        : industry.includes('Health')
          ? 'mHealth Application'
          : 'Custom Mobile App Development';
    else if (type.includes('Web'))
      serviceName = industry.includes('E-Commerce') ? 'High-Load E-Commerce Platform' : 'Web Platform Engineering';
    else if (type.includes('Enterprise'))
      serviceName = 'Enterprise ERP/CRM Solution';
    else if (type.includes('Cloud'))
      serviceName = 'Cloud Infrastructure & DevOps';

    if (teamSize.includes('Small'))
      composition = '2 Developers, 1 QA, 0.5 PM';
    else if (teamSize.includes('Medium'))
      composition = '4 Developers, 1 QA, 1 PM, 1 DevOps';
    else if (teamSize.includes('Large'))
      composition = '8+ Cross-functional Experts';
    else
      composition = timeline.includes('Urgent') ? 'Senior Squad (Rapid Deployment)' : 'Balanced Agile Team';

    if (timeline.includes('ASAP')) {
      time = '24-48 hours (Priority)';
      team = 'Rapid Response Team';
    } else {
      time = '1 week';
    }

    if (stage.includes('Idea'))
      serviceName += ' (MVP)';
    if (stage.includes('Legacy'))
      serviceName = 'Legacy Modernization: ' + serviceName;

    return { serviceName, team, composition, time };
  };

  const recommendation = getRecommendation();

  const validateForm = (): boolean => {
    let isValid = true;
    const errors: FormErrors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    if (!formData.crm) {
      errors.crm = 'You must agree to be added to the CRM';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmitProposal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  const handleReset = () => {
    setShowForm(false);
    setIsSuccess(false);
    setStep(1);
    setFormData({ fullName: '', email: '', phone: '', crm: false, nda: false });
    setFormErrors({});
  };

  return (
    <section className="relative z-20 -mt-16 pb-12 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn delay={200} direction="up">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl shadow-gray-900/10 border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            {/* Left Panel - Blue Background */}
            <div className="md:w-1/3 bg-[#0062D1] p-6 md:p-10 text-white relative overflow-hidden shrink-0">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10 h-full flex flex-col justify-between gap-8">
                <div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-200 mb-3 md:mb-4">
                    Project Configurator
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 leading-tight">
                    Get an <br /> Estimate
                  </h3>
                  <p className="text-blue-100 text-xs md:text-sm leading-relaxed">
                    Answer 5 simple questions. Our algorithm will recommend the service, team structure, and estimated start time.
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="flex justify-between text-[10px] md:text-xs font-bold mb-2 text-blue-200">
                    <span>STEP {step} OF 6</span>
                    <span>{Math.round((step / 6) * 100)}%</span>
                  </div>
                  <div className="h-1.5 bg-blue-900/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white transition-all duration-500 ease-out"
                      style={{ width: `${(step / 6) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Content */}
            <div className="md:w-2/3 p-6 md:p-14 bg-white flex flex-col justify-center min-h-[400px]">
              {!showForm ? (
                <>
                  {step === 1 && (
                    <div className="animate-fade-in w-full">
                      <h4 className="text-lg md:text-xl font-bold text-[#0F172A] mb-6 md:mb-8">
                        1. What type of solution do you need?
                      </h4>
                      <div className="grid grid-cols-1 gap-3 md:gap-4">
                        <Option label="Mobile Application (iOS & Android)" onClick={() => handleSelect('type', 'Mobile Application')} />
                        <Option label="Web Platform / SaaS Product" onClick={() => handleSelect('type', 'Web Platform')} />
                        <Option label="Enterprise ERP / CRM System" onClick={() => handleSelect('type', 'Enterprise System')} />
                        <Option label="Cloud Infrastructure / DevOps" onClick={() => handleSelect('type', 'Cloud Infrastructure')} />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="animate-fade-in w-full">
                      <h4 className="text-lg md:text-xl font-bold text-[#0F172A] mb-6 md:mb-8">
                        2. What is the current stage?
                      </h4>
                      <div className="grid grid-cols-1 gap-3 md:gap-4">
                        <Option label="Idea / Concept (Need MVP)" onClick={() => handleSelect('stage', 'Idea')} />
                        <Option label="MVP / Prototype (Need Scaling)" onClick={() => handleSelect('stage', 'MVP')} />
                        <Option label="Scaling / Growth" onClick={() => handleSelect('stage', 'Scaling')} />
                        <Option label="Legacy System (Need Modernization)" onClick={() => handleSelect('stage', 'Legacy')} />
                      </div>
                      <button
                        onClick={() => setStep(1)}
                        className="mt-6 text-xs font-bold text-gray-400 hover:text-[#0062D1] flex items-center gap-1 transition-colors"
                      >
                        ← Back
                      </button>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="animate-fade-in w-full">
                      <h4 className="text-lg md:text-xl font-bold text-[#0F172A] mb-6 md:mb-8">
                        3. What is your industry?
                      </h4>
                      <div className="grid grid-cols-1 gap-3 md:gap-4">
                        <Option label="Fintech / Banking" onClick={() => handleSelect('industry', 'Fintech')} />
                        <Option label="Healthcare / MedTech" onClick={() => handleSelect('industry', 'Healthcare')} />
                        <Option label="E-Commerce / Retail" onClick={() => handleSelect('industry', 'E-Commerce')} />
                        <Option label="Fitness & Wellness" onClick={() => handleSelect('industry', 'Fitness')} />
                      </div>
                      <button
                        onClick={() => setStep(2)}
                        className="mt-6 text-xs font-bold text-gray-400 hover:text-[#0062D1] flex items-center gap-1 transition-colors"
                      >
                        ← Back
                      </button>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="animate-fade-in w-full">
                      <h4 className="text-lg md:text-xl font-bold text-[#0F172A] mb-6 md:mb-8">
                        4. What is your expected timeline?
                      </h4>
                      <div className="grid grid-cols-1 gap-3 md:gap-4">
                        <Option label="ASAP (< 1 month)" onClick={() => handleSelect('timeline', 'ASAP')} />
                        <Option label="1-3 Months" onClick={() => handleSelect('timeline', '1-3 Months')} />
                        <Option label="3-6 Months" onClick={() => handleSelect('timeline', '3-6 Months')} />
                        <Option label="6+ Months" onClick={() => handleSelect('timeline', '6+ Months')} />
                      </div>
                      <button
                        onClick={() => setStep(3)}
                        className="mt-6 text-xs font-bold text-gray-400 hover:text-[#0062D1] flex items-center gap-1 transition-colors"
                      >
                        ← Back
                      </button>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="animate-fade-in w-full">
                      <h4 className="text-lg md:text-xl font-bold text-[#0F172A] mb-6 md:mb-8">
                        5. Preferred Team Size?
                      </h4>
                      <div className="grid grid-cols-1 gap-3 md:gap-4">
                        <Option label="Small Team (< 3 devs)" onClick={() => handleSelect('teamSize', 'Small')} />
                        <Option label="Medium Squad (3-7 devs)" onClick={() => handleSelect('teamSize', 'Medium')} />
                        <Option label="Large Dept (8+ devs)" onClick={() => handleSelect('teamSize', 'Large')} />
                        <Option label="Not sure, advise me" onClick={() => handleSelect('teamSize', 'Not sure')} />
                      </div>
                      <button
                        onClick={() => setStep(4)}
                        className="mt-6 text-xs font-bold text-gray-400 hover:text-[#0062D1] flex items-center gap-1 transition-colors"
                      >
                        ← Back
                      </button>
                    </div>
                  )}

                  {step === 6 && (
                    <div className="animate-fade-in text-center w-full">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <Check size={32} className="md:w-10 md:h-10" />
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-2">
                        Your Recommended Solution
                      </h4>
                      <div className="bg-gray-50 rounded-xl p-6 my-6 border border-gray-100 text-left max-w-md mx-auto">
                        <div className="mb-4 pb-4 border-b border-gray-200">
                          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                            Recommended Service
                          </div>
                          <div className="text-lg font-bold text-[#0062D1]">{recommendation.serviceName}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                              Team Composition
                            </div>
                            <div className="text-sm font-semibold text-gray-700">{recommendation.composition}</div>
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                              Est. Start
                            </div>
                            <div className="text-sm font-semibold text-gray-700">{recommendation.time}</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button variant="primary" onClick={() => setShowForm(true)}>
                          Request Detailed Proposal
                        </Button>
                        <button
                          onClick={() => {
                            setStep(1);
                            setSelections({ type: '', stage: '', industry: '', timeline: '', teamSize: '' });
                          }}
                          className="py-3 px-6 text-sm font-semibold text-gray-500 hover:text-[#0062D1] transition-colors"
                        >
                          Start Over
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : isSuccess ? (
                <div className="animate-fade-in text-center w-full">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Request Sent!</h3>
                  <p className="text-gray-500 mb-8">
                    Thank you for your request. We will analyze your data and contact you within <strong>12 hours</strong>.
                  </p>
                  <div className="flex justify-center">
                    <Button variant="outline" onClick={handleReset}>
                      Back to Calculator
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="animate-fade-in w-full max-w-md mx-auto">
                  <div className="text-center mb-8">
                    <div className="text-xs font-bold text-[#0062D1] uppercase tracking-wider mb-2">Final Step</div>
                    <h3 className="text-2xl font-bold text-[#0F172A]">Where should we send it?</h3>
                  </div>
                  <form onSubmit={handleSubmitProposal} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-gray-500 tracking-wider ml-1">
                        Full Name
                      </label>
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full p-3 bg-gray-50 border rounded-lg text-gray-900 focus:border-[#0062D1] focus:bg-white outline-none transition-all ${
                          formErrors.fullName ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="John Doe"
                      />
                      {formErrors.fullName && (
                        <p className="text-red-500 text-[10px] ml-1">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-gray-500 tracking-wider ml-1">
                        Work Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full p-3 bg-gray-50 border rounded-lg text-gray-900 focus:border-[#0062D1] focus:bg-white outline-none transition-all ${
                          formErrors.email ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="john@company.com"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-[10px] ml-1">{formErrors.email}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-gray-500 tracking-wider ml-1">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full p-3 bg-gray-50 border rounded-lg text-gray-900 focus:border-[#0062D1] focus:bg-white outline-none transition-all ${
                          formErrors.phone ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="+1 (555) 000-0000"
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-[10px] ml-1">{formErrors.phone}</p>
                      )}
                    </div>

                    <div
                      className={`space-y-3 bg-gray-50/50 p-4 rounded-lg border ${
                        formErrors.crm ? 'border-red-200 bg-red-50/50' : 'border-gray-100'
                      }`}
                    >
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center mt-0.5">
                          <input
                            type="checkbox"
                            name="crm"
                            checked={formData.crm}
                            onChange={handleInputChange}
                            className="peer sr-only"
                          />
                          <div className="w-4 h-4 border-2 border-gray-300 rounded bg-white peer-checked:bg-[#0062D1] peer-checked:border-[#0062D1] transition-all" />
                          <Check
                            size={10}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                          />
                        </div>
                        <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors leading-tight">
                          I agree to be added to the CRM for project communication.
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center mt-0.5">
                          <input
                            type="checkbox"
                            name="nda"
                            checked={formData.nda}
                            onChange={handleInputChange}
                            className="peer sr-only"
                          />
                          <div className="w-4 h-4 border-2 border-gray-300 rounded bg-white peer-checked:bg-[#0062D1] peer-checked:border-[#0062D1] transition-all" />
                          <Check
                            size={10}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                          />
                        </div>
                        <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors leading-tight">
                          I request a Non-Disclosure Agreement (NDA) before details.
                        </span>
                      </label>
                    </div>
                    {formErrors.crm && (
                      <div className="flex items-center gap-1 text-red-500 text-[10px] mt-1">
                        <AlertCircle size={10} /> {formErrors.crm}
                      </div>
                    )}

                    <div className="pt-4">
                      <Button
                        variant="primary"
                        className="w-full justify-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">
                              <Activity size={16} />
                            </span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={16} className="mr-2" /> Send Proposal Request
                          </>
                        )}
                      </Button>
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="w-full py-3 text-xs font-bold text-gray-400 hover:text-gray-600 mt-2"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
