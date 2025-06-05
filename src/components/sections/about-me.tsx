import Image from "next/image";

import SurajFullPose from "/public/images/suraj.jpeg"; // Update image path & name
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={SurajFullPose}
              alt="Full pose of Suraj"
              width={280}
              height={360}
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]" />
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>

          <Typography>
            I&apos;m <strong>Suraj Kumar</strong>, a dedicated frontend
            developer with <strong>3+ years of experience</strong> building
            responsive, scalable, and user-friendly web applications. Currently,
            I&apos;m working at RW Infotech Pvt. Ltd., where I specialize in
            crafting robust UIs using modern tools like{" "}
            <strong>React.js, Next.js, TypeScript, and Tailwind CSS</strong>.
          </Typography>

          <Typography>
            I&apos;ve had the opportunity to work on impactful projects such as{" "}
            <strong>
              Airdna, Know Your Rights, and American Orchid Society
            </strong>
            , where I focused on performance, accessibility, and
            component-driven architecture using CMSs like{" "}
            <strong>Prismic and Storyblok</strong>.
          </Typography>

          <Typography>
            I&apos;m also mentoring interns to help them grow as developers, and
            was recently honored with the{" "}
            <strong>Contagious Smile Award (2024)</strong> for my positive
            contributions.
          </Typography>

          <Typography>
            Receiving the <strong>Outstanding Mentorship Award (2025)</strong>{" "}
            is a deeply meaningful moment for me — a recognition of the shared
            growth, trust, and collaboration that define our culture at RW
            Infotech.
          </Typography>

          <Typography>Quick bits about me:</Typography>

          <div className="flex">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Master’s in Computer Applications (LPU)
              </Typography>
              <Typography component="li">
                Frontend Developer @ RW Infotech
              </Typography>
              <Typography component="li">
                Mentor to junior developers
              </Typography>
            </ul>
          </div>

          <Typography>
            Open for <strong>freelance work</strong> and collaborative
            projects—feel free to reach out and say hello!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
