import React, { useActionState } from "react";

const Signup = () => {
  const [] = useActionState();
  return (
    <div>
      <form action={signup}></form>
    </div>
  );
};

export default Signup;
