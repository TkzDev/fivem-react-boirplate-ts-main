import React, { useState } from "react";
import { fetchNui } from "../utils/fetchNui";
import "../Global.css"
import { Button } from "@/components/ui/button";

export function ListExample() {
  const onClickSession = (modelSelected: string) => {
    console.log("[TKZ TS-API]:" + modelSelected );
    fetchNui("submitApply", {
      infos: { modelSelected } 
    })
    .then((event) => {
      console.log("[TKZ TS-API SUCCESS TO CLOSE NUI]: " + event);
    })
    .catch((err) => {
      console.error("[TKZ TS-API ERROR TO CLOSE NUI]: " + err);
    })
  };

  function handleSubmitConfirm(selectModalOption: string) {
    onClickSession(selectModalOption)
  }

  return (
    <div className="flex flex-col items-center justify-center fixed top-0 left-0 right-0 bottom-0">
      <h1 className="text-white font-bold py-2 px-4">Hello world</h1>
      <Button
        className="w-[256px] h-[50px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
        onClick={() => handleSubmitConfirm("Modal Submit Handle")}
        >
        Handle Submit
      </Button>
    </div>
  );
}
