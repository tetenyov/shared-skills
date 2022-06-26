import React, { useState, ReactNode, FormEventHandler } from "react";
import { CommonLayout } from "../components";

export default function CheckPage() {
  const [addressToCheck, setAddressToCheck] = useState("");

  const addressInputHandler: FormEventHandler<HTMLInputElement> = (evt) => {
    if (evt.target instanceof HTMLInputElement) {
      setAddressToCheck(evt.target.value);
    }
  };

  return (
    <form action="">
      <p>Request test result of&nbsp;any of&nbsp;users</p>
      <p>
        It&rsquo;s free for your own result and 0.1eth for points of&nbsp;others
      </p>
      <div>
        <input
          type="text"
          placeholder="Address 0x..."
          value={addressToCheck}
          onChange={addressInputHandler}
        />
        <button type="submit">Request</button>
      </div>
      <p>
        The result of&nbsp;
        {`${addressToCheck.slice(0, 2)}...${addressToCheck.slice(-4)} `}
        is&nbsp;{0}&nbsp;points
      </p>
    </form>
  );
}

CheckPage.getLayout = function getLayout(page: ReactNode): ReactNode {
  return <CommonLayout>{page}</CommonLayout>;
};
