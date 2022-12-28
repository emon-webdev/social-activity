import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  StackDivider,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaUserEdit } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";

const About = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { user } = useContext(AuthContext);
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
            <CardHeader></CardHeader>
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
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Name
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Emon Hossain
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Email
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    emon.hossain.web@gmail.com
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    University
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Novel Polytechnic & Textile Institute, Jhenaidah
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Address
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Jhenaidah, Dhaka, Bangladesh
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </div>
      </div>
      {/* Modal */}

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleUpdateMe}>
              <div className="">
                <div className=" w-full text-sm mb-4">
                  <label htmlFor="name" className="block mb-2 text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={'Emon Hossain'}
                    placeholder="Name"
                    className="w-full px-4 py-3 border"
                  />
                </div>
                <div className=" w-full text-sm mb-4">
                  <label htmlFor="name" className="block mb-2 text-gray-400">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    defaultValue={'Email'}
                    placeholder="Email"
                    className="w-full px-4 py-3 border"
                  />
                </div>
                <div className=" w-full text-sm mb-4">
                  <label htmlFor="name" className="block mb-2 text-gray-400">
                    University
                  </label>
                  <input
                    type="text"
                    name="university"
                    defaultValue={'University'}
                    placeholder="University"
                    className="w-full px-4 py-3 border"
                  />
                </div>
                <div className=" w-full text-sm mb-4">
                  <label htmlFor="name" className="block mb-2 text-gray-400">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    defaultValue={'address'}
                    placeholder="Address"
                    className="w-full px-4 py-3 border"
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Save"
                className="border text-center mt-5 cursor-pointer border-[#1039AD] bg-[#1039AD] w-full h-[56px] rounded-[5px] text-white font-semibold hover:border-[#1039AD] hover:bg-transparent hover:text-[#1039AD] hover:duration-1650"
              />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default About;
