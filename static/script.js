import React, { useEffect, useState } from "react";

  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData().then((res) => {
      setData(res.data.attributes);
    })
  }, [])