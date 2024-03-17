"use client"
import React from "react";
import "tailwindcss/tailwind.css";
import { Image, Text, Button } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* text area */}
        <div className="col-span-7">
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
            className="text-white mb-2 text-5xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold"
          >
            Hello I'm Devindhi{""}
          </Text>
          <TypeAnimation
            sequence={[
                "Software Engineer",
                1000,
                "Web Developer",
                1000,
             
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2.5em", display: "inline-block",color:"white" }}
            repeat={Infinity}
          />
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            As a highly motivated second-year undergraduate pursuing a degree in
            Computer Science who is keen to learn new skills and technologies, I
            am excited to apply my skills and experience in a real-world IT
            environment. My passion for technology and my dedication to
            continuous learning motivates me to join a group of seasoned and
            experienced IT professionals in the industry respectively.
          </p>
          <div>
            <Button
              colorScheme="purple"
              size="lg"
              mr={6}
              mb={6}
              className="px-6 inline-block py-3 w-full sm:w-fit "
            >
              Hire Me
            </Button>
            <Button
              colorScheme="purple"
              size="lg"
              variant="outline"
              mb={6}
              className="px-6 inline-block py-3 w-full sm:w-fit "
            >
              Download CV
            </Button>
          </div>
        </div>
        {/* image */}
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[380px] h-[380px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              borderRadius="full"
              /* centering the image relative to the parent*/
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              boxSize="380px"
              src="/profile2.jpeg"
              alt="Dan Abramov"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
