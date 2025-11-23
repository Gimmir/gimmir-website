'use client'

import { useState, useRef } from 'react'
import { Globe, Shield, Upload, X, Check, AlertCircle, CheckCircle2, Send, Activity, Paperclip, Lock, Mail } from 'lucide-react'
import { Button, FadeIn } from '@/components/ui'

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

const validatePhone = (phone: string) => {
  return String(phone).match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
}

export const Contact = () => {
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    phone: '', 
    project: '', 
    crm: false, 
    nda: false 
  })
  const [files, setFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateContactForm = () => {
    let isValid = true
    const errors: Record<string, string> = {}
    
    if (!formData.firstName.trim()) { 
      errors.firstName = 'First name required'
      isValid = false
    }
    if (!formData.lastName.trim()) { 
      errors.lastName = 'Last name required'
      isValid = false
    }
    if (!formData.email.trim()) { 
      errors.email = 'Email required'
      isValid = false
    } else if (!validateEmail(formData.email)) { 
      errors.email = 'Invalid email format'
      isValid = false
    }
    if (formData.phone && !validatePhone(formData.phone)) { 
      errors.phone = 'Invalid phone format'
      isValid = false
    }
    if (!formData.crm) { 
      errors.crm = 'Required'
      isValid = false
    }
    
    setFormErrors(errors)
    return isValid
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }))
    
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    if (e.target.files && e.target.files.length > 0) {
      setFiles(prev => [...prev, ...Array.from(e.target.files!)])
    }
  }

  const removeFile = (index: number) => { 
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault()
    if (validateContactForm()) { 
      setIsSubmitting(true)
      setTimeout(() => { 
        setIsSubmitting(false)
        setIsSuccess(true)
      }, 1500)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,98,209,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,98,209,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 pt-8">
            <div className="lg:sticky lg:top-24">
              <FadeIn direction="right">
                <div className="mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-200 text-[#0062D1] text-[10px] font-mono font-bold uppercase tracking-widest mb-6 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#0062D1] animate-pulse" />
                    INITIATE_PROTOCOL
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
                    Let's Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062D1] to-cyan-500">Project</span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Leave your project details. Our technical director will prepare a preliminary estimation and roadmap within 24 hours.
                  </p>
                </div>

                <div className="space-y-8 border-t border-gray-200 pt-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#0062D1] shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Globe size={22} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0F172A]">Global Delivery</h4>
                      <p className="text-gray-500 text-sm">Distributed teams across US, EU, and UA.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#0062D1] shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Shield size={22} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0F172A]">NDA Protected</h4>
                      <p className="text-gray-500 text-sm">Your intellectual property is safe from day one.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="lg:col-span-7">
            <FadeIn direction="left" delay={200}>
              <div className="bg-[#0B101B] rounded-2xl p-1 border border-white/10 shadow-2xl shadow-blue-900/10 relative overflow-hidden">
                <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 justify-between rounded-t-xl">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[10px] font-mono text-blue-300/50 tracking-widest flex items-center gap-2">
                    SECURE_CONNECTION_ESTABLISHED
                  </div>
                </div>

                <div className="p-8 md:p-10 bg-[#0B101B] rounded-b-xl relative">
                  {isSuccess ? (
                    <div className="text-center animate-fade-in py-20">
                      <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
                        <CheckCircle2 size={40} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Request Received</h3>
                      <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                        Our team is analyzing your request. Expect a technical follow-up within <strong>12 hours</strong>.
                      </p>
                      <Button 
                        variant="outline" 
                        className="border-white/20 text-white hover:bg-white/10"
                        onClick={() => { 
                          setIsSuccess(false)
                          setFormData({ firstName: '', lastName: '', email: '', phone: '', project: '', crm: false, nda: false })
                          setFiles([])
                        }}
                      >
                        Send Another Request
                      </Button>
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono font-bold uppercase text-blue-300/70 tracking-wider ml-1">
                            First Name *
                          </label>
                          <input 
                            name="firstName" 
                            value={formData.firstName} 
                            onChange={handleInputChange}
                            className={`w-full p-3 bg-white/5 border rounded-lg text-white focus:border-[#0062D1] focus:bg-white/10 outline-none transition-all font-medium placeholder-gray-600 ${formErrors.firstName ? 'border-red-500/50' : 'border-white/10'}`}
                            placeholder="John" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono font-bold uppercase text-blue-300/70 tracking-wider ml-1">
                            Last Name *
                          </label>
                          <input 
                            name="lastName" 
                            value={formData.lastName} 
                            onChange={handleInputChange}
                            className={`w-full p-3 bg-white/5 border rounded-lg text-white focus:border-[#0062D1] focus:bg-white/10 outline-none transition-all font-medium placeholder-gray-600 ${formErrors.lastName ? 'border-red-500/50' : 'border-white/10'}`}
                            placeholder="Doe" 
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono font-bold uppercase text-gray-500 tracking-wider ml-1">
                            Work Email *
                          </label>
                          <input 
                            name="email" 
                            type="email" 
                            value={formData.email} 
                            onChange={handleInputChange}
                            className={`w-full p-3 bg-white/5 border rounded-lg text-white focus:border-[#0062D1] focus:bg-white/10 outline-none transition-all placeholder-gray-600 font-medium ${formErrors.email ? 'border-red-500/50' : 'border-white/10'}`}
                            placeholder="john@company.com" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono font-bold uppercase text-gray-500 tracking-wider ml-1">
                            Phone Number
                          </label>
                          <input 
                            name="phone" 
                            type="tel" 
                            value={formData.phone} 
                            onChange={handleInputChange}
                            className={`w-full p-3 bg-white/5 border rounded-lg text-white focus:border-[#0062D1] focus:bg-white/10 outline-none transition-all placeholder-gray-600 font-medium ${formErrors.phone ? 'border-red-500/50' : 'border-white/10'}`}
                            placeholder="+1 (555) 000-0000" 
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold uppercase text-blue-300/70 tracking-wider ml-1">
                          Project Brief
                        </label>
                        <textarea 
                          rows={4}
                          name="project"
                          value={formData.project}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#0062D1] focus:bg-white/10 outline-none transition-all font-medium placeholder-gray-600 resize-none"
                          placeholder="Describe your goals, tech stack, and timeline..."
                        ></textarea>
                      </div>

                      <div className={`space-y-3 bg-white/5 p-4 rounded-lg border ${formErrors.crm ? 'border-red-500/30 bg-red-500/5' : 'border-white/5'}`}>
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <div className="relative flex items-center mt-0.5">
                            <input 
                              type="checkbox" 
                              name="crm" 
                              checked={formData.crm} 
                              onChange={handleInputChange}
                              className="peer sr-only" 
                            />
                            <div className="w-4 h-4 border border-gray-600 rounded bg-transparent peer-checked:bg-[#0062D1] peer-checked:border-[#0062D1] transition-all"></div>
                            <Check size={10} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                          </div>
                          <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-tight">
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
                            <div className="w-4 h-4 border-2 border-gray-600 rounded bg-transparent peer-checked:bg-[#0062D1] peer-checked:border-[#0062D1] transition-all"></div>
                            <Check size={10} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                          </div>
                          <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-tight">
                            I request a Non-Disclosure Agreement (NDA) before details.
                          </span>
                        </label>
                      </div>

                      {formErrors.crm && (
                        <div className="flex items-center gap-1 text-red-400 text-[10px] mt-1">
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
                              <span className="animate-spin mr-2"><Activity size={16} /></span> 
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={16} className="mr-2" /> 
                              Send Request
                            </>
                          )}
                        </Button>
                        <p className="text-[10px] text-center text-gray-500 mt-4 flex items-center justify-center gap-1">
                          <Lock size={10} /> End-to-end encrypted submission.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
