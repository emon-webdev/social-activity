import {
  Box,
  Button,
  Card,
  CardHeader,
  Flex,
  Heading, useDisclosure
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaUserEdit } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import InfoCard from "./InfoCard";

const About = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { user } = useContext(AuthContext);
  const aboutInfo = useLoaderData();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleUpdateMe = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const photoUrl = form.photoUrl.value;
    const message = form.message.value;

    const profile = {
      name: title,
      price: price,
      picture: photoUrl,
      about: message,
    };
    console.log(profile);
  };

  return (
    <div className="about-area mx-auto py-16">
      <div className="container">
        <div>
          <Card>
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="md">About Me__!</Heading>
                  </Box>
                </Flex>
                {/* <FaUserEdit
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                /> */}
                <Button
                  style={{ color: "#d53f8c" }}
                  variant="ghost"
                  onClick={onOpen}
                >
                  <FaUserEdit
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                  />
                  Edit
                </Button>
              </Flex>
            </CardHeader>
            {aboutInfo?.map((info) => (
              <InfoCard
                key={info._id}
                isOpen={isOpen}
                onClose={onClose}
                info={info}
                handleUpdateMe={handleUpdateMe}
              />
            ))}
          </Card>
        </div>
      </div>
      {/* Modal */}
    </div>
  );
};

export default About;
