"use client"

import React, { useState } from "react"
import RadioButton from "./Radio"
import PricingSelect from "./PricingInput"
import SubscriptionPlan from "./SubscriptionPlan"
import NotesTextarea from "./Notes"
import Button from "../ui/Button"
import Image from "next/image"
import { clock } from "@/public"
import Calendarcomponent from "./Calender"

const Right = () => {
  interface TxF {
    id: string
    time: String
  }
  const TimeSlots: TxF[] = [
    { id: "1", time: "11:30AM" },
    { id: "2", time: "11:30AM" },
    { id: "3", time: "11:30AM" },
    { id: "4", time: "11:30AM" },
    { id: "5", time: "11:30AM" },
    { id: "6", time: "11:30AM" },
  ]

  const options = [
    { label: "GMT", value: "GMT" },
    { label: "WAT", value: "WAT" },
    { label: "EST", value: "EST" },
    { label: "GST", value: "GST" },
  ]
  const [value, onChange] = useState(new Date())
  const [selectedValue, setSelectedValue] = useState<string>("GMT")
  const [selectedPlan, setSelectedPlan] = useState<string>("")
  const [selectedPricing, setSelectedPricing] = useState<string>("")
  const [notes, setNotes] = useState<string>("")

  const handlePlanChange = (value: string) => {
    setSelectedPlan(value)
  }

  const handlePricingChange = (value: string) => {
    setSelectedPricing(value)
  }

  const handleNotesChange = (value: string) => {
    setNotes(value)
  }

  const handleRadioChange = (value: string) => {
    setSelectedValue(value)
  }

  return (
    <>
      <div>
        <p className="font-Hanken font-bold text-lg">Available Sessions</p>
        <Calendarcomponent value={value} />
      </div>
      <div>
        <p className="font-Hanken font-bold text-lg">Available time slots</p>
        <ul className="flex flex-wrap gap-6 ">
          {TimeSlots.map((time) => (
            <li
              key={time.id}
              className="border border-black py-2 px-5 rounded-lg flex gap-2"
            >
              <Image src={clock} alt="" />
              {time.time}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-grow border-t border-Neutra30"></div>
      <div>
        {" "}
        <p className="font-Hanken font-bold text-lg">Time Zones</p>
        <div className="flex flex-wrap gap-8 ">
          {options.map((option) => (
            <RadioButton
              key={option.value}
              label={option.label}
              value={option.value}
              selectedValue={selectedValue}
              onSelect={handleRadioChange}
            />
          ))}
        </div>
      </div>
      <SubscriptionPlan
        selectedPlan={selectedPlan}
        onChange={handlePlanChange}
      />
      <PricingSelect
        selectedPricing={selectedPricing}
        onChange={handlePricingChange}
      />
      <NotesTextarea notes={notes} onChange={handleNotesChange} />
      <div className="text-center border border-black">
        <Button
          className={`w-full`}
          variant="primary"
          paddingLess={false}
          type="button"
          // onClick={handleClick}
          iconPresent={false}
        >
          <p className="font-Hanken text-sm font-bold text-white">
            Book Session Now
          </p>
        </Button>
      </div>
    </>
  )
}

export default Right
