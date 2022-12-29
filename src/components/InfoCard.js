import {
    Box,
    Button,
    CardBody,
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
    Text
} from "@chakra-ui/react";
import React from "react";

const InfoCard = ({ info, handleUpdateMe, isOpen, onClose }) => {
  console.log(info);

  return (
    <div>
      <CardBody key={info._id}>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Name
            </Heading>
            <Text pt="2" fontSize="sm">
              {info?.name}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Email
            </Heading>
            <Text pt="2" fontSize="sm">
              {info?.email}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              University
            </Heading>
            <Text pt="2" fontSize="sm">
              {info?.university}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Address
            </Heading>
            <Text pt="2" fontSize="sm">
              {info?.address}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      {/* modal */}
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
                    defaultValue={info?.name}
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
                    defaultValue={info?.email}
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
                    defaultValue={info?.university}
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
                    defaultValue={info?.address}
                    placeholder="Address"
                    className="w-full px-4 py-3 border"
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Save"
                onClick={onClose}
                className="border text-center mt-5 cursor-pointer border-[#1039AD] bg-[#1039AD] w-full h-[56px] rounded-[5px] text-white font-semibold hover:border-[#1039AD] hover:bg-transparent hover:text-[#1039AD] hover:duration-1650"
              />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default InfoCard;
