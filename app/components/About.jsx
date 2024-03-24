"use client";
import React, { useState, useTransition } from "react";
import { Image } from "@chakra-ui/react";
import { Grid, GridItem, Avatar } from "@chakra-ui/react";
import "tailwindcss/tailwind.css";
import Tab from "./Tab";

const TAB = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem>
          <Avatar name="John Doe" src="/css-3.png" />
        </GridItem>
        <GridItem>
          <Avatar name="Jane Smith" src="/html-5.png" />
        </GridItem>
        <GridItem>
          <Avatar name="Alice Johnson" src="/java.png" />
        </GridItem>
        <GridItem>
          <Avatar name="Bob Williams" src="/js.png" />
        </GridItem>
        <GridItem>
          <Avatar name="Eve Brown" src="/python.png" />
        </GridItem>
        <GridItem>
          <Avatar name="Eve Brown" src="/react.png" />
        </GridItem>
        <GridItem>
          <Avatar name="Eve Brown" src="/mongodb.png" />
        </GridItem>
        <GridItem>
          <Avatar name="Eve Brown" src="/firebase.png" />
        </GridItem>
        <GridItem>
          <Avatar name="Eve Brown" src="/flask.png" />
        </GridItem>
        <GridItem>
          <Avatar name="Eve Brown" src="/tailwind-css.png" />
        </GridItem>
        <GridItem>
          <Avatar name="Eve Brown" src="/node.png" />
        </GridItem>
      </Grid>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          B.Sc. (Hons) in Computer Science<br></br>
          Informatics Institute of Technology affiliated with University of
          Westminster.
        </li>
        <li>
          Foundation in Higher Education 2021<br></br>
          Informatics Institute of Technology<br></br>
          Grade - Distinction
        </li>
        <li>
          G.C.E. Ordinary Level 2020 - 2021<br></br>
          Vidura College, Colombo<br></br>
          Grade - 7A 2B passes
        </li>
        <li>
          Java Programming certification by Informatics Institute of Technology
        </li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          boxSize="350px"
          borderRadius="30"
          objectFit="cover"
          src="/pic2.jpg"
          alt="laptop pic"
        ></Image>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi there! I&apos;m a quick learner with a passion for coding and a
            love for exploring new technologies. Always eager to dive into the
            latest innovations, I thrive on the excitement of learning and
            mastering new skills.
          </p>
          <div className="flex flex-row mt-8 gap-6">
            <Tab
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </Tab>
            <Tab
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </Tab>
          </div>
          <div className="mt-8">{TAB.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default About;
