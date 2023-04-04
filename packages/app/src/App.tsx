import React, { useState } from "react";
import { Button } from "@lerna-learn/components";
const App = () => {
  const [count, setCount] = useState(0);

  return <Button onClick={() => setCount(count + 1)} />;
};

export default App;
