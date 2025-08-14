"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MobileNav } from "@/components/mobile-nav"
import {
  Phone,
  MapPin,
  Star,
  Home,
  Building,
  Sparkles,
  Shield,
  Clock,
  Users,
  Check,
  Mail,
  User,
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">

      {/* Left: Logo + Name */}
      <div className="flex items-center gap-3 min-w-0">
        <Image
          src="/images/logo.png"
          alt="Alaska Cleaning Services Logo"
          width={140}
          height={90}
          className="w-32 sm:w-36 h-auto flex-shrink-0"
        />
        <div className="leading-tight truncate">
          <h1 className="font-serif font-black text-sm sm:text-base text-gray-900 truncate">
            Alaska Cleaning Services
          </h1>
          <p className="text-xs text-gray-600 hidden sm:block truncate">
            Rated Home Service Company
          </p>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-6">
        {["Home", "Services", "About", "Pricing", "Reviews", "Contact"].map(
          (item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="font-medium text-gray-700 hover:text-cyan-600 transition-colors duration-200"
            >
              {item}
            </button>
          )
        )}
      </nav>

      {/* Right: Call Button + Mobile Nav */}
      <div className="flex items-center gap-2">
        <Button
          className="hidden sm:flex bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-3 py-2 rounded-md shadow-md"
          onClick={() => window.open('tel:907-671-0552')}
        >
          <Phone className="w-4 h-4 mr-1" />
          <span className="hidden md:inline">907-671-0552</span>
          <span className="md:hidden">Call</span>
        </Button>

        {/* Mobile Nav Icon (Always Visible on < lg) */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>

    </div>
  </div>
</header>


        


      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/clean-home-alaska.png"
            alt="Clean Alaska home interior with mountain view"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-3 sm:px-4 lg:px-8">
          <h2 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 md:mb-6 leading-tight">
            Your Trusted Cleaning Partner Across Alaska
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-6 md:mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Family-owned and operated, we take pride in delivering reliable cleaning services that make your home shine.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 md:gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-sans font-semibold px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg w-full sm:w-auto min-h-[44px]"
              onClick={() => window.open("tel:907-671-0552")}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
              Call 907-671-0552
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 font-sans font-semibold px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg bg-transparent w-full sm:w-auto min-h-[44px]"
              onClick={() => scrollToSection("contact")}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="font-serif font-black text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">
              Professional Cleaning Services
            </h3>
            <p className="font-sans text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              From residential to commercial, our dedicated team tailors our services to meet your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-cyan-600 transition-colors duration-300">
                  <Home className="w-7 h-7 md:w-8 md:h-8 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-serif font-bold text-lg md:text-xl text-gray-900 mb-3 md:mb-4">
                  Residential Cleaning
                </h4>
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
                  Complete home cleaning services including kitchens, bathrooms, bedrooms, and living areas.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                  <Building className="w-7 h-7 md:w-8 md:h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-serif font-bold text-lg md:text-xl text-gray-900 mb-3 md:mb-4">
                  Commercial Cleaning
                </h4>
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
                  Professional office and business cleaning to maintain a pristine work environment.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-cyan-600 transition-colors duration-300">
                  <Home className="w-7 h-7 md:w-8 md:h-8 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-serif font-bold text-lg md:text-xl text-gray-900 mb-3 md:mb-4">Gutter Cleaning</h4>
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
                  Professional gutter cleaning and maintenance to protect your home from water damage.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                  <Shield className="w-7 h-7 md:w-8 md:h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-serif font-bold text-lg md:text-xl text-gray-900 mb-3 md:mb-4">Roof Cleaning</h4>
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
                  Safe and effective roof cleaning to remove moss, debris, and extend your roof's lifespan.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-cyan-600 transition-colors duration-300">
                  <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-serif font-bold text-lg md:text-xl text-gray-900 mb-3 md:mb-4">Window Cleaning</h4>
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
                  Interior and exterior window cleaning for crystal clear views and enhanced curb appeal.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                  <Home className="w-7 h-7 md:w-8 md:h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-serif font-bold text-lg md:text-xl text-gray-900 mb-3 md:mb-4">Carpet Cleaning</h4>
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
                  Professional carpet and upholstery cleaning to remove stains and refresh your home.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="font-serif font-black text-3xl md:text-4xl text-gray-900 mb-4">
              Why Choose Alaska Cleaning Services?
            </h3>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              We're more than just a cleaning service - we're your trusted partners in maintaining a clean, healthy
              environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <Image
                src="/images/professional-cleaner.png"
                alt="Professional Alaska Cleaning Services staff member cleaning"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Right: Bullet points */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-gray-900 mb-2">Experienced & Trusted Staff</h4>
                  <p className="font-sans text-gray-600">
                    Our trained professionals are background-checked and fully insured for your peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-gray-900 mb-2">Eco-Friendly Products</h4>
                  <p className="font-sans text-gray-600">
                    We use environmentally safe cleaning products that are effective yet gentle on your family and pets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-gray-900 mb-2">Flexible Scheduling</h4>
                  <p className="font-sans text-gray-600">
                    We work around your schedule with convenient appointment times that fit your busy lifestyle.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-gray-900 mb-2">100% Satisfaction Guarantee</h4>
                  <p className="font-sans text-gray-600">
                    If you're not completely satisfied, we'll return within 24 hours to make it right at no extra
                    charge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing/Packages Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="font-serif font-black text-3xl md:text-4xl text-gray-900 mb-4">
              Choose Your Cleaning Package
            </h3>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible cleaning packages designed to meet your specific needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <Card className="relative hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h4 className="font-serif font-bold text-2xl text-gray-900 mb-2">Basic</h4>
                  <div className="font-serif font-black text-4xl text-cyan-600 mb-4">$80</div>
                  <p className="font-sans text-gray-600">Perfect for regular maintenance</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-sans text-gray-700">General cleaning of all rooms</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-sans text-gray-700">Kitchen & bathroom cleaning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-sans text-gray-700">Vacuuming & mopping</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-sans text-gray-700">Dusting surfaces</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-sans font-medium">
                  Choose Basic
                </Button>
              </CardContent>
            </Card>

            {/* Standard Package */}
            <Card className="relative hover:shadow-lg transition-all duration-300 border-2 border-cyan-600">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-600 text-white px-4 py-2 rounded-full font-sans font-medium text-sm">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h4 className="font-serif font-bold text-2xl text-gray-900 mb-2">Standard</h4>
                  <div className="font-serif font-black text-4xl text-cyan-600 mb-4">$120</div>
                  <p className="font-sans text-gray-600">Comprehensive cleaning solution</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-sans text-gray-700">Everything in Basic package</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-sans text-gray-700">Inside appliance cleaning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-sans text-gray-700">Baseboards & window sills</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-sans text-gray-700">Light fixture cleaning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-sans text-gray-700">Interior window cleaning</span>
                  </li>
                </ul>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-sans font-medium">
                  Choose Standard
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="relative hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h4 className="font-serif font-bold text-2xl text-gray-900 mb-2">Premium</h4>
                  <div className="font-serif font-black text-4xl text-cyan-600 mb-4">$180</div>
                  <p className="font-sans text-gray-600">Complete deep cleaning service</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-sans text-gray-700">Everything in Standard package</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-sans text-gray-700">Cabinet fronts & interiors</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-sans text-gray-700">Detailed bathroom deep clean</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-sans text-gray-700">Ceiling fan cleaning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-sans text-gray-700">Garage/basement cleaning</span>
                  </li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-medium">
                  Choose Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="font-serif font-black text-3xl md:text-4xl text-gray-900 mb-4">What Our Customers Say</h3>
            <p className="font-sans text-lg text-gray-600">
              Hear from our satisfied customers who trust us to keep their spaces clean.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="font-sans text-gray-600 mb-6 leading-relaxed">
                  "Alaska Cleaning Services transformed our home! Their attention to detail is incredible, and they're
                  always reliable. Highly recommend!"
                </p>
                <div className="font-sans font-semibold text-gray-900">Sarah M.</div>
                <div className="font-sans text-sm text-gray-500">Anchorage, AK</div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="font-sans text-gray-600 mb-6 leading-relaxed">
                  "Professional, thorough, and trustworthy. They've been cleaning our office for over a year and we
                  couldn't be happier with their service."
                </p>
                <div className="font-sans font-semibold text-gray-900">Mike R.</div>
                <div className="font-sans text-sm text-gray-500">Fairbanks, AK</div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="font-sans text-gray-600 mb-6 leading-relaxed">
                  "Family-owned business that truly cares about their customers. They go above and beyond every single
                  time. Thank you!"
                </p>
                <div className="font-sans font-semibold text-gray-900">Jennifer L.</div>
                <div className="font-sans text-sm text-gray-500">Juneau, AK</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif font-black text-3xl md:text-4xl text-white mb-6">Ready for a Spotless Clean?</h3>
          <p className="font-sans text-lg text-cyan-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us today at 907-671-0552 for a free quote! We serve all of Alaska with reliable, professional
            cleaning services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-sans font-semibold px-8 py-3 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 907-671-0552
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-cyan-600 font-sans font-semibold px-8 py-3 text-lg bg-transparent"
            >
              Text Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="font-serif font-black text-3xl md:text-4xl text-gray-900 mb-4">Get Your Free Quote Today</h3>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours with a personalized quote.
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-sans font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        className="pl-10 font-sans"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-sans font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 font-sans"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block font-sans font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input id="phone" type="tel" placeholder="(907) 555-0123" className="pl-10 font-sans" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block font-sans font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md font-sans focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Cleaning</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="gutter">Gutter Cleaning</option>
                      <option value="roof">Roof Cleaning</option>
                      <option value="window">Window Cleaning</option>
                      <option value="carpet">Carpet Cleaning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-sans font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Textarea
                      id="message"
                      placeholder="Tell us about your cleaning needs, property size, frequency, or any special requirements..."
                      className="pl-10 font-sans min-h-[120px]"
                      rows={5}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-sans font-semibold py-3 text-lg"
                >
                  Get My Free Quote
                </Button>

                <p className="text-center font-sans text-sm text-gray-500">
                  Or call us directly at{" "}
                  <a href="tel:907-671-0552" className="text-cyan-600 hover:text-cyan-700 font-medium">
                    907-671-0552
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/alaskalogo.jpg"
                  alt="Alaska Cleaning Services Logo"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <div>
                  <h4 className="font-serif font-bold text-xl">Alaska Cleaning Services</h4>
                  <p className="text-sm text-gray-400">Rated Home Service Company in Alaska</p>
                </div>
              </div>
              <p className="font-sans text-gray-300 leading-relaxed mb-6 max-w-md">
                Family-owned and operated cleaning service proudly serving all of Alaska. We're committed to providing
                reliable, professional cleaning solutions that exceed your expectations every time.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-serif font-bold text-lg mb-6">Our Services</h5>
              <ul className="font-sans text-gray-300 space-y-3">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                    Residential Cleaning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                    Commercial Cleaning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                    Gutter Cleaning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                    Roof Cleaning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                    Window Cleaning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                    Carpet Cleaning
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="font-serif font-bold text-lg mb-6">Contact Us</h5>
              <div className="font-sans text-gray-300 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <a
                      href="tel:907-671-0552"
                      className="hover:text-cyan-400 transition-colors duration-300 font-medium"
                    >
                      907-671-0552
                    </a>
                    <p className="text-sm text-gray-400">Call or Text</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Serving Alaska Wide</span>
                    <p className="text-sm text-gray-400">Statewide Coverage</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Mon - Sat: 8AM - 6PM</span>
                    <p className="text-sm text-gray-400">Sunday: Emergency Only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="font-sans text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Alaska Cleaning Services. All rights reserved.
            </p>
            <div className="flex gap-6 font-sans text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
