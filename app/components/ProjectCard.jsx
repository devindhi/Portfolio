"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
} from "@chakra-ui/react";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";

const ProjectCard = ({ imgUrl, title, description, gitUrl, vid, demo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Grid templateRows="auto" autoFlow="row" gap={6}>
        <GridItem>
          <Image
            width={330}
            height="auto"
            borderRadius="30"
            className="mr-6 mb-6 transition-opacity duration-300 ease-in-out hover:opacity-60"
            src={imgUrl}
            onClick={handleOpenDrawer}
          />
        </GridItem>
      </Grid>

      {typeof window !== "undefined" && (
        <Drawer onClose={handleCloseDrawer} isOpen={isOpen} size="full">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{title}</DrawerHeader>
            <DrawerBody>
              <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Demonstration Image
                  </h2>
                  <AspectRatio maxW="450px" ratio={4 / 3}>
                    <Image
                      src={vid}
                      alt="naruto"
                      objectFit="cover"
                    />
                  </AspectRatio>
                </div>
                <div>
                  <p className="text-base lg:text-lg">{description}</p>
                  <Link href={gitUrl}>
                    <Image src={"/github-icon.svg"} alt="Github Icon" mt={8} />
                  </Link>
                  <Link href={demo}>
                   Demonstration
                  </Link>
                </div>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default ProjectCard;
