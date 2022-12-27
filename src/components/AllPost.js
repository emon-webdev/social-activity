import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineWechat } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FcLike } from "react-icons/fc";

const AllPost = () => {
  return (
    <div className="post-area mx-auto py-12">
      <h2 className="font-bold text-center py-5 mb-6 text-4xl">
        Add a <span className="text-[#D53F8C]">Post</span>
      </h2>
      <div>
        <Card className="mx-auto" maxW="md">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />

                <Box>
                  <Heading size="sm">Segun Adebayo</Heading>
                  <Text>Creator, Chakra UI</Text>
                </Box>
              </Flex>
              {/* <IconButton icon={<BsThreeDotsVertical />} /> */}
              <BsThreeDotsVertical
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
              />
            </Flex>
          </CardHeader>

          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
          />
          <CardBody>
            <Text>
              With Chakra UI, I wanted to sync the speed of development with the
              speed of design. I wanted the developer to be just as excited as
              the designer to create a screen.
            </Text>
          </CardBody>

          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Button flex="1" variant="ghost">
              <FcLike
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
              />
              Love
            </Button>
            <Button flex="1" variant="ghost">
              <AiOutlineWechat
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
              />
              Comment
            </Button>

            <Button flex="1" variant="ghost">
              <BiShare
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
              />
              Share
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AllPost;
