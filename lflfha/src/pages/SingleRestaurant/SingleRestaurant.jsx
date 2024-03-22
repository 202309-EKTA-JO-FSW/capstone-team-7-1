import React from "react";
import { useRouter } from "next/router";

export default function SingleRestaurant() {
  const router = useRouter();
  const restaurant = router.query;
  return <div>SingleRestaurant</div>;
}
