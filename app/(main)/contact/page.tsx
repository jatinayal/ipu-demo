import { HeroSection } from "@/components/HeroSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/Button";
import { Card, CardContent } from "@/components/Card";
import { MapPin, Phone, Mail } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="We're here to help. Reach out with your questions or plan a visit to our beautiful campus."
        size="md"
      />
      
      <SectionWrapper backgroundColor="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form Details */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Get in Touch</h2>
            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <input type="text" className="w-full rounded-md border p-2 focus:ring-2 focus:ring-primary focus:outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input type="text" className="w-full rounded-md border p-2 focus:ring-2 focus:ring-primary focus:outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input type="email" className="w-full rounded-md border p-2 focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea rows={4} className="w-full rounded-md border p-2 focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </Card>
          </div>

          {/* Directory & Info */}
          <div className="space-y-12 pt-4">
            <div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4 border-b pb-2">Main Campus</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-primary shrink-0" />
                  <span>{SITE_INFO.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4 h-6 w-6 text-primary shrink-0" />
                  <span>{SITE_INFO.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-4 h-6 w-6 text-primary shrink-0" />
                  <span>{SITE_INFO.email}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4 border-b pb-2">Key Departments</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Undergraduate Admissions:</span>
                  <span className="font-medium text-foreground">650-723-2091</span>
                </li>
                <li className="flex justify-between">
                  <span>Visitor Information Services:</span>
                  <span className="font-medium text-foreground">650-723-2560</span>
                </li>
                <li className="flex justify-between">
                  <span>Alumni Association:</span>
                  <span className="font-medium text-foreground">650-723-2021</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </SectionWrapper>
    </>
  );
}
