'use client'

import {useEffect, useState} from "react";
import axios from "axios";

export default function Home() {
    const [text, setText] = useState<string>("");
    
    useEffect(() => {
        axios.get("http://localhost:5000/api/home")
            .then((response) => {
                setText(response.data);
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    
    return (
      <div className="text-white">
          {text}
      </div>
    );
}
