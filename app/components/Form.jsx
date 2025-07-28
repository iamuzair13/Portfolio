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
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import WSButton from "../UI/WSButton/WSButton";
import { Button } from "@/components/ui/button";

export default function Form() {
  const form = useForm({
    defaultValues: {
      BusinessEmail: "",
      budget: "",
      projectDetails: "",
      referance: "",
    },
  });

  const onSubmit = (values) => {
    console.log("Valus : ", values);
  };

  return (
    <Fragment>
      <div className="p-10 bg-white rounded-[20px]">
        <ShadcnForm {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="BusinessEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Business Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Email" {...field} className={"w-full lgmin-h-[60px]"} />
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
                      <SelectTrigger className={"w-full lg:min-h-[60px]"}>
                        <SelectValue placeholder="Select your budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">$0 - $500</SelectItem>
                        <SelectItem value="medium">$500 - $1000</SelectItem>
                        <SelectItem value="high">$1000+</SelectItem>
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
                    <Input placeholder="Your Email" {...field} className={"w-full lg:min-h-[60px]"} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className={'w-full lg:min-h-[40px] cursor-pointer bg-[#0a48e7] hover:bg-[#0f3bbe]'}>Submit</Button>
          </form>
        </ShadcnForm>
      </div>
    </Fragment>
  );
}
