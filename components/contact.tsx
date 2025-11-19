"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { contactContent } from "@/presentation/constants/contact-us";
import { NAVS } from "@/presentation/constants/navs";
import Link from "next/link";
import { useState } from "react";
import { SectionWrapper } from "./section-wrapper";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Booking successful!",
          description:
            "We've received your request and will get back to you shortly.",
        });
        setFormData({ name: "", phone: "", address: "" });
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white" id={NAVS.contact}>
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-4 text-balance leading-normal">
              {contactContent.header.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {contactContent.header.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-black leading-normal">
                  {contactContent.contactInfo.title}
                </h3>
                <p className="text-gray-700 text-lg">
                  {contactContent.contactInfo.description}
                </p>
              </div>

              <div className="space-y-6">
                {/* Dynamically render contact items */}
                {contactContent.contactInfo.items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-black">
                        {item.label}
                      </p>
                      {item.label === "WhatsApp" ? (
                        <Link
                          href={`https://wa.me/${item.value.replace(/\s/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-primary transition-colors"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="text-gray-700">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Booking Form */}
            <Card className="p-8 bg-white border rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold text-black mb-6 leading-normal">
                {contactContent.bookingForm.title}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-black">
                    {contactContent.bookingForm.fields.name.label}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={
                      contactContent.bookingForm.fields.name.placeholder
                    }
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="text-black placeholder:text-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-black">
                    {contactContent.bookingForm.fields.phone.label}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={
                      contactContent.bookingForm.fields.phone.placeholder
                    }
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="text-black placeholder:text-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-black">
                    {contactContent.bookingForm.fields.address.label}
                  </Label>
                  <Textarea
                    id="address"
                    placeholder={
                      contactContent.bookingForm.fields.address.placeholder
                    }
                    rows={3}
                    className="resize-none text-black placeholder:text-gray-700"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full !mt-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Booking..."
                    : contactContent.bookingForm.submitButton}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
