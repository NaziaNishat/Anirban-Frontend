import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";

interface Props {
  hrs: number;
}

export const Timer: React.FC<Props> = (props) => {
  const hrs = props.hrs;

  const [secs, decrement] = useState(hrs * 3600);
  useEffect(() => {
    if (secs > 0) {
      const progressLevel = setInterval(() => {
        decrement(secs - 1);
      }, 1000);
      return () => clearInterval(progressLevel);
    }
  }, [secs, hrs]);

  const min = parseInt(((secs / 60) % 60).toString(), 10);
  const sec = parseInt((secs % 60).toString(), 10);
  const hour = parseInt((secs / 3600).toString(), 10);
  const minutes = min < 10 ? "0" + min : min;
  const seconds = sec < 10 ? "0" + sec : sec;
  const hours = hour < 10 ? "0" + hour : hour;
  return (
    <Text
      fontSize="lg"
      fontWeight="bold"
      color="red"
    >{`${hours}:${minutes}:${seconds}`}</Text>
  );
};
