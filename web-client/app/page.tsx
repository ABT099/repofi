import axios from "axios";

export async function getMessage(): Promise<string> {
    return await axios.get("http://localhost:5000/api/home")
        .then(res => res.data)
        .catch(err => console.log(err));
}

export default async function Home() {
    const text = await getMessage();
        
    return (
        <>{text}</>
    );
}
