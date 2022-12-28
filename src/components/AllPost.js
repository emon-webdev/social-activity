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
import React, { useContext } from "react";
import { BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const AllPost = ({ posts }) => {
  const { user } = useContext(AuthContext);
  const { img, userName, userEmail, _id, describe } = posts;
  console.log(_id)
  return (
    <div className="post-area mx-auto pb-12">
      <div>
        <Card className="mx-auto post-card" >
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                {user?.photoURL ? (
                  <Avatar name="Segun Adebayo" src={user?.photoURL} />
                ) : (
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                )}

                <Box>
                  <Heading size="sm">{userName}</Heading>
                  <Text>{userEmail}</Text>
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
            className="h-[250px]"
            objectFit="cover"
            src={img}
            alt="Chakra UI"
          />
          <CardBody>
            <Text>{describe.slice(0, 150)}</Text>
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
            {/* <Button flex="1" variant="ghost">
              <AiOutlineWechat
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
              />
              Comment
            </Button> */}
            <Link flex="1" variant="ghost" to={`/post/${_id}`}>
              <Button flex="1"  variant="ghost">
                <BiShare 
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                />
                Details
              </Button>
            </Link>

            {/* <Button flex="1" variant="ghost">
              <BsFillShareFill
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
              />
              Share
            </Button> */}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AllPost;
