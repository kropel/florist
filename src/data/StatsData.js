import React from "react"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

export const StatsData = [
  {
    icon: (
      <GiEarthAmerica
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "Over 100 Destination",
    desc: "Travel to over 100 unique places.",
  },
  {
    icon: (
      <MdAirplanemodeActive
        css={`
          color: #f3a82e;
        `}
      />
    ),
    title: "1 Million Trips Made",
    desc: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: (
      <MdTimer
        css={`
          color: #f34f2e;
        `}
      />
    ),
    title: "Lorem ipsum dolor sit amet.",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: (
      <FaMoneyCheck
        css={`
          color: #3af576;
        `}
      />
    ),
    title: "Lorem, ipsum.",
    desc: "Lorem ipsum dolor sit amet consectetur.",
  },
]
