import { useContext } from "react";
import { globalStateContext } from "./context";

export function loadMP3(url: string): Promise<ArrayBuffer> {
    const { audioContext } = useContext(globalStateContext);

    return new Promise<ArrayBuffer>(async (resolve, reject) => {
        const result = await fetch(url)
            .then((response) => response.arrayBuffer());

        resolve(result);
    });
}

export function formatSeconds(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}