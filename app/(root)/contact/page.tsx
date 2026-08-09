import { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { pagesConfig } from "@/config/pages";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

// Pulled from config/socials.ts so there is only one place to change your email.
const email =
  SocialLinks.find((s) => s.link.startsWith("mailto:"))?.link ?? "mailto:";

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <Card className="mx-auto w-full max-w-xl">
        <CardContent className="flex flex-col items-center gap-6 p-8 text-center sm:p-12">
          <Icons.gmail className="h-10 w-10 text-muted-foreground" />
          <div className="space-y-2">
            <h2 className="font-heading text-2xl tracking-tight lg:text-3xl">
              Get in touch
            </h2>
            <p className="text-muted-foreground">
              The fastest way to reach me is by email. I&#39;m open to
              internships, new-grad roles, and interesting data problems.
            </p>
          </div>
          <Link
            href={email}
            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
          >
            {email.replace("mailto:", "")}
          </Link>
          <div className="flex items-center gap-4 pt-2">
            {SocialLinks.filter((s) => !s.link.startsWith("mailto:")).map(
              (social) => (
                <Link
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "h-10 w-10 p-2"
                  )}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              )
            )}
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
