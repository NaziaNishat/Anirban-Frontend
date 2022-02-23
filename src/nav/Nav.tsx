import {
  Box,
  BoxProps,
  Link,
  LinkProps,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { NavItemSchema } from "./navItem";
import { Colors } from "../config/colors";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export const Nav = ({
  items,
  ...props
}: BoxProps & { items: NavItemSchema[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box>
      {isMobile && (
        <Box textAlign="right">
          <Icon
            fontSize="1.3rem"
            color={Colors.primary}
            as={isOpen ? FaTimes : FaBars}
            onClick={() => setIsOpen(!isOpen)}
          />
        </Box>
      )}
      {(!isMobile || isOpen) && (
        <Box
          display="flex"
          flexDir={["column", "column", "row", "row"]}
          textAlign={["right", "right", "left", "left"]}
          {...props}
        >
          {items.map((item) => (
            <NavItem
              key={item.name}
              px={isMobile ? 0 : 3}
              py={isMobile ? 3 : 0}
              fontSize={["lg", "lg", "md", "md"]}
              fontWeight="bold"
              {...item}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

const NavItem = ({
  name,
  url,
  action,
  ...props
}: NavItemSchema & LinkProps) => {
  const { pathname } = useLocation();
  const isActive = url && url === pathname;

  return (
    <Box
      color={isActive ? Colors.tertiary : Colors.primary}
      borderRight={[
        "none",
        "none",
        `1px solid ${Colors.secondary}`,
        `1px solid ${Colors.secondary}`,
      ]}
      _last={{
        borderRight: "none",
      }}
    >
      {url ? (
        <Link as={RouterLink} to={url} {...props}>
          {name}
        </Link>
      ) : (
        <Link onClick={action} {...props}>
          {name}
        </Link>
      )}
    </Box>
  );
};
