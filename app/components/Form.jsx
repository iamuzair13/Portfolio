"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form as ShadcnForm,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Fragment, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactAction } from "../(pages)/contact/sales/contact-action";


export default function Form() {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      BusinessEmail: "",
      budget: "",
      projectDetails: "",
      referance: "",
    },
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await fetch("/API/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      alert(data.message);
      form.reset();
    } catch (err) {
      alert("Something went wrong ❌");
    }
    setLoading(false);
  };

  return (
    <Fragment>
      <div className="p-10 bg-white rounded-[20px]">
        <FormProvider {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="BusinessEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Business Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Email"
                      {...field}
                      className="w-full lg:min-h-[60px]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select your budget</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full lg:min-h-[60px]">
                        <SelectValue placeholder="Enter your budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="$0 - $500">$0 - $500</SelectItem>
                        <SelectItem value="$500 - $1000">$500 - $1000</SelectItem>
                        <SelectItem value="$1000+">$1000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Tell us more about your website project.
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="lg:min-h-[120px]"
                      placeholder="Describe your project..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="referance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How did you hear about us?</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Reference (Google, Friend, etc.)"
                      {...field}
                      className="w-full lg:min-h-[60px]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full lg:min-h-[40px] cursor-pointer bg-[#0a48e7] hover:bg-[#0f3bbe]"
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </form>
        </FormProvider>
      </div>
    </Fragment>
  );
}
