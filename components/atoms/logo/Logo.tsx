import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/">
      <Stack spacing={1} direction="row" alignItems="center">
        <Image
          src="/images/logo.png"
          alt="logo "
          priority
          width={50}
          height={50}
        />
        <Typography variant="h1" fontSize={17}>
          Todo Application
        </Typography>
      </Stack>
    </Link>
  );
};

export default Logo;
