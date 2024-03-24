import React from "react";
import { Card, CardHeader, CardBody, Link, Image } from "@chakra-ui/react";
import { Box, Heading, Text, Stack, StackDivider } from "@chakra-ui/react";

const Contact = () => {
  return (
    <div id="contact">
      <Card>
        <CardHeader>
          <Heading size="md">Let&apos;s Connect</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Text pt="2" fontSize="sm">
                <Text pt="2" fontSize="sm">
                  Thank you for visiting my portfolio! Here, you&apos;ve
                  glimpsed into my world of projects and creations. If
                  you&apos;re interested in hiring me or talking to me, I&apos;d
                  love to hear from you. Let&apos;s connect and discuss.
                  I&apos;m ready to contribute my skills and expertise to help
                  achieve your goals. Looking forward to the possibility of
                  working together!
                </Text>
              </Text>
            </Box>
            <Box>
              <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/devindhi">
                  <Image src={"/git.png"} alt="Github Icon" />
                </Link>
                <Link href="https://www.linkedin.com/in/devindhi-gurusinghe-180b12295/">
                  <Image src={"/link.png"} alt="Linkedin Icon" />
                </Link>
              </div>
            </Box>
            <Box>
              <Text pt="2" fontSize="sm">
                Gmail: devindhigurusinghe@gmail.com
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default Contact;
