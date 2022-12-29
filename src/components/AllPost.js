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
  Input,
  Text
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AiOutlineComment } from "react-icons/ai";
import { BsFillShareFill, BsThreeDotsVertical } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const AllPost = ({ posts }) => {
  const { user } = useContext(AuthContext);
  const { img, userName, userEmail, _id, describe } = posts;
  const [loveCount, setLoveCount] = useState(0);
  const [comments, setComment] = useState("");

  return (
    <div className="post-area mx-auto pb-12">
      <div>
        <div>
          <Card className="mx-auto post-card" maxW="md">
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
              style={{ backgroundSize: "cover", backgroundPosition: "center" }}
              className="h-[300px]"
              objectFit="cover"
              src={img}
              alt="Chakra UI"
            />
            <CardBody>
              <Text>{describe.slice(0, 150) + " ..."}</Text>
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
              <Button
                onClick={() => setLoveCount(loveCount + 1)}
                flex="1"
                variant="ghost"
              >
                <FcLike
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                />
                Love {loveCount}
              </Button>
              <Button flex="1" variant="ghost">
                <AiOutlineComment
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                />
                Comment
              </Button>

              <Button flex="1" variant="ghost">
                <BsFillShareFill
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                />
                <Link to={`/post/${_id}`}>Details</Link>
              </Button>
            </CardFooter>
            {/* //comment */}
            <div
              // style={{ display: "none !important" }}
              justify="space-between"
              flexWrap="wrap"
              className="px-5 py-3"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
            >
              <Input
                onChange={(e) => setComment(e.target.value)}
                className="mb-2"
                name="comment"
                pr=""
                type="text"
                placeholder="Comment"
              />
              {/* <br /> */}
              <Button
                style={{ background: "#d53f8c", color: "white" }}
                type="submit"
                colorScheme="pink"
                size="xs"
              >
                Add Comment
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AllPost;
