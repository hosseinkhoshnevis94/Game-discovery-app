import React from "react";
import { Platform } from "../../../../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {

  const icons:{[key:string]:IconType} = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
      {platforms.map((p) => (
        <Icon key={p.id} as={icons[p.slug]} color={'red.400'}></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
